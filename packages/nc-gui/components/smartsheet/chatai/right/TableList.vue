<script lang="ts" setup>
import axios from 'axios'

import { EditOutlined } from '@ant-design/icons-vue'

import { useChataiStore } from '../../../../store/chatai'

const store = useChataiStore()
const { chataiData } = storeToRefs(store)
const { getCustomCatalogEntityTree, setSessionItem } = store
const showModal = ref<boolean>(false)
const selectedKeys = ref<string[]>([]) //勾选的模型
const isEdited = ref<boolean>(false)
const editText = ref<string>('')
const expandedKeys = ref<string[]>([])

const isShow = computed(() => {
  return chataiData.value.sessionItem?.sql
})

const columns = computed(() => {
  let result = chataiData.value.sessionItem?.tabledata ? JSON.parse(chataiData.value.sessionItem.tabledata).fields : []
  let fileds = result?.filter((item) => item.name !== 'id')
  let newFileds = fileds?.map((item) => {
    return { ...item, title: item.name, dataIndex: item.name }
  })
  return newFileds
})

const tableData = computed(() => {
  let result = chataiData.value.sessionItem?.tabledata ? JSON.parse(chataiData.value.sessionItem.tabledata).datas : []
  let newDatas = result?.map((item) => {
    let newItem = { ...item }
    delete newItem?.id
    return newItem
  })
  return newDatas
})

const filterCatalog = (data: any[], key: string) => {
  const checkedNodes: any[] = []
  const traverse = (nodes: any, key: string) => {
    for (const node of nodes) {
      if (node.key === key) {
        checkedNodes.push(node)
        return
      }
      node.children && traverse(node.children, key)
    }
  }
  traverse(data, key)
  return checkedNodes
}

// 发布按钮
const handleSaveBtn = async () => {
  expandedKeys.value = []
  const findParanent = (data: any[]) => {
    data.map((item) => {
      if (item.children) {
        expandedKeys.value.push(item.id)
        findParanent(item.children)
      }
    })
  }
  findParanent(chataiData.value.catalog)
  console.log('expandedKeys', expandedKeys)
  console.log('chataiData.value.catalog', chataiData.value.catalog)
  showModal.value = true
}
const handleOk = async (e: MouseEvent) => {
  if (!selectedKeys.value.length) {
    message.warning('请选择模型目录')
    return
  }
  let selectedCatalog = filterCatalog(chataiData.value.catalog, selectedKeys.value[0])
  console.log('选择的目录', selectedCatalog)
  console.log('test', chataiData.value.sessionItem)
  let model = JSON.parse(chataiData.value.sessionItem?.selectedModel)
  // let tableData = JSON.parse(chataiData.value.sessionItem?.tabledata)
  // console.log('tableData', tableData)
  // console.log('model', model)
  let jsonValue = {
    sql: chataiData.value.sessionItem.sql,
  }
  let fields: any[] = []
  model.map((item) => {
    fields.push(...item.fields)
  })
  fields = fields.map((item) => {
    return { ...item, id: `${Date.now()}` }
  })
  let name = `query_entity_${Date.now()}`
  let entities = [
    {
      id: `${Date.now()}`,
      name,
      code: name,
      name_cn: '测试模型1',
      belongCatalog: 'root',
      props: [
        {
          name: 'belongSQL',
          code: 'belongSQL',
          jsonValue: JSON.stringify(jsonValue),
        },
      ],
      fields,
    },
  ]
  // 保存模型
  let saveBizCustomEntity = await axios.post('/webapi/innersysapi/VMcdmDataServiceWebApi/saveBizCustomEntity', {
    entities: entities,
  })
  let entity = saveBizCustomEntity?.data.data.data?.insert?.entity
  if (!entity) entity = saveBizCustomEntity?.data.data.data?.update?.entity
  if (entity) {
    let entityIds = entity.map((item) => item.id).join(',')
    // 发布模型
    let generateMDTableResutl = await axios.post('/webapi/innersysapi/VMcdmDataServiceWebApi/generateMDTable', {
      entityIds,
    })
    // 生成ddl
    let generateDDL = await axios.post('/webapi/innersysapi/VMcdmDataServiceWebApi/generateDDL', {
      entityIds: 'ff8081818ef5e425018ef5e5fd8f1b95',
      detail: false,
    })
    let ddl = generateDDL?.data?.data?.ddl
    if (ddl) {
      let ddlString = ddl?.join('\\')
      await axios.post('/api/v0/train', {
        question: chataiData.value.sessionItem?.textAreaValue,
        id: chataiData.value.sessionItem.id,
        orgid: 1,
        projectid: 1,
        sql: chataiData.value.sessionItem?.sql,
        ddl: ddlString,
        documentation: 1,
      })
    }
    await getCustomCatalogEntityTree()
  }
  showModal.value = false
}

