import { ref, watch } from 'vue';

export default function (initValue, storageKey) {
  const data = ref(initValue);
  const storageValue = localStorage.getItem(storageKey);

  if (storageValue) {
    data.value = JSON.parse(storageValue);
  }

  watch(data, data => {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }, { deep: true });

  return data;
}