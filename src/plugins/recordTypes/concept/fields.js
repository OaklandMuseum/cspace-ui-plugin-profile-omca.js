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
      'ns2:concepts_common': {
        conceptTermGroupList: {
          conceptTermGroup: {
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
            historicalStatus: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'historicalStatus',
                  },
                },
              },
            },
          },
        },
        citationGroupList: {
          citationGroup: {
            citationSource: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:concepts_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/concept/local/omca',
          },
        },
        legacyArgusNotes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.concepts_omca.legacyArgusNotes.name',
                defaultMessage: 'Legacy Argus notes',
              },
            }),
            searchView: {
              type: TextInput,
            },
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
                id: 'field.concepts_omca.legacyParents.name',
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
                id: 'field.concepts_omca.legacySeeAlso.name',
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
