import { defineMessages } from 'react-intl';
import { computeSortableIDNumber, transformSortableIDNumberSearch } from '../../../utils';

export default (configContext) => {
  const {
    CheckboxInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:media_common');

          return Immutable.fromJS({
            'ns2:media_omca': {
              sortableIdentificationNumber: computeSortableIDNumber(
                commonData.get('identificationNumber'),
              ),
            },
          });
        },
      },
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            searchCompareField: 'ns2:media_omca/sortableIdentificationNumber',
            view: {
              props: {
                source: 'omcaMedia',
              },
            },
          },
        },
        typeList: {
          type: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'mediaType',
                },
              },
            },
          },
        },
        source: {
          [config]: {
            view: {
              props: {
                multiline: true,
                height: 40,
              },
            },
          },
        },
        ...extensions.dimension.fields,
      },
      'ns2:media_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/omca',
          },
        },
        originalFileName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_omca.originalFileName.name',
                defaultMessage: 'Original file name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        isPrimary: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_omca.isPrimary.name',
                defaultMessage: 'Is primary',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        approveForPublic: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_omca.approveForPublic.name',
                defaultMessage: 'Approve for public',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        sortableIdentificationNumber: {
          [config]: {
            cloneable: false,
            searchTransform: transformSortableIDNumberSearch,
          },
        },
      },
    },
  };
};
