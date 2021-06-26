import { defineMessages } from 'react-intl';

export default {
  default: {
    identificationNumber: {
      sortBy: 'media_omca:sortableIdentificationNumber',
    },
    title: {
      disabled: true,
    },
    originalFileName: {
      messages: defineMessages({
        label: {
          id: 'column.media.default.originalFileName',
          defaultMessage: 'Original filename',
        },
      }),
      order: 30,
      sortBy: 'media_omca:originalFileName',
      width: 380,
    },
    isPrimary: {
      // This column is used only for sorting related media snapshots.
      // It is disabled so it doesn't appear in search result tables.
      disabled: true,
      sortBy: 'media_omca:isPrimary',
    },
  },
};
