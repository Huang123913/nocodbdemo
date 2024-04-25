<script lang="ts" setup>
import { getNowDate } from '#imports'
import axios from 'axios'

import { CloseOutlined, DeleteFilled, SearchOutlined, SendOutlined } from '@ant-design/icons-vue'

import { useChataiStore } from '../../../../store/chatai'

const store1 = useChataiStore()
const { chataiData } = storeToRefs(store1)
const { setSessionItem } = store1

const searchSessionText = ref<string>('') //搜索会话文本
const searchSessionResult = ref<any[]>([]) //搜索会话的结果
const sessionList = ref<any[]>([]) //会话列表
const isShowSearchSessionResult = ref<boolean>(false) //是否显示搜索的会话结果
const selectedSessionItem = ref<object>({}) //被选中的会话
const isOpenModel = ref<boolean>(false) //是否打开模型数据模块
const isShowLoading = ref<boolean>(false) //加载效果
const textAreaValue = ref<string>('') //查询内容

onMounted(() => {
  setSessionItem({})
})

//删除所有会话
const handldeleteAllSession = () => {
  setSessionItem({})
  sessionList.value = []
}

// 清空搜索内容
const handleClickCleanBtn = () => {
  searchSessionText.value = ''
  isShowSearchSessionResult.value = false
  setSessionItem(selectedSessionItem?.id ? selectedSessionItem : sessionList[0])
}

// 搜索会话
const handleSearchSession = () => {
  if (!searchSessionText.value.trim()) {
    handleClickCleanBtn()
  } else {
    isShowSearchSessionResult.value = true
    searchSessionResult.value = sessionList.value.filter((item) => {
      return item.textAreaValue.indexOf(searchSessionText.value) > -1
    })
  }
}

//选中会话
const handleClickSessionItem = (sessionItem: any) => {
  selectedSessionItem.value = sessionItem
  setSessionItem(sessionItem)
}

//删除会话
const handleDeleteSessionItem = (deleteItem: any) => {
  sessionList.value = sessionList.value.filter((item) => item.id !== deleteItem.id)
  let findSessionItem = sessionList.value.find((item) => item.textAreaValue === chataiData.value.sessionItem?.textAreaValue)
  !findSessionItem && setSessionItem(sessionList.value[0])
}

//设置是否打开模型
const setIsOpenModel = (value: boolean) => {
  isOpenModel.value = value
}

const handletest = () => {
  let modelrange = []
  modelrange = chataiData.value.checkedModelData.map((item) => {
    let props = []
    if (item?.fields && item?.fields.length) {
      props = item?.fields.map((item1) => {
        return { prop_name: item1.fieldName }
      })
    }
    return { model_name: item.name, props }
  })
  console.log(JSON.stringify(modelrange))
}

