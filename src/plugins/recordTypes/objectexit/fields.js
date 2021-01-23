import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TermPickerInput,
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
          const commonData = data.get('ns2:objectexit_common');

          return Immutable.fromJS({
            'ns2:objectexit_omca': {
              sortableExitNumber: computeSortableIDNumber(
                commonData.get('exitNumber'),
              ),
            },
          });
        },
      },
      'ns2:objectexit_common': {
        exitNumber: {
          [config]: {
            view: {
              props: {
                source: 'omcaObjectexit',
              },
            },
          },
        },
        exitReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'exitreason',
              },
            },
          },
        },
        exitMethods: {
          exitMethod: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'exitmethod',
                },
              },
            },
          },
        },
      },
      'ns2:objectexit_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/objectexit/local/omca',
          },
        },
        exitStatusGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exitStatusGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.objectexit_omca.exitStatusGroup.name',
                  defaultMessage: 'Exit status',
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
            exitStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.objectexit_omca.exitStatus.fullName',
                    defaultMessage: 'Exit status',
                  },
                  name: {
                    id: 'field.objectexit_omca.exitStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exitstatus',
                  },
                },
              },
            },
            exitStatusDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.objectexit_omca.exitStatusDate.fullName',
                    defaultMessage: 'Exit status date',
                  },
                  name: {
                    id: 'field.objectexit_omca.exitStatusDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        sortableExitNumber: {
          [config]: {
            cloneable: false,
          },
        },
      },
    },
  };
};
