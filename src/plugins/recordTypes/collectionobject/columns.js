import { defineMessages } from 'react-intl';

export default {
  default: {
    objectNumber: {
      sortBy: 'collectionobjects_omca:sortableObjectNumber',
    },
    title: {
      disabled: true,
    },
    computedCatalogingSummary: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.computedCatalogingSummary',
          defaultMessage: 'Name - Taxon - Maker',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_omca:computedCatalogingSummary',
      width: 450,
    },
  },
  narrow: {
    objectNumber: {
      sortBy: 'collectionobjects_omca:sortableObjectNumber',
    },
    title: {
      disabled: true,
    },
    computedCatalogingSummary: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.narrow.computedCatalogingSummary',
          defaultMessage: 'Name - Taxon - Maker',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_omca:computedCatalogingSummary',
      width: 450,
    },
  },
};
