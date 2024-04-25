<script lang="ts" setup>
import { ref, useSmartsheetStoreOrThrow } from '#imports'

import { CloseOutlined, DownOutlined } from '@ant-design/icons-vue'

import { useChataiStore } from '../../../../store/chatai'

const store1 = useChataiStore()
const { chataiData } = storeToRefs(store1)
const { deleteFile, deleteModel } = store1
// const props = defineProps<{
//   checkedModelData: any[]
//   setIsOpenModel: (value: boolean) => void
// }>()

// 删除模型
const handleDeleteModelItem = (item: any) => {
  deleteModel(item.id)
  eventBus.emit(SmartsheetStoreEvents.DELETE_MODE, item.id)
}
const visible = ref<boolean>(false)
onMounted(() => {})

const { eventBus } = useSmartsheetStoreOrThrow()

const handleDeleteFile = (deleteFile1: any, id: string) => {
  deleteFile(deleteFile1, id)
  eventBus.emit(SmartsheetStoreEvents.DELETE_FILE)
  console.log('chataiData.value.checkedModelData::', chataiData.value.checkedModelData)
}
const handleMenuClick = (e: any) => {
  visible.value = true
}
const titleClickHandle = () => {
  visible.value = true
}

const fieldsStr = computed(() => {
  let newData: any[] = []
  chataiData.value.checkedModelData.map((item) => {
    if (item?.fields && item.fields.length) {
      newData.push(item)
    }
  })
  return newData
})

const noFieldsStr = computed(() => {
  let newData: any[] = []
  chataiData.value.checkedModelData.map((item) => {
    if (!item?.fields || !item.fields.length) {
      newData.push(item)
    }
  })
  console.log('newData1::', newData)
  return newData
})
</script>

<template>
  <a-dropdown placement="top" v-if="chataiData.checkedModelData.length">
    <a class="ant-dropdown-link1" @click.prevent>
      {{ `已选范围(${chataiData.checkedModelData.length})` }}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <li v-for="item in chataiData.checkedModelData">
          <a-sub-menu
            v-if="item.fields?.length"
            :key="item.id"
            :title="item.name_cn"
            @titleClick="titleClickHandle"
            @click="handleMenuClick"
          >
            <a-menu-item v-for="item1 in item?.fields" @click="handleMenuClick">
              {{ item1.fieldLabel || item1.fieldName }}
              <template #icon>
                <a-button
                  class="colse-btn close-btn1"
                  @click="
                    (e) => {
                      e.stopPropagation()
                      handleDeleteFile(item1, item.id)
                    }
                  "
                  type="text"
                >
                  <!-- <template #icon><close-outlined /></template> -->
                </a-button>
              </template>
            </a-menu-item>
            <template #expandIcon
              ><a-button
                class="colse-btn"
                @click="
                  (e) => {
                    e.stopPropagation()
                    handleDeleteModelItem(item)
                  }
                "
                type="text"
              >
                <template #icon><close-outlined /></template> </a-button
            ></template>
          </a-sub-menu>
          <a-menu-item v-else>
            {{ item.name_cn }}
            <template #icon>
              <a-button
                class="colse-btn close-btn1"
                @click="
                  (e) => {
                    e.stopPropagation()
                    handleDeleteModelItem(item)
                  }
                "
                type="text"
              >
                <template #icon><close-outlined /></template>
              </a-button>
            </template>
          </a-menu-item>
        </li>
      </a-menu>
    </template>
  </a-dropdown>

  <a-dropdown v-else>
    <a class="ant-dropdown-link1" @click.prevent>
      {{ `已选范围(${chataiData.checkedModelData.length})` }}
      <DownOutlined />
    </a>
  </a-dropdown>
</template>

<style lang="scss">
.ant-dropdown-menu {
  min-width: 200px;
  padding: 16px 8px !important;
}
.ant-dropdown-menu-submenu {
  .ant-dropdown-menu-submenu-title {
    padding: 6px 8px !important;
    width: 100%;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    position: relative;
  }
}
.ant-dropdown-menu-submenu {
  padding: 0 !important;
  border: none !important;
}
.ant-dropdown-menu-item {
  padding: 6px 8px !important;
}

.ant-dropdown-link1 {
  display: flex;
  align-items: center;
  text-decoration: none !important;
  color: #0b6bcb !important;
  &:hover {
    color: #0b6bcb !important;
  }
  span {
    vertical-align: 2px !important;
  }
}
.colse-btn {
  position: relative;
  color: rgb(85, 94, 104);
  background-color: transparent;
  top: -2px;
  border: none;
  box-shadow: none;
  transition: none;
  width: 16px !important;
  height: 16px !important;
  svg {
    font-size: 15px;
  }
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
}
.close-btn1 {
  position: absolute;
  right: 0;
  top: 7px;
}
</style>
