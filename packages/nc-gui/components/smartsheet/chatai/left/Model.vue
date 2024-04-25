<script lang="ts" setup>
import { ref, useSmartsheetStoreOrThrow } from '#imports'
import axios from 'axios'

// import type { TreeProps } from 'ant-design-vue'
import { CloseOutlined, EllipsisOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons-vue'

import model from '../../../../assets/img/model.svg'
import { useChataiStore } from '../../../../store/chatai'

const props = defineProps<{
  isOpenModel: boolean
  setIsOpenModel: (value: boolean) => void
}>()

const store = useChataiStore()
const { chataiData } = storeToRefs(store)
const { getCustomCatalogEntityTree, getCheckedModelData, setModelDataList } = store
const searchModelText = ref<string>('') //搜索模型文本
// const selectedKeys = ref<string[]>([]) //选中的模型
const checkedKeys = ref<string[]>([]) //勾选的模型
const optionFields = ref<any[]>([])

//搜索模型
const handleSearchModel = () => {}
const { eventBus } = useSmartsheetStoreOrThrow()
//勾选模型
const handleCheckModel = (checkedKeys: any, e: any) => {
  console.log('checkedKeys', checkedKeys)
  getCheckedModelData(checkedKeys)
}

onMounted(() => {
  getCheckedModelData(checkedKeys.value)
  getCustomCatalogEntityTree()
})

const handleLoadFiles = (e: any, item: object) => {
  e.stopPropagation()
  axios
    .post('http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/findBizCustomEntity', {
      entityIds: item.id,
    })
    .then((res: any) => {
      console.log('res', res?.data?.data?.datas)
      let newDFata = chataiData.value.modelDataList
      let fields = res?.data?.data?.datas[0].fields.map((item) => {
        return { ...item, name_cn: item.fieldName_cn, key: item.id, title: item.fieldName_cn, parentId: item.id }
      })
      newDFata[1].children = fields
      setModelDataList(newDFata)
      console.log('modelDataList::', newDFata)
    })
}

const uncheckNodeOrDirectory = (nodeId: string) => {
  const node = findNodeById(chataiData.value.modelDataList, nodeId)
  console.log('none', node)
  checkedKeys.value = checkedKeys.value.filter((item) => item !== nodeId)
  if (!node) return
  uncheckParent(node.parentId)
}

const findNodeById: any = (nodes: any, nodeId: string) => {
  for (const node of nodes) {
    if (node.id === nodeId) {
      return node
    } else if (node.children && node.children.length > 0) {
      const found = findNodeById(node.children, nodeId)
      if (found) return found
    }
  }
  return null
}

const uncheckParent = (parentId: string) => {
  const parentNode = findNodeById(chataiData.value.modelDataList, parentId)
  if (!parentNode) return
  checkedKeys.value = checkedKeys.value.filter((item) => item !== parentId)
  uncheckParent(parentNode.parentId)
}

eventBus.on((event, id) => {
  if (event === SmartsheetStoreEvents.DELETE_MODE) {
    uncheckNodeOrDirectory(id)
  }
})
</script>

<template>
  <div class="model-content" :style="{ width: isOpenModel ? '40%' : 0 }">
    <div class="model-main" :style="{ display: isOpenModel ? 'flex' : 'none' }">
      <!-- 顶部 -->
      <div class="top-title">
        <div class="top-title-left">
          <a-avatar shape="square" size="small" :src="model"> </a-avatar>
          <a-typography-title :level="4" class="select-text">选择范围</a-typography-title>
        </div>

        <a-button class="colse-btn colse-btn2" @click="setIsOpenModel(false)" type="text">
          <template #icon><close-outlined /></template>
        </a-button>
      </div>
      <!-- 搜索模型 -->
      <div class="search-model">
        <a-input placeholder="搜索模型" v-model:value="searchModelText" allowClear>
          <template #suffix>
            <search-outlined @click="handleSearchModel()" />
          </template>
        </a-input>
      </div>
      <!-- 模型 -->
      <a-tree
        checkable
        autoExpandParent
        :tree-data="chataiData.modelDataList"
        v-model:checkedKeys="checkedKeys"
        @check="handleCheckModel"
      >
        <template #title="item">
          <span v-if="item.isCatalog"> {{ item.title }}</span>
          <div v-else class="model-text">
            {{ item.title }}
            <SmartsheetChataiCommonFilesSelect :modelItem="item" />
          </div>
        </template>
      </a-tree>
      <!-- 统计 -->
      <div class="total">
        <span
          >已选择<strong>{{ chataiData.checkedModelData.length }}</strong
          >项模型</span
        >
        <a-button type="primary" size="middle" class="confirm-btn" @click="setIsOpenModel(false)">确定</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
::v-deep .ant-tree {
  .ant-tree-treenode {
    width: 100% !important;
  }
}

::v-deep .ant-tree-switcher {
  top: -2px;
}

::v-deep .ant-tree-node-content-wrapper {
  width: 100% !important;
}

::v-deep .ant-tree-title {
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      position: relative;
      top: 1px;
    }
  }
}

.model-content {
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
  box-sizing: border-box;
  .model-main {
    width: 100%;
    height: 100%;
    padding: 16px 16px 38px 16px;
    border-right: 1px solid;
    border-color: rgba(99, 107, 116, 0.2);
    flex-direction: column;
    overflow: hidden;
  }
  .top-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    // outline: 1px solid red;
    .select-text {
      position: relative;
      left: 8px;
    }
    .colse-btn {
      position: relative;
      color: rgb(99, 107, 116);
      background-color: transparent;
      border: none;
      box-shadow: none;
      &:active {
        background-color: transparent;
        box-shadow: none;
      }
    }
    .colse-btn2 {
      width: 32px !important;
      height: 32px !important;
      right: -9px;
      top: 1px;
    }
    .ant-typography {
      font-size: 18px;
      margin: 0;
    }
    .top-title-left {
      display: flex;
      align-items: center;
      ::v-deep .ant-avatar-image {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
  .search-model {
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
  ::v-deep .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: rgb(11, 107, 203);
    border-color: rgb(11, 107, 203);
  }
  ::v-deep .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner:after {
    background-color: rgb(11, 107, 203);
  }
  ::v-deep .ant-tree {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
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
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    .confirm-btn {
      background-color: #0b6bcb;
      border-radius: 6px;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
