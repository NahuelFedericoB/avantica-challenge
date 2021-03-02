import { normalizeGoogleSearch, normalizeBingSearch } from './normalizers';

const googleApiKey = 'AIzaSyCi1WWG4xfda_CY-RoGOjyngJe5TD5foQQ';
const googleSearchEngineId = '3899fda6bb640a5f3';

const bingApiKey = '520544b4ebaa4aa0897083f2a5aa3662';
const bingSearchEngineId = 'e677250d-83b3-49b9-a2f8-897779ef3dab';

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

const getSearchFromBing = async param => {
  try {
    const bingCustomUrl = `https://api.bing.microsoft.com/v7.0/custom/search?q=${param}&customconfig=${bingSearchEngineId}`;
    const bingSearch = fetch(bingCustomUrl, {
      headers: { 'Ocp-Apim-Subscription-Key': bingApiKey },
    })
      .then(response => response.json())
      .then(data => normalizeBingSearch(data));

    return bingSearch;
  } catch {
    return [];
  }
};

export { getSearchFromGoogle, getSearchFromBing };
