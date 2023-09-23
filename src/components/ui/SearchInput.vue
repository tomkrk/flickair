<script setup lang="ts">
import IconSearch from '../icons/IconSearch.vue';
defineProps<{
  modelValue: string
}>()
</script>

<template>
  <div class="container">
    <input type="text" class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Rechercher..." />
    <IconSearch class="icon" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.input {
  border: 1px solid transparent;
  border-radius: 32px;
  padding: 12px 24px 12px 58px;
  min-width: 220px;
  font-family: 'OpenSans';
  font-size: 22px;
  letter-spacing: 2px;
  background: var(--purple);
  transition: min-width 175ms ease, background 175ms ease;

  &::placeholder {
    color: var(--dark-purple);
  }

  &:focus {
    background: white;
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, .3), 0 1px 3px 1px rgba(65, 69, 73, .15);
    min-width: 240px;
  }

  &:focus::placeholder {
    color: #9E9E9E;
  }

  &:focus-visible {
    outline: none;
  }

  &:not(:focus):hover {
    background: var(--hovered-purple);
  }
}

.input:focus~.icon {
  color: #9E9E9E;
}

.icon {
  width: 28px;
  position: absolute;
  top: 14px;
  left: 14px;
  color: #9f97c7;
}
</style>