import { reactive } from 'vue'

import axios from 'axios'
import { defineStore } from 'pinia'

export const useChataiStore = defineStore('chataiStore', () => {
  // 创建仓库数据
  const chataiData = reactive<{
    tableData: any[]
    modelDataList: any[]
    checkedModelData: any[]
    sessionItem: object
    catalog: any[]
  }>({
    tableData: [
      {
        data: [
          {
            key: '1',
            日期: '2022-01-01',
            部门: '大客户部',
            销售额: 1000,
            成本: 800,
            利润: 200,
            客户数: 100,
            平均交易: 66.67,
          },
          {
            key: '2',
            日期: '2022-02-01',
            部门: '大客户部',
            销售额: 1500,
            成本: 900,
            利润: 600,
            客户数: 200,
            平均交易: 75,
          },
          {
            key: '3',
            日期: '2022-03-01',
            部门: '大客户部',
            销售额: 1600,
            成本: 900,
            利润: 700,
            客户数: 300,
            平均交易: 66.67,
          },
          {
            key: '4',
            日期: '2023-04-01',
            部门: '大客户部',
            销售额: 700,
            成本: 600,
            利润: 200,
            客户数: 400,
            平均交易: 90,
          },
        ],
        colums: [
          { title: '日期', dataIndex: '日期' },
          { title: '部门', dataIndex: '部门' },
          { title: '销售额', dataIndex: '销售额' },
          { title: '成本', dataIndex: '成本' },
          { title: '利润', dataIndex: '利润' },
          { title: '客户数', dataIndex: '客户数' },
          { title: '平均交易', dataIndex: '平均交易' },
        ],
      },
      {
        data: [
          { key: '1', student: 'studen1', yuwen: 109, yingyu: 89, shuxue: 140 },
          { key: '2', student: 'studen2', yuwen: 119, yingyu: 90, shuxue: 100 },
          { key: '3', student: 'studen3', yuwen: 99, yingyu: 89, shuxue: 88 },
          { key: '4', student: 'stude4', yuwen: 88, yingyu: 70, shuxue: 99 },
          { key: '5', student: 'stude5', yuwen: 90, yingyu: 89, shuxue: 98 },
        ],
        colums: [
          { title: 'student', dataIndex: 'student' },
          { title: 'yuwen', dataIndex: 'yuwen' },
          { title: 'yingyu', dataIndex: 'yingyu' },
          { title: 'shuxue', dataIndex: 'shuxue' },
        ],
      },
    ],
    modelDataList: [], //模型数据
    checkedModelData: [], //选中的模型
    sessionItem: {}, //展示的会话信息
    catalog: [],
  })

  //获取模型数据
  const getCustomCatalogEntityTree = async () => {
    let result = await axios.post('/webapi/ydg_vmcdm_custom_api/getCustomCatalogEntityTree', {
      data: {
        customGroupId: null,
        customOwnerId: null,
        catalogId: '',
        isCascade: true,
        isPublish: true,
      },
    })
    if (result?.data?.data?.bizCatalogEntityCustom) {
      let bizCatalogEntityCustom = result?.data?.data?.bizCatalogEntityCustom
      const buildTree = (items: any, parentId = null) => {
        return items
          .filter((item: any) => item.parentId === parentId)
          .map((item: any) => {
            let children = item?.isCatalog ? buildTree(items, item.id) : []
            return { ...item, title: item.name_cn, key: item.id, children, fields: [] }
          })
      }
      const treeData = buildTree(bizCatalogEntityCustom)
      chataiData.catalog = []
      bizCatalogEntityCustom.map((item) => {
        if (item.isCatalog) {
          chataiData.catalog.push({ ...item })
        }
      })
      chataiData.catalog = buildTree(chataiData.catalog)
      chataiData.modelDataList = treeData
      console.log('模型目录::', chataiData.catalog)
    }
  }

  //查找勾选的模型节点
  const filterCheckedNodes = (data: any[], key: string) => {
    const checkedNodes: any[] = []
    const traverse = (nodes: any, key: string) => {
      for (const node of nodes) {
        if (!node.isCatalog && node.key === key) {
          checkedNodes.push(node)
          return
        }
        if (node.isCatalog && node.children) {
          traverse(node.children, key)
        }
        // if (node.children) traverse(node.children, key)
      }
    }
    traverse(data, key)
    return checkedNodes
  }

  //获取勾选的模型
  const getCheckedModelData = (checkedKeys: string[]) => {
    if (!checkedKeys.length) {
      chataiData.checkedModelData = []
      return
    }
    chataiData.checkedModelData = checkedKeys.reduce((accumulator: any[], currentValue: string) => {
      let checkedNodes = filterCheckedNodes(chataiData.modelDataList, currentValue)
      return [...accumulator, ...checkedNodes]
    }, [])
  }

  const setModelDataList = (data: any) => {
    chataiData.modelDataList = data
  }

  //设置展示的会话信息
  const setSessionItem = (data: any) => {
    chataiData.sessionItem = data
  }

  //设置选中模型
  const setCheckedModelData = (file: any[], modelItem: string) => {
    let findItem = chataiData.checkedModelData.find((item) => item.id === modelItem?.id)
    if (!findItem) return
    findItem.fields = file
  }

  //删除字段
  const deleteFile = (file: any, id: string) => {
    let findItem = chataiData.checkedModelData.find((item) => item.id === id)
    if (!findItem) return
    let findIndex = findItem.fields.findIndex((item) => item.id === file.id)
    findItem.fields.splice(findIndex, 1)
    if (!findItem?.fields?.length) delete findItem.fields
    // const updatedItems = chataiData.checkedModelData.reduce((acc, item) => {
    //   if (item.id === id) {
    //     const updatedTest = item.fields.filter((subItem) => subItem.id !== file.id)
    //     if(!)
    //     acc.push({ ...item, fields: updatedTest })
    //   } else {
    //     acc.push(item)
    //   }
    //   return acc
    // }, [])
    // console.log('updatedItems::', updatedItems)
    // chataiData.checkedModelData = updatedItems
  }

  const deleteModel = (id: string) => {
    chataiData.checkedModelData = chataiData.checkedModelData.filter((item) => item.id !== id)
  }

  return {
    chataiData,
    setSessionItem,
    getCustomCatalogEntityTree,
    getCheckedModelData,
    setModelDataList,
    setCheckedModelData,
    deleteFile,
    deleteModel,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTablesStore as any, import.meta.hot))
}
