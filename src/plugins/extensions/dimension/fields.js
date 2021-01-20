import { computeDimensionSummary } from './utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    measuredPartGroupList: {
      measuredPartGroup: {
        [config]: {
          compute: (args) => computeDimensionSummary(args, configContext.formatHelpers),
        },
        measuredPart: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'measuredpart',
              },
            },
          },
        },
        dimensionSummary: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        dimensionSubGroupList: {
          dimensionSubGroup: {
            // The OMCA 4.3 config had tried to change this to a dynamic term list, but ran into a
            // bug where the terms wouldn't load. This is now fixed, but I'm keeping the change
            // commented out, since it will require a data update when it is enabled.
            // dimension: {
            //   [config]: {
            //     view: {
            //       type: TermPickerInput,
            //       props: {
            //         source: 'measureddimension',
            //       },
            //     },
            //   },
            // },
            measurementMethod: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'measurementmethod',
                  },
                },
              },
            },
            measurementUnit: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'measurementUnit',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
