import jsep from 'jsep';

import { ColumnType } from './Api';

export function substituteColumnIdWithAliasInFormula(
  formula,
  columns: ColumnType[],
  rawFormula?
) {
  const substituteId = (pt: any, ptRaw?: any) => {
    if (pt.type === 'CallExpression') {
      let i = 0;
      for (const arg of pt.arguments || []) {
        substituteId(arg, ptRaw?.arguments?.[i++]);
      }
    } else if (pt.type === 'Literal') {
      return;
    } else if (pt.type === 'Identifier') {
      const colNameOrId = pt?.name;
      const column = columns.find(
        (c) =>
          c.id === colNameOrId ||
          c.column_name === colNameOrId ||
          c.title === colNameOrId
      );
      pt.name = column?.title || ptRaw?.name || pt?.name;
    } else if (pt.type === 'BinaryExpression') {
      substituteId(pt.left, ptRaw?.left);
      substituteId(pt.right, ptRaw?.right);
    }
  };

  // register curly hook
  jsep.plugins.register({
    name: 'curly',
    init(jsep) {
      jsep.hooks.add('gobble-token', function gobbleCurlyLiteral(env) {
        const OCURLY_CODE = 123; // {
        const CCURLY_CODE = 125; // }
        const { context } = env;
        if (
          !jsep.isIdentifierStart(context.code) &&
          context.code === OCURLY_CODE
        ) {
          context.index += 1;
          const nodes = context.gobbleExpressions(CCURLY_CODE);
          if (context.code === CCURLY_CODE) {
            context.index += 1;
            if (nodes.length > 0) {
              env.node = nodes[0];
            }
            return env.node;
          } else {
            context.throwError('Unclosed }');
          }
        }
      });
    },
  } as jsep.IPlugin);
  const parsedFormula = jsep(formula);
  const parsedRawFormula = rawFormula && jsep(rawFormula);
  substituteId(parsedFormula, parsedRawFormula);
  return jsepTreeToFormula(parsedFormula);
}

export function jsepTreeToFormula(node) {
  if (node.type === 'BinaryExpression' || node.type === 'LogicalExpression') {
    return (
      '(' +
      jsepTreeToFormula(node.left) +
      ' ' +
      node.operator +
      ' ' +
      jsepTreeToFormula(node.right) +
      ')'
    );
  }

  if (node.type === 'UnaryExpression') {
    return node.operator + jsepTreeToFormula(node.argument);
  }

  if (node.type === 'MemberExpression') {
    return (
      jsepTreeToFormula(node.object) +
      '[' +
      jsepTreeToFormula(node.property) +
      ']'
    );
  }

  if (node.type === 'Identifier') {
    return '{' + node.name + '}';
  }

  if (node.type === 'Literal') {
    if (typeof node.value === 'string') {
      return '"' + node.value + '"';
    }

    return '' + node.value;
  }

  if (node.type === 'CallExpression') {
    return (
      jsepTreeToFormula(node.callee) +
      '(' +
      node.arguments.map(jsepTreeToFormula).join(', ') +
      ')'
    );
  }

  if (node.type === 'ArrayExpression') {
    return '[' + node.elements.map(jsepTreeToFormula).join(', ') + ']';
  }

  if (node.type === 'Compound') {
    return node.body.map((e) => jsepTreeToFormula(e)).join(' ');
  }

  if (node.type === 'ConditionalExpression') {
    return (
      jsepTreeToFormula(node.test) +
      ' ? ' +
      jsepTreeToFormula(node.consequent) +
      ' : ' +
      jsepTreeToFormula(node.alternate)
    );
  }

  return '';
}
