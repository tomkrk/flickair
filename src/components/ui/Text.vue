<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string,
  isBold?: boolean,
}>(), {
  tag: 'p'
})


</script>

<template>
  <component :is="tag ? tag : 'p'" :class="{ bold: isBold }">
    <slot></slot>
  </component>
</template>

<style scoped>
p,
span {
  font-size: 16px;
  font-family: 'OpenSans';
}

span:not(.bold),
p:not(.bold) {
  letter-spacing: 1px;
}

p.bold,
span.bold {
  font-family: "WorkSans";
}

h1,
h2 {
  font-family: 'WorkSans';
}

h1 {
  font-size: 38px;
}

h2 {
  font-size: 32px;
}
</style>