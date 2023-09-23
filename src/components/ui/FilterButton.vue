<script setup lang="ts">
import IconFilter from '../icons/IconFilter.vue';
import IconFilledFilter from '../icons/IconFilledFilter.vue';
defineProps<{
  isActive?: boolean
}>()
</script>

<template>
  <div class="button" @click="$emit('onClick')">
    <IconFilter v-if="!isActive" class="icon" />
    <IconFilledFilter v-else class="icon" />
  </div>
</template>

<style scoped>
.button {
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:hover {
  cursor: pointer;

  .icon {
    color: var(--darker-purple);
  }
}

.button:active {
  transform: var(--clicked-button);
}

.icon {
  width: 28px;
  height: 28px;
  color: var(--dark-purple);
  transition: color 175ms ease;
}
</style>