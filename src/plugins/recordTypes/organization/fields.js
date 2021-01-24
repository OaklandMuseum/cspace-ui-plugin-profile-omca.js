import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:organizations_common': {
        orgTermGroupList: {
          orgTermGroup: {
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
          },
        },
        foundingPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
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
        functions: {
          function: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'organizationfunction',
                },
              },
            },
          },
        },
      },
      'ns2:organizations_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/local/omca',
          },
        },
        legacyArgusNotes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_omca.legacyArgusNotes.name',
                defaultMessage: 'Legacy Argus notes',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
                readOnly: true,
              },
            },
          },
        },
        legacyParents: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_omca.legacyParents.name',
                defaultMessage: 'Legacy parents',
              },
            }),
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
                id: 'field.organizations_omca.legacySeeAlso.name',
                defaultMessage: 'Legacy see also',
              },
            }),
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
