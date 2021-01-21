import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    DateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:conservation_common');

          return Immutable.fromJS({
            'ns2:conservation_omca': {
              sortableConservationNumber: computeSortableIDNumber(
                commonData.get('conservationNumber'),
              ),
            },
          });
        },
      },
      'ns2:conservation_common': {
        treatmentPurpose: {
          [config]: {
            view: {
              props: {
                source: 'omcatreatmentpurpose',
              },
            },
          },
        },
      },
      'ns2:conservation_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conservation/local/omca',
          },
        },
        sortableConservationNumber: {
          [config]: {
            cloneable: false,
          },
        },
        dateOfAnalysis: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.conservation_omca.dateOfAnalysis.name',
                defaultMessage: 'Date of analysis',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
    },
  };
};
