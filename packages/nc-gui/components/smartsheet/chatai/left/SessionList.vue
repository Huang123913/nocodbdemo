<script lang="ts" setup>
import { getNowDate } from '#imports'

import { DeleteFilled, SearchOutlined } from '@ant-design/icons-vue'

// const { isGrid, isForm, isGallery, isKanban, isMap, isCalendar } = useSmartsheetStoreOrThrow()

// const router = useRouter()
// const route = router.currentRoute

// const isPublic = inject(IsPublicInj, ref(false))

// const { isViewsLoading } = storeToRefs(useViewsStore())

// const { isMobileMode } = storeToRefs(useConfigStore())

// const { appInfo } = useGlobal()

// const isSharedBase = computed(() => route.value.params.typeOrId === 'base')

const searchSessionText = ref<string>('') //搜索会话文本
const searchSessionResult = ref<any[]>([]) //搜索会话的结果
const sessionList = ref<any[]>([]) //会话列表
const isShowSearchSessionResult = ref<boolean>(false) //是否显示搜索的会话结果
const selectedSessionItem = ref<object>({}) //被选中的会话
onMounted(() => {
  sessionList.value = [
    {
      id: Date.now() + 'test1',
      textAreaValue: '查询2024年1-5月的销售额',
      sql: "SELECT * FROM sales_data WHERE date >= '2022-01-01' AND date <= '2023-12-31' AND department = '大客户部';",
      searchTime: getNowDate(),
      selectedModelData: '中文名;test',
      // tableData: JSON.stringify(tableList[messageList?.length % 2 === 0 ? 0 : 1]),
    },
    {
      id: Date.now() + 'test',
      textAreaValue: '查询2024年1-5月的销售额',
      sql: "SELECT * FROM sales_data WHERE date >= '2022-01-01' AND date <= '2023-12-31' AND department = '大客户部';",
      searchTime: getNowDate(),
      selectedModelData: '中文名;test',
      // selectedModelData: selectedModelData?.length ? JSON.stringify(selectedModelData) : '',
      // tableData: JSON.stringify(tableList[messageList?.length % 2 === 0 ? 0 : 1]),
    },
    {
      id: Date.now(),
      textAreaValue: '查询2024年1-5月的销售额',
      sql: "SELECT * FROM sales_data WHERE date >= '2022-01-01' AND date <= '2023-12-31' AND department = '大客户部';",
      searchTime: getNowDate(),
      selectedModelData: '中文名;test',
      // selectedModelData: selectedModelData?.length ? JSON.stringify(selectedModelData) : '',
      // tableData: JSON.stringify(tableList[messageList?.length % 2 === 0 ? 0 : 1]),
    },
  ]
})

//删除所有会话
const handldeleteAllSession = () => {}

// 搜索会话
const handleSearchSession = () => {}

//选中会话
const handleClickSessionItem = (sessionItem: any) => {
  selectedSessionItem.value = sessionItem
  console.log('selectedSessionItem::', selectedSessionItem)
}

//删除会话
const handleDeleteSessionItem = () => {}
</script>

<template>
  <div class="session-list-content">
    <div class="session-list-content-left" direction="vertical" size="middle">
      <!-- 顶部 -->
      <div class="top-title">
        <a-badge
          count="1"
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
        <a-input placeholder="搜索会话" v-model:value="searchSessionText" allowClear>
          <template #suffix>
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
                  <a-typography-text>{{ item.selectedModelData }}</a-typography-text>
                  <a-typography-text>{{ item.sql }}</a-typography-text>
                </div>
                <div class="list-item-left-time">{{ item.searchTime }}</div>
              </div>
              <a-button class="delete-btn delete-session-item-btn" @click="handleDeleteSessionItem()" type="text">
                <template #icon><delete-filled /></template>
              </a-button>
            </div>
          </a-list-item>
        </template>
      </a-list>
      <!-- textArea输入框模块  -->
      <a-card style="width: 100%">
        <template #title>
          <a-textarea auto-size :bordered="false" placeholder="Borderless" />
        </template>

        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  width: 40%;
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
      .ant-input-affix-wrapper {
        border-radius: 5px;
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
        padding: 12px 16px;
        border-bottom: 1px solid rgba(99, 107, 116, 0.2);
        cursor: pointer;
        &:hover .delete-session-item-btn {
          opacity: 1;
        }
      }
      .list-item {
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
        right: -24px;
        opacity: 0;
        transition: none;
      }
    }
    .ant-card {
      border-radius: 5px !important;
      border-color: rgb(205, 215, 225) !important;
      &:focus {
        border-width: 2px;
        border-color: #0b6bcb !important;
      }
    }
  }
}
</style>
