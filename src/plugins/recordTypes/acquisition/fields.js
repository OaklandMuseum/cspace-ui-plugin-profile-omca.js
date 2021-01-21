import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
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

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:acquisitions_common');

          return Immutable.fromJS({
            'ns2:acquisitions_omca': {
              sortableAcquisitionReferenceNumber: computeSortableIDNumber(
                commonData.get('acquisitionReferenceNumber'),
              ),
            },
          });
        },
      },
      'ns2:acquisitions_common': {
        acquisitionReferenceNumber: {
          [config]: {
            view: {
              props: {
                source: 'omcaAccession',
              },
            },
          },
        },
        acquisitionMethod: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'acquisitionmethod',
              },
            },
          },
        },
        acquisitionFundingList: {
          acquisitionFunding: {
            acquisitionFundingSource: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'fundsource',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:acquisitions_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/local/omca',
          },
        },
        sortableAcquisitionReferenceNumber: {
          [config]: {
            cloneable: false,
          },
        },
        acquisitionContactGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionContactGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_omca.acquisitionContactGroup.name',
                  defaultMessage: 'Contact',
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
            contact: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_omca.contact.fullName',
                    defaultMessage: 'Contact name',
                  },
                  name: {
                    id: 'field.acquisitions_omca.contact.name',
                    defaultMessage: 'Name',
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
            contactRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_omca.contactRole.fullName',
                    defaultMessage: 'Contact role',
                  },
                  name: {
                    id: 'field.acquisitions_omca.contactRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'contactrole',
                  },
                },
              },
            },
          },
        },
        sourceContactNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_omca.sourceContactNote.name',
                defaultMessage: 'Source/contact note',
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
        accessionDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_omca.accessionDescription.name',
                defaultMessage: 'Accession description',
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
        anonymous: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_omca.anonymous.name',
                defaultMessage: 'Anonymous',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
    },
  };
};
