import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    AutocompleteInput,
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
          const commonData = data.get('ns2:intakes_common');

          return Immutable.fromJS({
            'ns2:intakes_omca': {
              sortableEntryNumber: computeSortableIDNumber(
                commonData.get('entryNumber'),
              ),
            },
          });
        },
      },
      'ns2:intakes_common': {
        entryNumber: {
          [config]: {
            view: {
              props: {
                source: 'intake',
              },
            },
          },
        },
        entryReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'entryReason',
              },
            },
          },
        },
        entryMethods: {
          entryMethod: {
            [config]: {
              view: {
                props: {
                  source: 'omcaentrymethod',
                },
              },
            },
          },
        },
        fieldCollectionPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
      },
      'ns2:intakes_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake/local/omca',
          },
        },
        sortableEntryNumber: {
          [config]: {
            cloneable: false,
          },
        },
        depositorOMCAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          depositorOMCAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.intakes_omca.depositorOMCAGroup.name',
                  defaultMessage: 'Depositor',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            depositorOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.intakes_omca.depositorOMCA.fullName',
                    defaultMessage: 'Depositor name',
                  },
                  name: {
                    id: 'field.intakes_omca.depositorOMCA.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            depositorsRequirementsOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.intakes_omca.depositorsRequirementsOMCA.fullName',
                    defaultMessage: 'Depositor requirements',
                  },
                  name: {
                    id: 'field.intakes_omca.depositorsRequirementsOMCA.name',
                    defaultMessage: 'Requirements',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
