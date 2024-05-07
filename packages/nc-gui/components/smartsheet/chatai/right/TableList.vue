<script lang="ts" setup>
import axios from 'axios'

import { EditOutlined } from '@ant-design/icons-vue'

import { useChataiStore } from '../../../../store/chatai'

const store = useChataiStore()
const { chataiData } = storeToRefs(store)
const { getCustomCatalogEntityTree, setSessionItem } = store

const isShowSelectCatalogModal = ref<boolean>(false) //是否显示选择目录弹框
const isEdited = ref<boolean>(false)
const editText = ref<string>('')
const elementRef = ref(null)
const tableWidth = ref<number>(0)
const tableHeight = ref<number>(0)
const elementRef1 = ref(null)
const myTable = ref(null)
const updateTimeValue = ref<string>('realTimeView') //模型数据更新方式-默认实时视图
const isShowLoading = ref<boolean>(false)

const isShow = computed(() => {
  return chataiData.value.sessionItem?.sql
})

const columns = computed(() => {
  if (!chataiData.value.sessionItem?.sql) return []
  let result = JSON.parse(chataiData.value.sessionItem.tabledata).fields
  let fileds = result?.filter((item) => item.name !== 'id')
  let newFileds = fileds?.map((item) => {
    return {
      ...item,
      title: item.name_cn ?? item.name ?? item.code,
      dataIndex: item.name ?? item.code,
      name_en: item.name ?? item.code,
      width: 'fit-content',
    }
  })
  return newFileds
})

const tableData = computed(() => {
  if (!chataiData.value.sessionItem?.sql) return []
  let result = JSON.parse(chataiData.value.sessionItem.tabledata).datas
  let newDatas = result?.map((item) => {
    let newItem = { ...item }
    return newItem
  })
  return newDatas
})

const resizeObserver1 = new ResizeObserver((entries) => {
  // 当尺寸发生变化时更新宽度值
  for (const entry of entries) {
    if (entry.target === elementRef1.value) {
      tableWidth.value = parseInt(entry.contentRect.width)
      tableHeight.value = parseInt(entry.contentRect.height)
    }
  }
  if (myTable.value) {
    const headerElement = myTable.value.$el.querySelector('.ant-table-thead')
    if (headerElement) {
      const height = headerElement.clientHeight
      tableHeight.value = parseInt(tableHeight.value) - parseInt(height)
    }
  }
})

onMounted(() => {
  tableWidth.value = parseInt(elementRef1.value.clientWidth)
  tableHeight.value = parseInt(elementRef1.value.clientHeight)
  if (myTable.value) {
    const headerElement = myTable.value.$el.querySelector('.ant-table-thead')
    if (headerElement) {
      const height = headerElement.clientHeight
      tableHeight.value = parseInt(tableHeight.value) - parseInt(height)
    }
  }
  // 监听元素的尺寸变化
  // resizeObserver.observe(elementRef.value)
  resizeObserver1.observe(elementRef1.value)
})

const handleEdit = (value: boolean) => {
  if (value) editText.value = chataiData.value.sessionItem.textAreaValue
  isEdited.value = value
  if (!value) {
    let newResulr = { ...chataiData.value.sessionItem, textAreaValue: editText.value }
    setSessionItem(newResulr)
  }
}

// 发布按钮
const handleSaveBtn = () => {
  isShowSelectCatalogModal.value = true
}

