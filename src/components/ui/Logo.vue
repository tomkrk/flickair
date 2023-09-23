<script setup lang="ts">
import Text from './Text.vue';
import IconPicture from '../icons/IconPicture.vue';
</script>

<template>
  <div class="container">
    <IconPicture class="mr-3" />
    <Text :tag="'h1'">FlickAir</Text>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
</style>