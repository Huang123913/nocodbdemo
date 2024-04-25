<script lang="ts" setup>
const props = defineProps<{
  isShow: boolean
}>()
</script>

<template>
  <div class="loading-content" :style="{ display: isShow ? 'flex' : 'none' }">
    <a-spin size="large" />
  </div>
</template>

<style scoped lang="scss">
.loading-content {
  position: fixed;
  z-index: 888;
  top: 50%;
  left: 50%;
  ::v-deep .ant-spin-dot-item {
    background-color: rgb(25, 118, 210);
  }
}
</style>
