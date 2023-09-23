import { ref } from 'vue';

export default function () {
  const search = ref('');
  const lang = ref('fr-fr');
  const tagmode = ref<'all' | 'any'>('all');

  const langParameters = [
    {
      label: 'Allemand',
      value: 'de-de'
    }, {
      label: 'Anglais',
      value: 'en-us'
    }, {
      label: 'Espagnol',
      value: 'es-us'
    }, {
      label: 'Français',
      value: 'fr-fr'
    }, {
      label: 'Italien',
      value: 'it-it'
    }, {
      label: 'Coréen',
      value: 'ko-kr'
    }, {
      label: 'Portugais (Brésil)',
      value: 'pt-br'
    }, {
      label: 'Chinois traditionnel (Honk-kong)',
      value: 'zh-hk'
    }
  ]

  return {
    search,
    lang,
    tagmode,
    langParameters
  }
}