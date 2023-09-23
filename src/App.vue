<script setup lang="ts">
import { watch } from 'vue';

import useFavorites from './composables/useFavorites';
import useFlickrApi from './composables/useFlickrApi';
import useFlickrFilters from './composables/useFlickrFilters.js';
import useToggle from './composables/useToggle.js';

import ContentSection from './components/layout/ContentSection.vue';
import FilterSection from './components/layout/FilterSection.vue';
import Grid from './components/layout/Grid.vue';

import Logo from './components/ui/Logo.vue';
import FilterButton from './components/ui/FilterButton.vue';
import Text from './components/ui/Text.vue';
import SearchInput from './components/ui/SearchInput.vue';
import Filter from './components/ui/Filter.vue';

import Collapse from './components/interaction/Collapse.vue';

import Picture from './components/picture/Picture.vue';


const { isActive, toggleIsActive } = useToggle(false);
const { favorites, addFavorite, removeFavorite, hasFavorites } = useFavorites();
const { fetchData, data, hasData, error } = useFlickrApi();
const { search, lang, tagmode, langParameters } = useFlickrFilters();

const getFiltersValue = () => {
  return {
    search: search.value,
    lang: lang.value,
    tagmode: tagmode.value
  };
}
watch(search, () => fetchData(getFiltersValue()));
watch(lang, () => fetchData(getFiltersValue()));
watch(tagmode, () => fetchData(getFiltersValue()));

fetchData(getFiltersValue());
</script>

<template>
  <ContentSection>
    <Logo />
    <div class="row">
      <SearchInput v-model="search" @keyup.enter="fetchData" />
      <FilterButton @on-click="toggleIsActive" :isActive="isActive" />
    </div>
    <Collapse :isOpen="isActive">
      <FilterSection label="Le résultat contient :">
        <Filter label="Tous les mots" value="all" v-model="tagmode" />
        <Filter label="Quelques mots" value="any" v-model="tagmode" />
      </FilterSection>
      <FilterSection label="Langue :">
        <Filter v-for="langParameter in langParameters" :key="langParameter.label" :label="langParameter.label"
          :value="langParameter.value" v-model="lang" />
      </FilterSection>
    </Collapse>
    <Text class="noResult" v-if="!hasData">La recherche n'a renvoyé aucun résultat.</Text>
    <Grid class="mt-3" v-else>
      <Picture v-for="picture in data" :key="picture.link" :url="picture.url" :placeholderUrl="picture.placeholderUrl"
        :author="picture.author" hasLike @button-click="addFavorite(picture.author, picture.url)" />
    </Grid>
  </ContentSection>

  <ContentSection isBlue>
    <Text :tag="'h2'">Vos favoris</Text>
    <Text v-if="!hasFavorites">Il semble que votre espace favori soit vide. Commencez à ajouter les photos que vous
      aimez.</Text>
    <Grid v-else>
      <Picture v-for="picture in favorites" :key="picture.link" :url="picture.url"
        :placeholderUrl="picture.placeholderUrl" :author="picture.author"
        @button-click="removeFavorite(picture.author)" />
    </Grid>
  </ContentSection>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
}

.noResult {
  padding: 100px 16px;
}
</style>