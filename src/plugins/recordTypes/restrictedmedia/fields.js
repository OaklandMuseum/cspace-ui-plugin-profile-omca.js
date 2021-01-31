import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    IDGeneratorInput,
    TextInput,
    StructuredDateInput,
    TermPickerInput,
    URLInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  const {
    validateNotInUse,
  } = configContext.validationHelpers;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:restrictedmedia_common');

          return Immutable.fromJS({
            'ns2:restrictedmedia_omca': {
              sortableIdentificationNumber: computeSortableIDNumber(
                commonData.get('identificationNumber'),
              ),
            },
          });
        },
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:restrictedmedia_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:restrictedmedia_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/restrictedmedia',
          },
        },
        identificationNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              inUse: {
                id: 'field.restrictedmedia_common.identificationNumber.inUse',
                defaultMessage: 'The identification number {value} is in use by another record. Please enter a different value.',
              },
              name: {
                id: 'field.restrictedmedia_common.identificationNumber.name',
                defaultMessage: 'Identification number',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            validate: (validationContext) => validateNotInUse({
              configContext,
              validationContext,
              fieldName: 'restrictedmedia_common:identificationNumber',
            }),
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'restrictedmedia',
              },
            },
          },
        },
        title: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.title.name',
                defaultMessage: 'Title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        externalUrl: {
          [config]: {
            // FIXME: Computed fields should recalculate when subrecord fields are committed.
            compute: ({ subrecordData }) => {
              const blobData = subrecordData.get('blob');

              if (blobData) {
                const file = blobData.getIn(['document', 'ns2:blobs_common', 'file']);

                if (typeof file === 'string') {
                  return file;
                }
              }

              return undefined;
            },
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.externalUrl.name',
                defaultMessage: 'External URL',
              },
            }),
            view: {
              type: URLInput,
            },
          },
        },
        ...extensions.dimension.fields,
        contributor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.contributor.name',
                defaultMessage: 'Contributor',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
        creator: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.creator.name',
                defaultMessage: 'Creator',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
        languageList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          language: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.language.name',
                  defaultMessage: 'Language',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
        },
        publisher: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.publisher.name',
                defaultMessage: 'Publisher',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
        relationList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          relation: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.relation.name',
                  defaultMessage: 'Relation',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        copyrightStatement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.copyrightStatement.name',
                defaultMessage: 'Copyright statement',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        typeList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          type: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.type.name',
                  defaultMessage: 'Type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'mediaType',
                },
              },
            },
          },
        },
        coverage: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.coverage.name',
                defaultMessage: 'Coverage',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        dateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          dateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.dateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              repeating: true,
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
        },
        source: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.source.name',
                defaultMessage: 'Source',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
                height: 40,
              },
            },
          },
        },
        subjectList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          subject: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.subject.name',
                  defaultMessage: 'Subject',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        rightsHolder: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.rightsHolder.name',
                defaultMessage: 'Rights holder',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
        description: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_common.description.name',
                defaultMessage: 'Description',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        publishToList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publishTo: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.restrictedmedia_common.publishTo.name',
                  defaultMessage: 'Publish to',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'publishto',
                },
              },
            },
          },
        },
      },
      'ns2:restrictedmedia_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/restrictedmedia/local/omca',
          },
        },
        originalFileName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.restrictedmedia_omca.originalFileName.name',
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
                id: 'field.restrictedmedia_omca.isPrimary.name',
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
                id: 'field.restrictedmedia_omca.approveForPublic.name',
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
          },
        },
      },
    },
  };
};
