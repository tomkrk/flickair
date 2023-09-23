<script setup lang="ts">
import { defineProps } from 'vue';
import Text from '../ui/Text.vue';
import LikeDislikeButton from './LikeDislikeButton.vue';
defineProps<{
  url: string,
  placeholderUrl: string,
  author?: string,
  hasLike?: boolean,
}>()
</script>

<template>
  <div class="container">
    <div class="item">
      <img :src="url" class="media" />
      <div class="placeholder" :style="{ backgroundImage: `url(${placeholderUrl})` }"></div>
    </div>
    <div class="bottomBar">
      <Text isBold class="author">{{ author
      }}</Text>
      <LikeDislikeButton @on-click="$emit('buttonClick')" :hasLike="hasLike" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: calc(33% - 8px);
  padding: 4px;
}

@media screen and (max-width: 840px) {
  .container {
    width: calc(50% - 8px);
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: calc(100% - 8px);
  }
}

.item {
  margin: 4px;
  position: relative;
  overflow: hidden;
  height: 300px;
  border-radius: 8px;
}

.placeholder {
  background-position: center;
  background-size: cover;
  background-color: #D9D9D9;
  filter: blur(8px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.media {
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  height: 300px;
}

.author {
  flex: 1;
  padding: 8;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.bottomBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>