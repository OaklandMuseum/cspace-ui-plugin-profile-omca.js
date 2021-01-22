export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:locations_common': {
        locTermGroupList: {
          locTermGroup: {
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
        locationType: {
          [config]: {
            view: {
              props: {
                source: 'omcalocationtype',
              },
            },
          },
        },
      },
    },
  };
};
