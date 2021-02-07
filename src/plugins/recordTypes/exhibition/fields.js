import { defineMessages } from 'react-intl';
import { computeSortableIDNumber, transformSortableIDNumberSearch } from '../../../utils';

export default (configContext) => {
  const {
    CheckboxInput,
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:exhibitions_common');

          return Immutable.fromJS({
            'ns2:exhibitions_omca': {
              sortableExhibitionNumber: computeSortableIDNumber(
                commonData.get('exhibitionNumber'),
              ),
            },
          });
        },
      },
      'ns2:exhibitions_common': {
        exhibitionNumber: {
          [config]: {
            searchCompareField: 'ns2:exhibitions_omca/sortableExhibitionNumber',
            view: {
              props: {
                source: 'omcaExhibition',
              },
            },
          },
        },
        type: {
          [config]: {
            view: {
              props: {
                source: 'omcaexhibitiontype',
              },
            },
          },
        },
      },
      'ns2:exhibitions_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/exhibition/local/omca',
          },
        },
        projectNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.exhibitions_omca.projectNumber.name',
                defaultMessage: 'Project number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sortableExhibitionNumber: {
          [config]: {
            cloneable: false,
            searchTransform: transformSortableIDNumberSearch,
          },
        },
        exhibitionSectionOMCAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionSectionOMCAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_omca.exhibitionSectionOMCAGroup.name',
                  defaultMessage: 'Exhibition section',
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
            exhibitionSectionNameOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionSectionNameOMCA.fullName',
                    defaultMessage: 'Exhibition sections',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionSectionNameOMCA.name',
                    defaultMessage: 'Section',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSubsectionNameOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionSubsectionNameOMCA.fullName',
                    defaultMessage: 'Exhibition subsection',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionSubsectionNameOMCA.name',
                    defaultMessage: 'Subsection',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionLocationOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionSectionLocationOMCA.fullName',
                    defaultMessage: 'Exhibition component',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionSectionLocationOMCA.name',
                    defaultMessage: 'Component',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionObjectsOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionSectionObjectsOMCA.fullName',
                    defaultMessage: 'Exhibition element',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionSectionObjectsOMCA.name',
                    defaultMessage: 'Element',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionNoteOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionSectionNoteOMCA.fullName',
                    defaultMessage: 'Exhibition section note',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionSectionNoteOMCA.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        exhibitionObjectOMCAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionObjectOMCAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_omca.exhibitionObjectOMCAGroup.name',
                  defaultMessage: 'Object checklist',
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
            exhibitionObjectNumberOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectNumberOMCA.fullName',
                    defaultMessage: 'Object number',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectNumberOMCA.name',
                    defaultMessage: 'Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectNameOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectNameOMCA.fullName',
                    defaultMessage: 'Object name',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectNameOMCA.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectConsCheckDateOMCA: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectConsCheckDateOMCA.fullName',
                    defaultMessage: 'Object cons. check',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectConsCheckDateOMCA.name',
                    defaultMessage: 'Cons. check',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            exhibitionObjectConsTreatmentOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectConsTreatmentOMCA.fullName',
                    defaultMessage: 'Object cons. treatment',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectConsTreatmentOMCA.name',
                    defaultMessage: 'Cons. treatment',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exhibitionobjectconstreatment',
                  },
                },
              },
            },
            exhibitionDisplayAsGraphicOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionDisplayAsGraphicOMCA.fullName',
                    defaultMessage: 'Object display as graphic?',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionDisplayAsGraphicOMCA.name',
                    defaultMessage: 'Display as graphic?',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exhibitiondisplayasgraphic',
                  },
                },
              },
            },
            exhibitionObjectMountOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectMountOMCA.fullName',
                    defaultMessage: 'Object mount/frame',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectMountOMCA.name',
                    defaultMessage: 'Mount/frame',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exhibitionobjectmount',
                  },
                },
              },
            },
            exhibitionObjectSectionOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectSectionOMCA.fullName',
                    defaultMessage: 'Object section',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectSectionOMCA.name',
                    defaultMessage: 'Section',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectCaseOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectCaseOMCA.fullName',
                    defaultMessage: 'Object subsection',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectCaseOMCA.name',
                    defaultMessage: 'Subsection',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectSeqNumOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectSeqNumOMCA.fullName',
                    defaultMessage: 'Object component',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectSeqNumOMCA.name',
                    defaultMessage: 'Component',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectRotationOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectRotationOMCA.fullName',
                    defaultMessage: 'Object element',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectRotationOMCA.name',
                    defaultMessage: 'Element',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectNoteOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionObjectNoteOMCA.fullName',
                    defaultMessage: 'Object note',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionObjectNoteOMCA.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionCrateExistsOMCA: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_omca.exhibitionCrateExistsOMCA.fullName',
                    defaultMessage: 'Object crate exists?',
                  },
                  name: {
                    id: 'field.exhibitions_omca.exhibitionCrateExistsOMCA.name',
                    defaultMessage: 'Crate exists?',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
