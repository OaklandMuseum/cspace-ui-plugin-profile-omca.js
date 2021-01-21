import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.claim.name',
      description: 'The name of the claim record type.',
      defaultMessage: 'NAGPRA',
    },
    collectionName: {
      id: 'record.claim.collectionName',
      description: 'The name of a collection of records of the claim type.',
      defaultMessage: 'NAGPRA',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.claim.info',
      defaultMessage: 'NAGPRA Claim / Information Request',
    },
    context: {
      id: 'panel.claim.context',
      defaultMessage: 'Claim Context',
    },
    processing: {
      id: 'panel.claim.processing',
      defaultMessage: 'Claim Processing Information',
    },
  }),
};
