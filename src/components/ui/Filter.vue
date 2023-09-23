<script setup lang="ts">
import { computed } from 'vue';
import Text from './Text.vue';
const props = defineProps<{
  label: string,
  value: string,
  modelValue: string,
}>()
const isChecked = computed(() => props.modelValue === props.value);
</script>

<template>
  <input type='radio' :value="value" :id="value" @click="$emit('update:modelValue', $event.target.value)"
    :checked="isChecked" class="input" />
  <label :for="value" :class="{ checked: isChecked }" class="pill">
    <Text tag="span" class="label">{{ label }}</Text>
  </label>
</template>

<style scoped>
.input {
  display: none;
}

.pill {
  padding: 8px 16px;
  border-radius: 24px;

  &:hover {
    cursor: pointer;
  }
}

.pill:hover:not(.checked) .label {
  color: var(--black);
}

.checked {
  background: var(--purple);
}

.checked .label {
  color: black;
}

.label {
  color: var(--darker-purple);
  transition: all 175ms ease;
}
</style>