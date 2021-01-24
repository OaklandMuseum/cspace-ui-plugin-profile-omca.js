import { defineMessages } from 'react-intl';

export default {
  default: {
    movementReferenceNumber: {
      sortBy: 'movements_omca:sortableMovementReferenceNumber',
    },
    currentLocation: {
      disabled: true,
    },
    computedMovementSummary: {
      messages: defineMessages({
        label: {
          id: 'column.movement.default.computedMovementSummary',
          defaultMessage: 'Location - Reason',
        },
      }),
      order: 30,
      sortBy: 'movements_omca:computedMovementSummary',
      width: 250,
    },
  },
};
