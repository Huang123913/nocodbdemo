<script lang="ts" setup>
// import { IsPublicInj, inject, ref, useSmartsheetStoreOrThrow, useViewsStore } from '#imports'

const { isGrid, isForm, isGallery, isKanban, isMap, isCalendar } = useSmartsheetStoreOrThrow()

// const router = useRouter()
// const route = router.currentRoute

// const isPublic = inject(IsPublicInj, ref(false))

// const { isViewsLoading } = storeToRefs(useViewsStore())

// const { isMobileMode } = storeToRefs(useConfigStore())

// const { appInfo } = useGlobal()

// const isSharedBase = computed(() => route.value.params.typeOrId === 'base')
</script>

<template>
  <div class="table-list-content">table-list-content</div>
</template>

<style scoped lang="scss">
.table-list-content {
  width: 60%;
  height: 100%;
  flex-direction: column;
  padding: 16px 16px 24px 14px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
