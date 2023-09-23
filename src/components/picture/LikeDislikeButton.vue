<script setup lang="ts">
import IconButton from '../ui/IconButton.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconDislikeHeart from '../icons/IconDislikeHeart.vue';
defineProps<{
  hasLike?: boolean
}>();
</script>

<template>
  <IconButton @handle-click="$emit('onClick')" class="button">
    <template v-if="hasLike">
      <IconHeart class="icon" />
    </template>
    <template v-else>
      <IconDislikeHeart class="icon" />
    </template>
  </IconButton>
</template>

<style scoped>
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
  transition: all 175ms ease;
  color: var(--dark-purple);
}
</style>