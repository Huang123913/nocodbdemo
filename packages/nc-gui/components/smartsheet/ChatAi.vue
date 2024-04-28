<script lang="ts" setup></script>

<template>
  <div class="chatai-content">
    <SmartsheetChataiLeftSessionList />
    <SmartsheetChataiRightTableList />
  </div>
</template>

<style scoped lang="scss">
.chatai-content {
  width: 100%;
  display: flex;
  height: calc(100vh - var(--topbar-height));
}
</style>
