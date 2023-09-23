import { ref } from 'vue';

export default function (initialState?: boolean) {
  const isActive = ref(initialState);
  const toggleIsActive = () => isActive.value = !isActive.value;

  return {
    isActive,
    toggleIsActive
  }
}