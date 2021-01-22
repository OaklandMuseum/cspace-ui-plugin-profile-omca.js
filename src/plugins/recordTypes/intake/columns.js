import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      currentOwner: {
        disabled: true,
      },
      entryReason: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.intake.default.entryReason',
            defaultMessage: 'Entry reason',
          },
        }),
        order: 20,
        sortBy: 'intakes_common:entryReason',
        width: 450,
      },
    },
  };
};
