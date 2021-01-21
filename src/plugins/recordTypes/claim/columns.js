import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      claimNumber: {
        messages: defineMessages({
          label: {
            id: 'column.claim.default.claimNumber',
            defaultMessage: 'Reference number',
          },
        }),
        order: 10,
        sortBy: 'claims_omca:sortableClaimNumber',
        width: 200,
      },
      filedByOMCA: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.claim.default.filedByOMCA',
            defaultMessage: 'Filed by',
          },
        }),
        order: 20,
        sortBy: 'claims_omca:claimClaimantOMCAGroupList/0/filedByOMCA',
        width: 300,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.claim.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
