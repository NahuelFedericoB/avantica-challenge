import { normalizeGoogleSearch, normalizeBingSearch } from './normalizers';

describe('normalizeGoogleSearch', () => {
  it('should normalize the data from API', () => {
    const response = {
      source: 'custom',
      items: [
        {
          kind: 'customsearch#result',
          title: 'Google',
          link: 'https://www.google.com/',
          displayLink: 'www.google.com',
          snippet: "Search the world's information, including webpages, images, videos and more.",
        },
      ],
    };
    const expectedResponse = [
      {
        title: 'Google',
        linkToPage: 'https://www.google.com/',
        displayLink: 'www.google.com',
        snippet: "Search the world's information, including webpages, images, videos and more.",
      },
    ];

    expect(normalizeGoogleSearch(response)).toEqual(expectedResponse);
  });

  describe('when the input is an empty object', () => {
    it('should return the default empty array value', () => {
      expect(normalizeGoogleSearch({})).toEqual([]);
    });
  });

  describe('when a key is missing', () => {
    it('should return the default value for the key', () => {
      const response = {
        source: 'custom',
        items: [
          {
            kind: 'customsearch#result',
            link: 'https://www.google.com/',
            displayLink: 'www.google.com',
          },
        ],
      };
      const expectedResponse = [
        {
          title: '',
          linkToPage: 'https://www.google.com/',
          displayLink: 'www.google.com',
          snippet: '',
        },
      ];
      expect(normalizeGoogleSearch(response)).toEqual(expectedResponse);
    });
  });

  describe('when a value is `null` or `undefined`', () => {
    it('should return the default value for the value', () => {
      const response = {
        source: 'custom',
        items: [
          {
            kind: 'customsearch#result',
            title: null,
            link: undefined,
            displayLink: undefined,
            snippet: null,
          },
        ],
      };
      const expectedResponse = [
        {
          title: '',
          linkToPage: '',
          displayLink: '',
          snippet: '',
        },
      ];
      expect(normalizeGoogleSearch(response)).toEqual(expectedResponse);
    });
  });
});

describe('normalizeBingSearch', () => {
  it('should normalize the data from API', () => {
    const response = {
      source: 'custom',
      webPages: {
        value: [
          {
            kind: 'customsearch#result',
            name: 'Google',
            url: 'https://www.google.com/',
            displayUrl: 'www.google.com',
            snippet: "Search the world's information, including webpages, images, videos and more.",
          },
        ],
      },
    };
    const expectedResponse = [
      {
        title: 'Google',
        linkToPage: 'https://www.google.com/',
        displayLink: 'www.google.com',
        snippet: "Search the world's information, including webpages, images, videos and more.",
      },
    ];

    expect(normalizeBingSearch(response)).toEqual(expectedResponse);
  });

  describe('when the input is an empty object', () => {
    it('should return the default empty array value', () => {
      expect(normalizeBingSearch({})).toEqual([]);
    });
  });

  describe('when a key is missing', () => {
    it('should return the default value for the key', () => {
      const response = {
        source: 'custom',
        webPages: {
          value: [
            {
              kind: 'customsearch#result',
              url: 'https://www.google.com/',
              displayUrl: 'www.google.com',
            },
          ],
        },
      };
      const expectedResponse = [
        {
          title: '',
          linkToPage: 'https://www.google.com/',
          displayLink: 'www.google.com',
          snippet: '',
        },
      ];
      expect(normalizeBingSearch(response)).toEqual(expectedResponse);
    });
  });

  describe('when a value is `null` or `undefined`', () => {
    it('should return the default value for the value', () => {
      const response = {
        source: 'custom',
        webPages: {
          value: [
            {
              name: undefined,
              url: null,
              displayUrl: null,
              snippet: undefined,
            },
          ],
        },
      };
      const expectedResponse = [
        {
          title: '',
          linkToPage: '',
          displayLink: '',
          snippet: '',
        },
      ];
      expect(normalizeBingSearch(response)).toEqual(expectedResponse);
    });
  });
});
