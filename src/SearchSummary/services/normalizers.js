import lodashGet from 'lodash/get';
import isNull from 'lodash/isNull';

const get = (object, value, defaultValue) => {
  const obtainedValue = lodashGet(object, value, defaultValue);

  return isNull(obtainedValue) ? defaultValue : obtainedValue;
};

const normalizeGoogleSearch = ({ items = [] }) => {
  const normalizedData = items.map(item => ({
    displayLink: get(item, 'displayLink', ''),
    title: get(item, 'title', ''),
    snippet: get(item, 'snippet'),
    linkToPage: get(item, 'link', ''),
  }));

  return normalizedData;
};

export { normalizeGoogleSearch };
