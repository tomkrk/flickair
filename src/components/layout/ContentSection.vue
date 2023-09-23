<script setup lang="ts">
defineProps<{
  isBlue?: boolean
}>()
</script>

<template>
  <div class="section" :class="{ blue: isBlue }">
    <slot />
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 50px;
}

.blue {
  background: #f4f7fc;
}
</style>
