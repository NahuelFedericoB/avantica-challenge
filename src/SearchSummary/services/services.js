import { normalizeGoogleSearch } from './normalizers';

const googleApiKey = 'AIzaSyCi1WWG4xfda_CY-RoGOjyngJe5TD5foQQ';
const googleSearchEngineId = '3899fda6bb640a5f3';

const getSearchFromGoogle = async param => {
  try {
    const googleCustomUrl = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleSearchEngineId}&q=${param}`;
    const googleSearch = fetch(googleCustomUrl)
      .then(response => response.json())
      .then(data => normalizeGoogleSearch(data));

    return googleSearch;
  } catch {
    return [];
  }
};

export { getSearchFromGoogle };
