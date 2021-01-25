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
      'ns2:taxon_common': {
        taxonTermGroupList: {
          taxonTermGroup: {
            termType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxontermtype',
                  },
                },
              },
            },
            taxonomicStatus: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxonomicstatus',
                  },
                },
              },
            },
          },
        },
        taxonRank: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'taxonrank',
              },
            },
          },
        },
        taxonCurrency: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'taxoncurrency',
              },
            },
          },
        },
        taxonAuthorGroupList: {
          taxonAuthorGroup: {
            taxonAuthorType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxonauthortype',
                  },
                },
              },
            },
          },
        },
        commonNameGroupList: {
          commonNameGroup: {
            commonName: {
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
      },
      'ns2:taxon_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/taxonomy/local/omca',
          },
        },
        legacyArgusNotes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_omca.legacyArgusNotes.name',
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
                id: 'field.taxon_omca.legacyParents.name',
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
                id: 'field.taxon_omca.legacySeeAlso.name',
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
