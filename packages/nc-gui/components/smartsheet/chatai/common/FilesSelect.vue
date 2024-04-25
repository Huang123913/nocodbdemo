<script lang="ts" setup>
import {
  ActiveViewInj,
  FieldsInj,
  IsCalendarInj,
  IsFormInj,
  IsGalleryInj,
  IsGridInj,
  MetaInj,
  NavigateDir,
  RowHeightInj,
  computed,
  extractPkFromRow,
  inject,
  message,
  provide,
  ref,
  useSmartsheetStoreOrThrow,
  useViewData,
  useViewGroupBy,
} from '#imports'
import axios from 'axios'

import { CloseOutlined, EllipsisOutlined } from '@ant-design/icons-vue'

import { useChataiStore } from '../../../../store/chatai'

const { xWhere, eventBus } = useSmartsheetStoreOrThrow()

const props = defineProps<{
  modelItem: any
}>()

const showData = ref<any>([]) //查询内容
const store = useChataiStore()
const { chataiData } = storeToRefs(store)
const { getCustomCatalogEntityTree, getCheckedModelData, setModelDataList, setCheckedModelData } = store
const checkedValues = ref<string[]>([])
const clicked = ref<boolean>(false)
const isShowLoading = ref<boolean>(false)

const handleLoadFiles = async () => {
  if (showData.value.length) return
  isShowLoading.value = true
  clicked.value = false
  await axios
    .post('http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/findBizCustomEntity', {
      entityIds: props.modelItem?.id,
    })
    .then((res: any) => {
      showData.value = res?.data?.data?.datas[0].fields.map((item: any) => {
        return { ...item, value: item.fieldName, label: item.fieldName }
      })
      isShowLoading.value = false
      clicked.value = true
    })
  // let generateDDL = await axios.post('/webapi/innersysapi/VMcdmDataServiceWebApi/generateDDL', {
  //   entityIds: props.modelItem?.id,
  //   detail: false,
  // })
  // let ddl = generateDDL?.data?.data?.ddl
  // let ddlString = ddl?.join('\\')
  // let data = new FormData()
  // data.append('ddl', ddlString)
  // data.append('id', props.modelItem?.id)
  // data.append('orgid', 1)
  // data.append('projectid', 1)

  // await axios.post(`https://c538-14-123-253-17.ngrok-free.app/api/v0/train?ddl=${encodeURIComponent(ddlString)}`)
  // await axios.post(`https://c538-14-123-253-17.ngrok-free.app/api/v0/train`)
}

const handleClickChange = (visible: boolean) => {
  clicked.value = visible
}
const handleChange = (value: string[], option: any) => {
  setCheckedModelData(option, props.modelItem)
}
const handleSelect = (value: any, option: any) => {}

eventBus.on((event) => {
  if (event === SmartsheetStoreEvents.DELETE_FILE) {
    let findItem = chataiData.value.checkedModelData.find((item) => item.id === props.modelItem.id)
    if (findItem) {
      checkedValues.value = findItem?.fields?.map((item) => {
        return item.value
      })
    }
  } else if (event === SmartsheetStoreEvents.DELETE_MODE) {
    if (checkedValues.value.length) checkedValues.value = []
  }
})
</script>

<template>
  <a-popover
    trigger="click"
    :visible="clicked"
    @visibleChange="handleClickChange"
    placement="right"
    :overlay-class-name="`chatai1-tooltip`"
    color="white"
  >
    <template #title>
      <span>{{ modelItem.name_cn }}</span>
      <a-button class="colse-btn" @click="clicked = false" type="text">
        <template #icon><close-outlined /></template>
      </a-button>
    </template>
    <template #content>
      <a-select
        v-model:value="checkedValues"
        mode="multiple"
        style="width: 300px"
        placeholder="请选择"
        :options="showData"
        @change="handleChange"
        @select="handleSelect"
      ></a-select>
    </template>
    <ellipsis-outlined
      class="more-btn"
      @click="
        (e) => {
          e.stopPropagation()
          handleLoadFiles()
        }
      "
    />
    <!-- <a-button
      type="text"
      class="select-model-btn"
      @click="
        (e) => {
          e.stopPropagation()
          handleLoadFiles()
        }
      "
    >
      
    </a-button> -->
  </a-popover>
  <SmartsheetChataiCommonLoading :isShow="isShowLoading" />
</template>

<style lang="scss">
.ant-tree-title {
  // padding-right: 14px !important;
  &:hover .more-btn {
    opacity: 1;
  }
  .more-btn {
    margin-left: 30px;
    position: relative !important;
    top: -2px;
    opacity: 0;
  }
}

.chatai1-tooltip {
  .ant-popover-inner {
    min-width: 180px;
    // border: 1px solid rgb(205, 215, 225);
  }
  //   .ant-popover-inner-content {
  //     padding: 0 !important;
  //   }
  .ant-popover-arrow {
    display: none;
  }
  .ant-popover-title {
    border: none;
    padding: 14px 16px 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ant-popover-inner-content {
    padding: 8px 16px 16px 16px !important;
  }
}

// .select-model-btn {
//   margin-right: 20px;
//   background-color: #0b6bcb !important;
//   border-radius: 6px;
//   color: white;
//   font-size: 14px;
//   font-weight: 600;
//   &:hover {
//     background-color: #0b6bcb !important;
//   }
// }
</style>
