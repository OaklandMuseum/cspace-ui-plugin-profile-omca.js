import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    CheckboxInput,
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:conditionchecks_common');

          return Immutable.fromJS({
            'ns2:conditionchecks_omca': {
              sortableConditionCheckRefNumber: computeSortableIDNumber(
                commonData.get('conditionCheckRefNumber'),
              ),
            },
          });
        },
      },
      'ns2:conditionchecks_common': {
        hazardGroupList: {
          hazardGroup: {
            hazard: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'hazard',
                  },
                },
              },
            },
          },
        },
        conditionCheckMethod: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'omcaConditionCheckMethod',
              },
            },
          },
        },
        conditionCheckReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'conditionCheckReason',
              },
            },
          },
        },
      },
      'ns2:conditionchecks_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conditioncheck/local/omca',
          },
        },
        condition: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.conditionchecks_omca.condition.fullName',
                defaultMessage: 'Condition description',
              },
              name: {
                id: 'field.conditionchecks_omca.condition.name',
                defaultMessage: 'Description',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'condition',
              },
            },
          },
        },
        conditionDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.conditionchecks_omca.conditionDate.fullName',
                defaultMessage: 'Condition date',
              },
              name: {
                id: 'field.conditionchecks_omca.conditionDate.name',
                defaultMessage: 'Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        conditionNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.conditionchecks_omca.conditionNote.fullName',
                defaultMessage: 'Condition note',
              },
              name: {
                id: 'field.conditionchecks_omca.conditionNote.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sortableConditionCheckRefNumber: {
          [config]: {
            cloneable: false,
          },
        },
        assessmentRequestGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          assessmentRequestGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conditionchecks_omca.assessmentRequestGroup.name',
                  defaultMessage: 'Assessment request',
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
            assessmentRequestedBy: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.conditionchecks_omca.assessmentRequestedBy.fullName',
                    defaultMessage: 'Assessment requested by',
                  },
                  name: {
                    id: 'field.conditionchecks_omca.assessmentRequestedBy.name',
                    defaultMessage: 'Requested by',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            assessmentRequestRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.conditionchecks_omca.assessmentRequestRole.fullName',
                    defaultMessage: 'Assessment requested by role',
                  },
                  name: {
                    id: 'field.conditionchecks_omca.assessmentRequestRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'assessmentrequestrole',
                  },
                },
              },
            },
            assessmentRequestDateRequested: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.conditionchecks_omca.assessmentRequestDateRequested.fullName',
                    defaultMessage: 'Assessment request date',
                  },
                  name: {
                    id: 'field.conditionchecks_omca.assessmentRequestDateRequested.name',
                    defaultMessage: 'Date requested',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            assessmentRequestDateRequired: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.conditionchecks_omca.assessmentRequestDateRequired.fullName',
                    defaultMessage: 'Assessment required date',
                  },
                  name: {
                    id: 'field.conditionchecks_omca.assessmentRequestDateRequired.name',
                    defaultMessage: 'Date required',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        omcaConditionCheckMethods: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          omcaConditionCheckMethod: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.conditionchecks_omca.omcaConditionCheckMethod.name',
                  defaultMessage: 'Method',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'omcaConditionCheckMethod',
                },
              },
            },
          },
        },
        okForExhibitLoanAccession: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_omca.okForExhibitLoanAccession.name',
                defaultMessage: 'Ok for exhibit/loan/accession',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        needsTreatment: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_omca.needsTreatment.name',
                defaultMessage: 'Needs treatment',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'needstreatment',
              },
            },
          },
        },
        tempRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_omca.tempRequirement.name',
                defaultMessage: 'Temperature',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'temperaturelevel',
              },
            },
          },
        },
        humidityRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_omca.humidityRequirement.name',
                defaultMessage: 'Humidity',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'humiditylevel',
              },
            },
          },
        },
        lightRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_omca.lightRequirement.name',
                defaultMessage: 'Light',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'lightlevel',
              },
            },
          },
        },
      },
    },
  };
};
