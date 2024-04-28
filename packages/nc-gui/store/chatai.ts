import { reactive } from 'vue'

import { defineStore } from 'pinia'
import type { SessionItem } from '~/components/smartsheet/chatai/interfac'

import chataiApi from '../api/chatai'

export const useChataiStore = defineStore('chataiStore', () => {
  // 创建数据仓库
  const chataiData = reactive<{
    modelData: any[]
    modelTree: any[]
    modelCatalog: any[]
    modelCatalogTree: any[]
    checkedModelData: any[]
    sessionItem: SessionItem
    modelFields: {
      [key: string]: any
    }
  }>({
    modelData: [], //模型数据
    modelTree: [], //模型树
    modelCatalog: [], //模型目录
    modelCatalogTree: [], //模型目录树
    checkedModelData: [], //选中的模型
    sessionItem: {
      id: '',
      textAreaValue: '',
      sql: '',
      selectedModel: '',
      tabledata: '',
      tip: '',
    }, //展示的会话信息
    modelFields: {}, //选择了的字段映射到对应模型
  })

  //删除没有模型的目录
  const removeEmptyCatalogs = (data: any[]) => {
    return data.filter((item) => {
      if (item.isCatalog && item.children.every((child: any) => child.isCatalog && child.children.length === 0)) {
        return false
      }
      if (item.children && item.children.length > 0) {
        item.children = removeEmptyCatalogs(item.children)
      }

      return true
    })
  }

  // 构建树
  const buildTree = (datas: any[], parentId = null): any[] => {
    return datas
      .filter((item: any) => item.parentId === parentId)
      .map((item: any) => {
        let children: any[] = item.isCatalog ? buildTree(datas, item.id) : []
        return { ...item, title: item.name_cn, key: item.id, children, fields: [] }
      })
  }

  //获取模型数据
  const getCustomCatalogEntityTree = async () => {
    let requestResults: any = await chataiApi.getCustomCatalogEntityTree()
    if (requestResults?.success) {
      let resultData = requestResults.data.bizCatalogEntityCustom
      chataiData.modelData = resultData
      chataiData.modelData.push({
        id: null,
        name_cn: '模型目录',
        parentId: '',
        isCatalog: true,
        title: '模型目录',
        key: '0-0',
      })
      let buildRes = [
        {
          id: null,
          name_cn: '模型目录',
          parentId: '',
          isCatalog: true,
          children: buildTree(resultData),
          title: '模型目录',
          key: '0-0',
        },
      ]
      // chataiData.modelTree = removeEmptyCatalogs(buildRes)
      chataiData.modelTree = buildRes
      chataiData.modelCatalog = chataiData.modelData.filter((item) => item.isCatalog && item.id !== null)
      chataiData.modelCatalogTree = buildTree(chataiData.modelCatalog)
      console.log('chataiData.modelCatalogTree', chataiData.modelCatalogTree)
      console.log('chataiData.modelData', chataiData.modelData)
    }
  }

  //设置展示的会话信息
  const setSessionItem = (data: SessionItem) => {
    chataiData.sessionItem = data
  }

  //获取勾选的模型
  const getCheckedModelData = (checkedKeys: string[]) => {
    chataiData.checkedModelData = checkedKeys
      .map((checkedKey) => {
        let findNode = chataiData.modelData.find((item) => item.id === checkedKey)
        if (!findNode) findNode = { isCatalog: true, id: null }
        if (chataiData.modelFields.hasOwnProperty(findNode.id)) {
          findNode.fields = chataiData.modelFields[findNode.id].map((item: any) => ({ ...item }))
        } else {
          findNode.fields = []
        }
        return findNode
      })
      .filter((item) => !item.isCatalog)
  }

  //设置模型已选字段
  const setModelFields = (id: string, fields: any[]) => {
    chataiData.modelFields[id] = fields
    let findModel = chataiData.checkedModelData.find((item) => item.id === id)
    if (findModel) findModel.fields = fields.map((item) => ({ ...item }))
  }

  // 删除模型
  const deleteModel = (id: string) => {
    chataiData.checkedModelData = chataiData.checkedModelData.filter((item) => item.id !== id)
  }

  //删除字段
  const deleteFile = (field: any, modelId: string) => {
    let findModelItem = chataiData.checkedModelData.find((item) => item.id === modelId)
    let fields = chataiData.modelFields[modelId].filter((item: any) => item.id !== field.id)
    findModelItem.fields = fields
    chataiData.modelFields[modelId] = fields
  }

  return {
    chataiData,
    setSessionItem,
    getCustomCatalogEntityTree,
    getCheckedModelData,
    deleteFile,
    deleteModel,
    setModelFields,
    buildTree,
  }
})
