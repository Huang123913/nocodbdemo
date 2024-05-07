<script lang="ts" setup>
import axios from 'axios'

const exeTrain = async (bizCatalogEntityCustom: any[]) => {
  for (let i = 0; i < bizCatalogEntityCustom.length; i++) {
    if (bizCatalogEntityCustom[i].isCatalog) {
    } else {
      let generateDDL = await axios.post(
        'http://databoard-test.yindangu.com/webapi/innersysapi/VMcdmDataServiceWebApi/generateDDL',
        {
          entityIds: bizCatalogEntityCustom[i].id,
          detail: false,
        },
      )
      let ddl = generateDDL?.data?.data?.ddl
      if (ddl) {
        let ddlString = ddl?.join('\\')
        await axios.post(
          `https://a7aa-14-123-254-4.ngrok-free.app/api/v0/train?ddl=${encodeURIComponent(ddlString)}&id=${
            bizCatalogEntityCustom[i].id
          }&orgid=1&projectid=1`,
        )
      }
    }
  }
}
onMounted(async () => {
  let data = {
    orgid: 1,
    projectid: 1,
    types: JSON.stringify(['ddl', 'sqlquestion']),
  }
  await axios.post(`https://a7aa-14-123-254-4.ngrok-free.app/api/v0/cleartrain?${new URLSearchParams(data).toString()}`)
  let result = await axios.post('http://databoard-test.yindangu.com/webapi/ydg_vmcdm_custom_api/getCustomCatalogEntityTree', {
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
    exeTrain(bizCatalogEntityCustom)
  }
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
