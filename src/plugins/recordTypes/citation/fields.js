import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:citations_common': {
        citationTermGroupList: {
          citationTermGroup: {
            termType: {
              [config]: {
                view: {
                  props: {
                    source: 'termtype',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:citations_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/citation/local/omca',
          },
        },
        publicationType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.citations_omca.publicationType.name',
                defaultMessage: 'Publication type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'publicationtype',
              },
            },
          },
        },
      },
    },
  };
};
