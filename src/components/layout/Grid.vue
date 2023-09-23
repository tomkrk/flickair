<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>