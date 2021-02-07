import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
            termType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'termtype',
                  },
                },
              },
            },
            salutation: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'salutation',
                  },
                },
              },
            },
            title: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'persontitle',
                  },
                },
              },
            },
          },
        },
        gender: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'gender',
              },
            },
          },
        },
        schoolsOrStyles: {
          schoolOrStyle: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        groups: {
          group: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        nationalities: {
          nationality: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
      },
      'ns2:persons_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/omca',
          },
        },
        activeDatesGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.persons_omca.activeDatesGroup.name',
                defaultMessage: 'Active dates',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        workLocation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_omca.workLocation.name',
                defaultMessage: 'Work location',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        personsSpecialties: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          personsSpecialty: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_omca.personsSpecialty.name',
                  defaultMessage: 'Person\'s specialty',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        legacyParents: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_omca.legacyParents.name',
                defaultMessage: 'Legacy parents',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        legacySeeAlso: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_omca.legacySeeAlso.name',
                defaultMessage: 'Legacy see also',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
