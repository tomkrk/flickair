import { ref, computed } from 'vue';
import axios from 'axios';
import { extractAuthorName, getSmallPicture } from '../utils/formatString';

export default function () {
  const data = ref([]);
  const hasData = computed(() => data.value.length > 0);
  const error = ref(null);

  const apiConfig = {
    format: 'json',
    lang: 'fr-fr',
    nojsoncallback: 1,
    tags: '',
    tagmode: 'all'
  };

  const formatFilters = (filters) => {
    return {
      ...apiConfig,
      tags: filters.search.replace(/\s/g, ','),
      tagmode: filters.tagmode,
      lang: filters.langFilter,
    }
  }

  const formatApiPicture = (data) => {
    return {
      url: data.media.m,
      placeholderUrl: getSmallPicture(data.media.m),
      link: data.link,
      author: extractAuthorName(data.author)
    }
  }


  const fetchData = async (filters) => {
    const params = formatFilters(filters);
    axios({
      method: 'get',
      params,
      url: `/api/services/feeds/photos_public.gne`,
    })
      .then(res => {
        data.value = res.data.items.slice(0, 5).map(apiPicture => formatApiPicture(apiPicture));
      })
      .catch(err => error.value = err)
  }

  return {
    data,
    hasData,
    fetchData,
    error
  };
}