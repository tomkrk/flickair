<script setup lang="ts">
import Text from '../ui/Text.vue';
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="container">
    <Text isBold>{{ label }}</Text>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: scroll;
  padding-bottom: 20px;
}
</style>