// 选择模型目录确定事件
const handleOk = async (selectedCatalog: object) => {
  isShowSelectCatalogModal.value = false
  isShowLoading.value = true
  let model = chataiData.value.sessionItem?.selectedModel ? JSON.parse(chataiData.value.sessionItem?.selectedModel) : []
  let tableData = chataiData.value.sessionItem?.tabledata.length ? JSON.parse(chataiData.value.sessionItem?.tabledata) : []
  let jsonValue = {
    sql: chataiData.value.sessionItem.sql,
  }
  let jsonValue1 = {
    question: chataiData.value.sessionItem.tip,
  }
  let fields: any[] = []
  model.map((item) => {
    fields.push(...item.fields)
  })
  fields = fields.map((item, index) => {
    return { ...item, id: `${Date.now()}${index}` }
  })
  let name = `query_entity_${Date.now()}`
  let entities = [
    {
      id: `${Date.now()}`,
      name,
      code: name,
      name_cn: chataiData.value.sessionItem.textAreaValue,
      belongCatalog: selectedCatalog.code,
      props: [
        {
          name: 'belongSQL',
          code: 'belongSQL',
          jsonValue: JSON.stringify(jsonValue),
        },
        {
          name: 'belongQuestion',
          code: 'belongQuestion',
          jsonValue: JSON.stringify(jsonValue1),
        },
      ],
      fields,
    },
  ]
  // 保存模型
  let saveBizCustomEntity = await axios.post(
    'http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/saveBizCustomEntity',
    {
      entities: entities,
    },
  )
  let entity = saveBizCustomEntity?.data.data.data?.insert?.entity
  if (!entity) entity = saveBizCustomEntity?.data.data.data?.update?.entity
  if (entity) {
    let entityIds = entity.map((item) => item.id).join(',')
    // 发布模型
    let generateMDTableResutl = await axios.post(
      'http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/generateMDTable',
      {
        entityIds,
      },
    )
    console.log('generateMDTableResutl::', generateMDTableResutl)
    let tableInfo = generateMDTableResutl?.data?.data?.tableInfo[0]
    if (tableInfo) {
      let datas = tableData.datas.map((item, index) => {
        return { ...item, id: `${Date.now()}${index}` }
      })
      let batchInsertOrUpdate = await axios.post(
        `http://databoard-test.yindangu.com/restapi/bizentity/data/${tableInfo.componentCode}/${tableInfo.tableName}/batchInsertOrUpdate`,
        {
          datas: datas,
        },
      )
    }
    // 生成ddl
    let generateDDL = await axios.post(
      'http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/generateDDL',
      {
        entityIds: entityIds,
        detail: false,
      },
    )
    let ddl = generateDDL?.data?.data?.ddl
    if (ddl) {
      let ddlString = ddl?.join('\\')
      await axios.post(
        `https://a7aa-14-123-254-4.ngrok-free.app/api/v0/train?ddl=${encodeURIComponent(ddlString)}&id=${
          chataiData.value.sessionItem.id
        }&orgid=1&projectid=1`,
      )
      await axios.post(
        `https://a7aa-14-123-254-4.ngrok-free.app/api/v0/train?&id=${chataiData.value.sessionItem.id}&orgid=1&projectid=1&question=${chataiData.value.sessionItem?.tip}&sql=${chataiData.value.sessionItem?.sql}`,
      )
    }
    await getCustomCatalogEntityTree()
  }
  isShowLoading.value = false
  message.success('发布成功')
}

// 选择模型目录取消事件
const handleCancel = () => {
  isShowSelectCatalogModal.value = false
}

// 设置模型数据更新频率
const handleOkBySetUpdateTime = (value: string) => {
  updateTimeValue.value = value
  console.log('updateTimeValue', updateTimeValue.value)
}

const setUpdateTimeValue = (value: string) => {
  updateTimeValue.value = value
}
</script>

<template>
  <div style="width: 50%; position: relative; overflow: hidden; height: 100%">
    <SmartsheetChataiLeftModel />
    <div class="table-list-content" v-show="isShow" ref="elementRef">
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
        <a-button class="save-btn" type="primary" size="middle" @click="handleSaveBtn()"> 发布 </a-button>
      </div>
      <!-- 表格数据 -->
      <div class="table-data" ref="elementRef1">
        <a-table
          ref="myTable"
          :pagination="false"
          class="ant-table-striped"
          :columns="columns"
          :data-source="tableData"
          :scroll="{ y: tableHeight }"
        >
          <template #headerCell="{ title, column }">
            <a-tooltip :title="column.name_en" :overlayClassName="'reverse-selection-tip'">
              <span style="cursor: default">{{ title }}</span>
            </a-tooltip>
          </template>
        </a-table>
      </div>
    </div>
    <SmartsheetChataiRightModalSelectCatalogModal
      :visible="isShowSelectCatalogModal"
      :handleCancel="handleCancel"
      :handleOk="handleOk"
      :setUpdateTimeValue="setUpdateTimeValue"
    />
    <SmartsheetChataiRightModalSetModelDataUpdateTimeModal :handleOk="handleOkBySetUpdateTime" />
    <SmartsheetChataiCommonLoading :isShow="isShowLoading" />
  </div>
</template>

<style lang="scss">
.ant-tree-switcher {
  top: -2px;
}

.table-list-content {
  width: 100%;
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
    box-sizing: border-box;
    overflow: hidden;
    .ant-table-body {
      &::-webkit-scrollbar {
        width: 6px;
        height: 5px;
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