const handleEdit = (value: boolean) => {
  if (value) editText.value = chataiData.value.sessionItem.textAreaValue
  isEdited.value = value
  if (!value) {
    let newResulr = { ...chataiData.value.sessionItem, textAreaValue: editText.value }
    setSessionItem(newResulr)
  }
}
</script>

<template>
  <div class="table-list-content" v-show="isShow">
    <div class="table-list-header">
      <div class="table-list-header-left">
        <a-typography-text class="list-item-left-content-textAreaValue">
          <span v-if="!isEdited" class="edit-content"
            ><span class="edit-text"> {{ chataiData.sessionItem?.textAreaValue }}</span>
            <EditOutlined :title="isEdited ? '确认修改' : '编辑'" class="edit-outlined" @click="handleEdit(true)"
          /></span>
          <a-input v-else v-model:value="editText">
            <template #suffix>
              <EditOutlined :title="isEdited ? '确认修改' : '编辑'" @click="handleEdit(false)" />
            </template>
          </a-input>
        </a-typography-text>

        <a-typography-text>{{
          chataiData.sessionItem?.selectedModel
            ? JSON.parse(chataiData.sessionItem.selectedModel)
                .map((item: any) => item.name_cn)
                .join(';')
            : ''
        }}</a-typography-text>
        <a-typography-text>
          {{ chataiData.sessionItem?.sql }}
        </a-typography-text>
      </div>
      <!-- <a-button class="save-btn" type="primary" size="middle" @click="handleSaveBtn()"> 发布 </a-button> -->
    </div>
    <!-- 表格数据 -->
    <div class="table-data">
      <a-table :pagination="false" class="ant-table-striped" :columns="columns" :data-source="tableData" />
    </div>
    <a-modal v-model:visible="showModal" title="选择模型目录" @ok="handleOk" cancelText="取消" okText="确认">
      <a-tree
        class="catalog"
        :tree-data="chataiData.catalog"
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
      >
        <template #title="item">
          <span> {{ item.name_cn }}</span>
        </template>
      </a-tree>
    </a-modal>
  </div>
</template>

<style lang="scss">
// .ant-table-tbody {
//   &::-webkit-scrollbar {
//     width: 6px;
//     height: 5px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: #c1c1c1;
//     border-radius: 10px;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background-color: rgb(168, 168, 168);
//     border-radius: 10px;
//   }
//   &::-webkit-scrollbar-track {
//     background-color: #e0e0e0;
//     border-radius: 10px;
//   }
// }
.ant-modal-content {
  padding: 16px 16px 0 16px !important;
  .ant-modal-header {
    padding: 16px 0 !important;
  }
  .ant-modal-body {
    padding: 8px !important;
  }
  .ant-modal-footer {
    padding: 16px;
  }
}
.ant-modal-close {
  top: 10px !important;
  right: 15px;
}

.catalog {
  height: 180px !important;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(168, 168, 168);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e0e0e0;
    border-radius: 10px;
  }
}
.table-list-content {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 8px 8px 8px;
  overflow: hidden;
  box-sizing: border-box;
  .table-list-header {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;
    .save-btn {
      background-color: #0b6bcb;
      border-radius: 6px;
      color: white;
      font-size: 14px;
      font-weight: 600;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .table-data {
    width: 100%;
    flex-grow: 1;
    margin-top: 20px;
    border: 1px solid rgb(205, 215, 225);
    border-right: none;
    overflow: hidden;
    .ant-table-cell {
      border-color: rgb(205, 215, 225);
      color: rgb(50, 56, 62) !important;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }
  }
  .table-list-header-left {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ant-typography {
      display: flex;
      flex-wrap: wrap;
      line-height: 21px;
      color: rgb(85, 94, 104);
      font-size: 14px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }
    .list-item-left-content-textAreaValue {
      color: rgb(23, 26, 28);
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      .edit-content {
        display: flex;
        width: 100%;
        align-items: center;
      }
      .ant-input-suffix {
        position: relative;
        top: -1px;
      }

      .ant-input-affix-wrapper {
        border-radius: 5px;
      }
      .ant-input-affix-wrapper {
        box-sizing: border-box;
        border: 1px solid rgb(217, 217, 217) !important;
      }
      .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        box-shadow: none;
      }
      .ant-input-affix-wrapper-focused,
      .ant-input-affix-wrapper:focus {
        box-shadow: 0 0 0 2px #0b6bcb !important;
      }
      .edit-outlined {
        margin-left: 16px;
        position: relative;
      }
      input {
        flex: 1;
      }
    }
  }
}
</style>
