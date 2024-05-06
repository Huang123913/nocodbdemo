<script lang="ts" setup>
import { useChataiStore } from '../../../../../store/chatai'

const { eventBus } = useSmartsheetStoreOrThrow()

const store = useChataiStore()
const { chataiData } = storeToRefs(store)
const props = defineProps<{
  visible: boolean
  handleCancel: () => void
  handleOk: (value: object) => void
  setUpdateTimeValue: (value: string) => void
}>()
const selectedKeys = ref<string[]>([]) //勾选的模型
const expandedKeys = ref<string[]>([]) //展开的父节点
const modelUpdateTypeValue = ref<string>('two') //模型数据更新方式
const selectOption = [
  { value: 'regularUpdate', label: '定时更新' },
  { value: 'realTimeView', label: '实时视图' },
]
onMounted(() => {
  expandedKeys.value = []
  const findParanent = (data: any[]) => {
    data.map((item) => {
      if (item?.children && item.children.length) {
        expandedKeys.value.push(item.id)
        findParanent(item.children)
      }
    })
  }
  findParanent(chataiData.value.modelCatalogTree)
  modelUpdateTypeValue.value = 'realTimeView'
})

const handleModalOk = () => {
  if (!selectedKeys.value.length) {
    message.warning('请选择模型目录')
    return
  }
  let selectedCatalog = chataiData.value.modelCatalog.find((item) => item.id === selectedKeys.value[0])
  props.handleOk(selectedCatalog)
}

const handleChange = (value: string) => {
  value === 'regularUpdate' && eventBus.emit(SmartsheetStoreEvents.OPEN_SET_MODEL_DATA_UPDATE_TIME_MODAL)
  value === 'realTimeView' && props.setUpdateTimeValue(value)
}

const hanldeAfterClose = () => {
  modelUpdateTypeValue.value = 'realTimeView'
}
</script>

<template>
  <a-modal class="catalog-modal" title="选择模型目录" :visible="visible" :afterClose="hanldeAfterClose">
    <a-tree
      class="catalog"
      blockNode
      :tree-data="chataiData.modelCatalogTree"
      v-model:selectedKeys="selectedKeys"
      v-model:expandedKeys="expandedKeys"
    >
      <template #title="item">
        <span> {{ item.name_cn }}</span>
      </template>
    </a-tree>
    <template #footer>
      <div class="footer-left">
        <span>模型数据</span>
        <a-select
          v-model:value="modelUpdateTypeValue"
          :style="{ width: '150px', marginLeft: '8px' }"
          :allowClear="true"
          :options="selectOption"
          @change="handleChange"
          @focus="handleFocus"
        ></a-select>
      </div>
      <div>
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" @click="handleModalOk">确认</a-button>
      </div>
    </template>
  </a-modal>
</template>

<style lang="scss">
.catalog-modal {
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
    top: 32px !important;
    right: 15px;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: space-between;
    .ant-btn {
      border-radius: 0.5rem;
      color: rgb(55, 65, 81);
      font-weight: 550;
      &:hover {
        background-color: rgba(244, 244, 245);
        border-color: rgba(231, 231, 233);
      }
    }
    .ant-btn-primary {
      color: white;
      border: none;
      &:hover {
        background-color: rgba(41, 82, 204);
      }
    }
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
}
</style>
