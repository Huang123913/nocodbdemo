import { isSystemColumn, RelationTypes, UITypes } from 'nocodb-sdk';
import Column from '../../../../../models/Column';
import LinkToAnotherRecordColumn from '../../../../../models/LinkToAnotherRecordColumn';
import LookupColumn from '../../../../../models/LookupColumn';
import Model from '../../../../../models/Model';
import View from '../../../../../models/View';

const getAst = async ({
  query,
  extractOnlyPrimaries = false,
  includePkByDefault = true,
  model,
  view,
  dependencyFields = {
    nested: {},
    fields: new Set(),
  },
}: {
  query?: RequestQuery;
  extractOnlyPrimaries?: boolean;
  includePkByDefault?: boolean;
  model: Model;
  view?: View;
  dependencyFields?: DependantFields;
}) => {
  if (!model.columns?.length) await model.getColumns();

  // extract only pk and pv
  if (extractOnlyPrimaries) {
    const ast = {
      ...(model.primaryKeys
        ? model.primaryKeys.reduce((o, pk) => ({ ...o, [pk.title]: 1 }), {})
        : {}),
      ...(model.primaryValue ? { [model.primaryValue.title]: 1 } : {}),
    };
    await Promise.all(
      model.primaryKeys.map((c) => extractDependencies(c, dependencyFields))
    );
    await extractDependencies(model.primaryValue, dependencyFields);

    return { ast, dependencyFields };
  }

  let fields = query?.fields || query?.f;
  if (fields && fields !== '*') {
    fields = Array.isArray(fields) ? fields : fields.split(',');
  } else {
    fields = null;
  }

  let allowedCols = null;
  if (view)
    allowedCols = (await View.getColumns(view.id)).reduce(
      (o, c) => ({
        ...o,
        [c.fk_column_id]: c.show,
      }),
      {}
    );

  const ast = await model.columns.reduce(async (obj, col) => {
    let value: number | boolean | { [key: string]: any } = 1;
    const nestedFields =
      query?.nested?.[col.title]?.fields || query?.nested?.[col.title]?.f;
    if (nestedFields && nestedFields !== '*') {
      if (col.uidt === UITypes.LinkToAnotherRecord) {
        const model = await col
          .getColOptions<LinkToAnotherRecordColumn>()
          .then((colOpt) => colOpt.getRelatedTable());

        const { ast } = await getAst({
          model,
          query: query?.nested?.[col.title],
          dependencyFields: (dependencyFields.nested[col.title] =
            dependencyFields.nested[col.title] || {
              nested: {},
              fields: new Set(),
            }),
        });

        value = ast;

        // todo: include field relative to the relation => pk / fk
      } else {
        value = (Array.isArray(fields) ? fields : fields.split(',')).reduce(
          (o, f) => ({ ...o, [f]: 1 }),
          {}
        );
      }
    } else if (col.uidt === UITypes.LinkToAnotherRecord) {
      const model = await col
        .getColOptions<LinkToAnotherRecordColumn>()
        .then((colOpt) => colOpt.getRelatedTable());

      value = await getAst({
        model,
        query: query?.nested?.[col.title],
        extractOnlyPrimaries: nestedFields !== '*',
        dependencyFields:(dependencyFields.nested[col.title] =
        dependencyFields.nested[col.title] || {
          nested: {},
          fields: new Set(),
        })
      });
    }

    const isRequested =
      allowedCols && (!includePkByDefault || !col.pk)
        ? allowedCols[col.id] &&
          (!isSystemColumn(col) || view.show_system_fields) &&
          (!fields?.length || fields.includes(col.title)) &&
          value
        : fields?.length
        ? fields.includes(col.title) && value
        : value;
    if (isRequested) await extractDependencies(col, dependencyFields);

    return {
      ...(await obj),
      [col.title]: isRequested,
    };
  }, Promise.resolve({}));

  return { ast, dependencyFields };
};

const extractDependencies = async (
  column: Column,
  dependencyFields: DependantFields = {
    nested: {},
    fields: new Set(),
  }
) => {
  switch (column.uidt) {
    case UITypes.Lookup:
      await extractLookupDependencies(column, dependencyFields);
      break;
    case UITypes.LinkToAnotherRecord:
      await extractRelationDependencies(column, dependencyFields);
      break;
    default:
      dependencyFields.fields.add(column.title);
      break;
  }
};

const extractLookupDependencies = async (
  lookUpColumn: Column<LookupColumn>,
  dependencyFields: DependantFields = {
    nested: {},
    fields: new Set(),
  }
) => {
  const lookupColumnOpts = await lookUpColumn.getColOptions();
  const relationColumn = await lookupColumnOpts.getRelationColumn();
  await extractRelationDependencies(relationColumn, dependencyFields);
  await extractDependencies(
    await lookupColumnOpts.getLookupColumn(),
    (dependencyFields.nested[relationColumn.title] = dependencyFields.nested[
      relationColumn.title
    ] || {
      nested: {},
      fields: new Set(),
    })
  );
};

const extractRelationDependencies = async (
  relationColumn: Column<LinkToAnotherRecordColumn>,
  dependencyFields: DependantFields = {
    nested: {},
    fields: new Set(),
  }
) => {
  const relationColumnOpts = await relationColumn.getColOptions();

  switch (relationColumnOpts.type) {
    case RelationTypes.HAS_MANY:
      dependencyFields.fields.add(
        await relationColumnOpts.getParentColumn().then((col) => col.title)
      );
      break;
    case RelationTypes.BELONGS_TO:
    case RelationTypes.MANY_TO_MANY:
      dependencyFields.fields.add(
        await relationColumnOpts.getChildColumn().then((col) => col.title)
      );

      break;
  }
};

type RequestQuery = {
  [fields in 'f' | 'fields']?: string | string[];
} & {
  nested?: {
    [field: string]: RequestQuery;
  };
};

interface DependantFields {
  fields?: Set<string>;
  nested?: DependantFields;
}

export default getAst;
