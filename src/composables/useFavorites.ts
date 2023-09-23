import { computed } from 'vue';
import useLocalStorage from './useLocalStorage.js';

export default function () {
  const favorites = useLocalStorage([], 'flickair_favorites');
  const hasFavorites = computed(() => favorites.value.length > 0);

  const addFavorite = (author: string, url: string) => {
    favorites.value = [...favorites.value, { author, url }];
  }
  const removeFavorite = (authorName: string) => {
    favorites.value = favorites.value.filter(fav => fav.author != authorName);
  }
  return {
    favorites,
    hasFavorites,
    removeFavorite,
    addFavorite,
  }
}