import { defineMessages } from 'react-intl';

export default {
  inputTable: defineMessages({
    taxonName: {
      id: 'inputTable.collectionobject.taxonName',
      defaultMessage: 'Taxonomic identification',
    },
    taxonIdent: {
      id: 'inputTable.collectionobject.taxonIdent',
      defaultMessage: 'Identification by',
    },
    taxonReference: {
      id: 'inputTable.collectionobject.taxonReference',
      defaultMessage: 'Reference',
    },
  }),
  panel: defineMessages({
    culturalCare: {
      id: 'panel.collectionobject.culturalCare',
      defaultMessage: 'Cultural Care Information',
    },
    nagpraCompliance: {
      id: 'panel.ext.nagpra.nagpraCompliance',
      defaultMessage: 'Repatriation and NAGPRA Compliance Information',
    },
  }),
};
