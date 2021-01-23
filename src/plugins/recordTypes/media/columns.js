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
  },
};
