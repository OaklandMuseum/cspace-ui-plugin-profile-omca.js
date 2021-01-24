import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
    thumbnailImage,
  } = configContext.formatHelpers;

  return {
    default: {
      blobCsid: {
        formatValue: thumbnailImage,
        messages: defineMessages({
          label: {
            id: 'column.restrictedmedia.default.blobCsid',
            defaultMessage: 'Thumbnail',
          },
        }),
        order: 10,
        width: 70,
      },
      identificationNumber: {
        messages: defineMessages({
          label: {
            id: 'column.restrictedmedia.default.identificationNumber',
            defaultMessage: 'Identification number',
          },
        }),
        order: 20,
        sortBy: 'restrictedmedia_omca:sortableIdentificationNumber',
        width: 200,
      },
      originalFileName: {
        messages: defineMessages({
          label: {
            id: 'column.restrictedmedia.default.originalFileName',
            defaultMessage: 'Original filename',
          },
        }),
        order: 30,
        sortBy: 'restrictedmedia_omca:originalFileName',
        width: 380,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.restrictedmedia.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 40,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