//发送按钮
const handleSend = async () => {
  if (!textAreaValue.value.trim()) return
  isShowLoading.value = true
  let modelrange = []
  modelrange = chataiData.value.checkedModelData.map((item) => {
    let props = []
    if (item?.fields && item?.fields.length) {
      props = item?.fields.map((item1) => {
        return { prop_name: item1.fieldName }
      })
    }
    return { model_name: item.name, props }
  })
  // 获取sql
  const id = Date.now()
  // let result = await axios.get('/api/v0/ask', {
  //   params: {
  //     question: `${textAreaValue.value}`,
  //     id,
  //     orgid: 1,
  //     projectid: 1,
  //     modelrange: JSON.stringify(modelrange),
  //   },
  //   headers: {
  //     'ngrok-skip-browser-warning': 'true',
  //   },
  //   timeout: 5000,
  // })
  // let result = {
  //   data: {
  //     id,
  //     text: 'SELECT SUM(sales_amount) FROM sales',
  //     type: 'sql',
  //   },
  // }
  //result?.data
  if (true) {
    //执行sql
    // let sql = result?.data.text.replace(/\n/g, ' ')
    let sql = 'SELECT field70003, field70002 FROM simulate_biz_entity_700'
    // let sql = result.data.text.replace(/;/g, '')
    let queryBizCustomEntityData = await axios.post('/webapi/innersysapi/VMcdmDataServiceWebApi/queryBizCustomEntityData', {
      sql,
    })
    let resultData = queryBizCustomEntityData?.data?.data
    if (resultData) {
      let newSessionItem = {
        id,
        textAreaValue: textAreaValue.value,
        sql,
        searchTime: getNowDate(),
        selectedModel: chataiData.value.checkedModelData.length ? JSON.stringify(chataiData.value.checkedModelData) : '',
        tabledata: JSON.stringify({ fields: resultData.fields, datas: resultData.datas }),
      }
      sessionList.value.unshift(newSessionItem)
      textAreaValue.value = ''
      setSessionItem(newSessionItem)
      selectedSessionItem.value = {}
    }
    isShowLoading.value = false
  }

  // setTimeout(() => {
  //   let newSessionItem = {
  //     id: Date.now(),
  //     textAreaValue: textAreaValue.value,
  //     sql: "SELECT * FROM sales_data WHERE date >= '2022-01-01' AND date <= '2023-12-31' AND department = '大客户部'",
  //     searchTime: getNowDate(),
  //     selectedModel: chataiData.value.checkedModelData.length ? JSON.stringify(chataiData.value.checkedModelData) : '',
  //     tabledata: JSON.stringify(chataiData.value.tableData[sessionList.value.length % 2 === 0 ? 0 : 1]),
  //   }
  //   sessionList.value.unshift(newSessionItem)
  //   textAreaValue.value = ''
  //   setSessionItem(newSessionItem)
  //   selectedSessionItem.value = {}
  //   isShowLoading.value = false
  //   console.log('sessionList::', sessionList.value)
  // }, 600)
}
</script>

<template>
  <div class="session-list-content">
    <div class="session-list-content-left" direction="vertical" size="middle">
      <!-- 顶部 -->
      <div class="top-title">
        <a-badge
          :count="sessionList.length"
          :number-style="{
            backgroundColor: 'rgb(227, 239, 251)',
            color: 'rgb(18, 70, 123)',
            fontSize: 14,
            fontWeight: 500,
            boxShadow: '0 0 0 0 transparent',
          }"
          :offset="[8, -2]"
        >
          <a-typography-title :level="4">会话</a-typography-title>
        </a-badge>
        <a-button class="delete-btn" @click="handldeleteAllSession()" type="text">
          <template #icon><delete-filled /></template>
        </a-button>
      </div>
      <!-- 搜索会话 -->
      <div class="search-session">
        <a-input placeholder="搜索会话" v-model:value="searchSessionText">
          <template #suffix>
            <CloseOutlined @click="handleClickCleanBtn()" v-show="searchSessionText.trim()" style="margin-right: 5px" />
            <search-outlined @click="handleSearchSession()" />
          </template>
        </a-input>
      </div>
      <!-- 会话列表 -->
      <a-list
        class="session-list"
        item-layout="horizontal"
        :data-source="isShowSearchSessionResult ? searchSessionResult : sessionList"
      >
        <template #renderItem="{ item }">
          <a-list-item :class="{ background: item.id === selectedSessionItem?.id }">
            <div @click="handleClickSessionItem(item)" class="list-item">
              <div class="list-item-left">
                <div class="list-item-left-content">
                  <a-typography-text class="list-item-left-content-textAreaValue">{{ item.textAreaValue }}</a-typography-text>
                  <a-typography-text>{{
                    item.selectedModel
                      ? JSON.parse(item.selectedModel)
                          .map((item: any) => item.name_cn)
                          .join(';')
                      : ''
                  }}</a-typography-text>
                  <a-typography-text>{{ item.sql }}</a-typography-text>
                </div>
                <div class="list-item-left-time">{{ item.searchTime }}</div>
              </div>
              <a-button
                class="delete-btn delete-session-item-btn"
                @click="
                  (e) => {
                    e.stopPropagation()
                    handleDeleteSessionItem(item)
                  }
                "
                type="text"
              >
                <template #icon><delete-filled /></template>
              </a-button>
            </div>
          </a-list-item>
        </template>
      </a-list>
      <!-- textArea输入框模块  -->
      <a-card style="width: 100%">
        <template #title>
          <a-textarea
            :auto-size="{ minRows: 3, maxRows: 10 }"
            v-model:value="textAreaValue"
            :bordered="false"
            placeholder="请输入你的查询要求"
          />
        </template>
        <SmartsheetChataiCommonPopover />
        <div class="btn-right">
          <a-button type="primary" size="middle" class="select-btn send-btn" @click="setIsOpenModel(true)"> 选择范围 </a-button>
          <a-button type="primary" size="middle" class="send-btn" @click="handleSend()">
            发送
            <send-outlined />
          </a-button>
          <!-- <a-button type="primary" size="middle" class="select-btn send-btn" @click="handletest()"> test </a-button> -->
        </div>
      </a-card>
    </div>
    <!-- 选择模型 -->
    <SmartsheetChataiLeftModel :isOpenModel="isOpenModel" :setIsOpenModel="setIsOpenModel" />
    <!-- 加载效果 -->
    <SmartsheetChataiCommonLoading :isShow="isShowLoading" />
  </div>
