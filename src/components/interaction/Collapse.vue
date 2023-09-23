<script setup lang="ts">
defineProps<{
  isOpen?: boolean
}>()
</script>

  
<template>
  <transition name="popup">
    <div v-if="isOpen" class="container">
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
.container {
  width: 100%;
  background: #F9F9F9;
  margin: 10px;
}

.popup-enter-from,
.popup-leave-to {
  height: 0;
  overflow: hidden;
  opacity: 0;
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
  height: 185px;
  overflow: visible;
}

.popup-enter-active {
  transition: all 300ms ease;
}

.popup-leave-active {
  transition: all 225ms ease, opacity 175ms;
}
</style>
