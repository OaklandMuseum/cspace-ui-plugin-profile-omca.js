import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      exitNumber: {
        sortBy: 'objectexit_omca:sortableExitNumber',
      },
      currentOwner: {
        disabled: true,
      },
      exitReason: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.exitReason',
            defaultMessage: 'Exit reason',
          },
        }),
        order: 20,
        sortBy: 'objectexit_common:exitReason',
        width: 450,
      },
    },
  };
};
