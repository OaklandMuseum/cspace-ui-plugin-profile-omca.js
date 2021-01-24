import { defineMessages } from 'react-intl';

export default {
  default: {
    valuationcontrolRefNumber: {
      sortBy: 'valuationcontrols_omca:sortableValuationcontrolRefNumber',
    },
    valueType: {
      disabled: true,
    },
    computedValuationControlSummary: {
      messages: defineMessages({
        label: {
          id: 'column.valuation.default.computedValuationControlSummary',
          defaultMessage: 'Amount - Type',
        },
      }),
      order: 20,
      sortBy: 'valuationcontrols_omca:computedValuationControlSummary',
      width: 400,
    },
  },
};
