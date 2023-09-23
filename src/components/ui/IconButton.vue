<template>
  <button class="iconButton" @click="$emit('handleClick')">
    <slot />
  </button>
</template>

<style>
.iconButton {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
}
</style>