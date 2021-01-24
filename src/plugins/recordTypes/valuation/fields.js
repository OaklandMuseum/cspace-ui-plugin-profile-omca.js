import { computeSortableIDNumber, joinValues } from '../../../utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:valuationcontrols_common');

          return Immutable.fromJS({
            'ns2:valuationcontrols_omca': {
              computedValuationControlSummary: joinValues(
                [
                  commonData.getIn([
                    'valueAmountsList',
                    'valueAmounts',
                    0,
                    'valueAmount',
                  ]),
                  commonData.get('valueType'),
                ],
                configContext.formatHelpers,
              ),
              sortableValuationcontrolRefNumber: computeSortableIDNumber(
                commonData.get('valuationcontrolRefNumber'),
              ),
            },
          });
        },
      },
      'ns2:valuationcontrols_common': {
        valuationcontrolRefNumber: {
          [config]: {
            view: {
              props: {
                source: 'omcaValuationcontrol',
              },
            },
          },
        },
        valueAmountsList: {
          valueAmounts: {
            valueCurrency: {
              [config]: {
                defaultValue: 'urn:cspace:museumca.org:vocabularies:name(currency):item:name(USD)\'US Dollar\'',
              },
            },
          },
        },
        valueType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'valueType',
              },
            },
          },
        },
      },
      'ns2:valuationcontrols_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/valuationcontrol/local/omca',
          },
        },
        sortableValuationcontrolRefNumber: {
          [config]: {
            cloneable: false,
          },
        },
      },
    },
  };
};