</template>

<style scoped lang="scss">
.ant-card {
  border-radius: 8px !important;
  border-color: rgb(205, 215, 225) !important;
  padding: 0 6px;
  &:focus-within {
    outline: 2px solid #0b6bcb;
  }
  &:focus-visible {
    outline: 2px solid #0b6bcb;
  }
  ::v-deep .ant-card-head {
    padding: 0 !important;
    border-color: rgba(99, 107, 116, 0.2);
  }
  ::v-deep .ant-card-head-title {
    padding: 0px !important;
  }
  ::v-deep .ant-input {
    padding: 8px 6px;
    font-size: 16px !important;
    color: #32383e;
  }
  ::v-deep .ant-input::placeholder {
    font-size: 16px !important;
  }
  ::v-deep .ant-card-body {
    display: flex;
    justify-content: space-between;
    padding: 16px 8px;
    // background-color: red;
  }
  .btn-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    .select-btn {
      margin-right: 20px;
    }
  }
  .send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b6bcb;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    .anticon-send {
      color: white;
      position: relative;
      top: -1px;
    }
  }
}

.delete-btn {
  position: relative;
  right: -9px;
  color: rgb(99, 107, 116);
  background-color: transparent;
  border: none;
  box-shadow: none;
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
}
.background {
  background-color: rgb(221, 231, 238);
  font-weight: 500 !important;
}

.session-list-content {
  display: flex;
  width: 50%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  .session-list-content-left {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 16px 16px 24px 16px;
    border-right: 1px solid;
    border-color: rgba(99, 107, 116, 0.2);
    background-color: rgb(240, 244, 248);
    display: flex;
    flex-direction: column;
    .top-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      .ant-typography {
        font-size: 18px;
        margin: 0;
      }
    }
    .search-session {
      margin: 16px 0;
      ::v-deep .ant-input-affix-wrapper {
        border-radius: 5px;
      }
      ::v-deep .ant-input-affix-wrapper {
        box-sizing: border-box;
        border: 1px solid rgb(217, 217, 217) !important;
      }
      ::v-deep .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        box-shadow: none;
      }
      ::v-deep .ant-input-affix-wrapper-focused,
      .ant-input-affix-wrapper:focus {
        box-shadow: 0 0 0 2px #0b6bcb !important;
      }
    }
    .session-list {
      flex: 1;
      width: 100%;
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
      .ant-list-item {
        width: 100%;
        padding: 16px 18px;
        border-bottom: 1px solid rgba(99, 107, 116, 0.2);
        cursor: pointer;
        &:hover .delete-session-item-btn {
          opacity: 1;
        }
      }
      .list-item {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
      }
      .list-item-left {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;

        .list-item-left-content {
          flex: 1;
          .ant-typography {
            display: flex;
            flex-wrap: wrap;
            line-height: 21px;
            color: rgb(85, 94, 104);
            font-size: 14px;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          }
          .list-item-left-content-textAreaValue {
            color: rgb(23, 26, 28);
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 500;
          }
        }
        .list-item-left-time {
          color: rgb(85, 94, 104);
          font-size: 12px;
          font-weight: 500;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
      }
      .delete-session-item-btn {
        position: absolute;
        right: -25px;
        opacity: 0;
        transition: none;
      }
    }
  }
}
</style>
