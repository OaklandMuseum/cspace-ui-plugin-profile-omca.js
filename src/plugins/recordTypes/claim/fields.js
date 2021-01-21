import { defineMessages } from 'react-intl';
import { computeSortableIDNumber } from '../../../utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:claims_common');

          return Immutable.fromJS({
            'ns2:claims_omca': {
              sortableClaimNumber: computeSortableIDNumber(
                commonData.get('claimNumber'),
              ),
            },
          });
        },
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:claims_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:claims_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim',
          },
        },
        claimNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.claims_common.claimNumber.name',
                defaultMessage: 'Reference number',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'omcaClaim',
              },
            },
          },
        },
        claimName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_common.claimName.name',
                defaultMessage: 'Claim name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        altClaimNamesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          altClaimNamesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.altClaimNamesGroup.name',
                  defaultMessage: 'Alternate claim name/number',
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
            altClaimName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.altClaimName.fullName',
                    defaultMessage: 'Alternate claim name/number',
                  },
                  name: {
                    id: 'field.claims_common.altClaimName.name',
                    defaultMessage: 'Name/number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            altClaimNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.altClaimNote.fullName',
                    defaultMessage: 'Alternate claim name/number note',
                  },
                  name: {
                    id: 'field.claims_common.altClaimNote.name',
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
        // claimClaimantGroupList: {
        //   [config]: {
        //     view: {
        //       type: CompoundInput,
        //     },
        //   },
        //   claimClaimantGroup: {
        //     [config]: {
        //       messages: defineMessages({
        //         name: {
        //           id: 'field.claims_common.claimClaimantGroup.name',
        //           defaultMessage: 'Claimant',
        //         },
        //       }),
        //       repeating: true,
        //       view: {
        //         type: CompoundInput,
        //         props: {
        //           tabular: true,
        //         },
        //       },
        //     },
        //     filedBy: {
        //       [config]: {
        //         messages: defineMessages({
        //           fullName: {
        //             id: 'field.claims_common.filedBy.fullName',
        //             defaultMessage: 'Claim filed by',
        //           },
        //           name: {
        //             id: 'field.claims_common.filedBy.name',
        //             defaultMessage: 'Filed by',
        //           },
        //         }),
        //         view: {
        //           type: AutocompleteInput,
        //           props: {
        //             source: 'person/local,person/shared,organization/local,organization/shared',
        //           },
        //         },
        //       },
        //     },
        //     filedOnBehalfOf: {
        //       [config]: {
        //         messages: defineMessages({
        //           fullName: {
        //             id: 'field.claims_common.filedOnBehalfOf.fullName',
        //             defaultMessage: 'Claim filed on behalf of',
        //           },
        //           name: {
        //             id: 'field.claims_common.filedOnBehalfOf.name',
        //             defaultMessage: 'On behalf of',
        //           },
        //         }),
        //         view: {
        //           type: AutocompleteInput,
        //           props: {
        //             source: 'person/local,person/shared,organization/local,organization/shared',
        //           },
        //         },
        //       },
        //     },
        //     claimantNote: {
        //       [config]: {
        //         messages: defineMessages({
        //           fullName: {
        //             id: 'field.claims_common.claimantNote.fullName',
        //             defaultMessage: 'Claimant note',
        //           },
        //           name: {
        //             id: 'field.claims_common.claimantNote.name',
        //             defaultMessage: 'Note',
        //           },
        //         }),
        //         view: {
        //           type: TextInput,
        //         },
        //       },
        //     },
        //   },
        // },
        claimTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimType.name',
                  defaultMessage: 'Claim type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'claimtype',
                },
              },
            },
          },
        },
        claimFiledDatesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimFiledDatesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimFiledDatesGroup.name',
                  defaultMessage: 'Date claim filed',
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
            claimFiledDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimFiledDate.fullName',
                    defaultMessage: 'Date claim filed',
                  },
                  name: {
                    id: 'field.claims_common.claimFiledDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            claimFiledNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimFiledNote.fullName',
                    defaultMessage: 'Date claim filed note',
                  },
                  name: {
                    id: 'field.claims_common.claimFiledNote.name',
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
        claimNotes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimNote.name',
                  defaultMessage: 'Notes on claim',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        sitesInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sitesInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.sitesInvolvedGroup.name',
                  defaultMessage: 'Inventory/summary involved',
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
            siteOrPlaceName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.siteOrPlaceName.fullName',
                    defaultMessage: 'Inventory/summary involved',
                  },
                  name: {
                    id: 'field.claims_common.siteOrPlaceName.name',
                    defaultMessage: 'Inventory/summary',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            siteOrPlaceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.siteOrPlaceNote.fullName',
                    defaultMessage: 'Inventory/summary involved note',
                  },
                  name: {
                    id: 'field.claims_common.siteOrPlaceNote.name',
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
        culturalGroupsInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          culturalGroupsInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.culturalGroupsInvolvedGroup.name',
                  defaultMessage: 'Cultural group involved',
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
            culturalGroupName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.culturalGroupName.fullName',
                    defaultMessage: 'Cultural group involved name',
                  },
                  name: {
                    id: 'field.claims_common.culturalGroupName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local',
                  },
                },
              },
            },
            culturalGroupNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.culturalGroupNote.fullName',
                    defaultMessage: 'Cultural group involved note',
                  },
                  name: {
                    id: 'field.claims_common.culturalGroupNote.name',
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
        timePeriodsRepresentedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          timePeriodsRepresentedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.timePeriodsRepresentedGroup.name',
                  defaultMessage: 'Time period represented',
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
            periodOrDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.periodOrDateGroup.fullName',
                    defaultMessage: 'Time period represented date',
                  },
                  groupName: {
                    id: 'field.claims_common.periodOrDateGroup.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.claims_common.periodOrDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            periodOrDateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.periodOrDateNote.fullName',
                    defaultMessage: 'Time period represented note',
                  },
                  name: {
                    id: 'field.claims_common.periodOrDateNote.name',
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
        initialResponseDatesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          initialResponseDatesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.initialResponseDatesGroup.name',
                  defaultMessage: 'Date of claim',
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
            initialResponseDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.initialResponseDate.fullName',
                    defaultMessage: 'Date of claim',
                  },
                  name: {
                    id: 'field.claims_common.initialResponseDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            initialResponseDateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.initialResponseDateNote.fullName',
                    defaultMessage: 'Date of claim note',
                  },
                  name: {
                    id: 'field.claims_common.initialResponseDateNote.name',
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
        sentNAGPRACommitteeDatesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentNAGPRACommitteeDatesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.sentNAGPRACommitteeDatesGroup.name',
                  defaultMessage: 'Date sent to NAGPRA committee',
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
            sentNAGPRACommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.sentNAGPRACommitteeDate.fullName',
                    defaultMessage: 'Date sent to NAGPRA committee',
                  },
                  name: {
                    id: 'field.claims_common.sentNAGPRACommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentNAGPRACommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.sentNAGPRACommitteeNote.fullName',
                    defaultMessage: 'Date sent to NAGPRA committee note',
                  },
                  name: {
                    id: 'field.claims_common.sentNAGPRACommitteeNote.name',
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
        recommendationsNAGPRACommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationsNAGPRACommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.recommendationsNAGPRACommitteeGroup.name',
                  defaultMessage: 'Recommendation of NAGPRA committee',
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
            recommendationNAGPRACommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.recommendationNAGPRACommitteeDate.fullName',
                    defaultMessage: 'Recommendation of NAGPRA committee date',
                  },
                  name: {
                    id: 'field.claims_common.recommendationNAGPRACommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationNAGPRACommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.recommendationNAGPRACommitteeNote.fullName',
                    defaultMessage: 'Recommendation of NAGPRA committee',
                  },
                  name: {
                    id: 'field.claims_common.recommendationNAGPRACommitteeNote.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentNationalNAGPRADatesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentNationalNAGPRADatesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.sentNationalNAGPRADatesGroup.name',
                  defaultMessage: 'Date sent to National NAGPRA',
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
            sentNationalNAGPRADate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.sentNationalNAGPRADate.fullName',
                    defaultMessage: 'Date sent to National NAGPRA',
                  },
                  name: {
                    id: 'field.claims_common.sentNationalNAGPRADate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentNationalNAGPRANote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.sentNationalNAGPRANote.fullName',
                    defaultMessage: 'Date sent to National NAGPRA note',
                  },
                  name: {
                    id: 'field.claims_common.sentNationalNAGPRANote.name',
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
        responsesNationalNAGPRAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          responsesNationalNAGPRAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.responsesNationalNAGPRAGroup.name',
                  defaultMessage: 'Response from National NAGPRA',
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
            responseNationalNAGPRADate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.responseNationalNAGPRADate.fullName',
                    defaultMessage: 'Response from National NAGPRA date',
                  },
                  name: {
                    id: 'field.claims_common.responseNationalNAGPRADate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            responseNationalNAGPRANote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.responseNationalNAGPRANote.fullName',
                    defaultMessage: 'Response from National NAGPRA',
                  },
                  name: {
                    id: 'field.claims_common.responseNationalNAGPRANote.name',
                    defaultMessage: 'Response',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        publicationsNationalNAGPRAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicationsNationalNAGPRAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.publicationsNationalNAGPRAGroup.name',
                  defaultMessage: 'Publication from national NAGPRA',
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
            publicationNationalNAGPRADate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.publicationNationalNAGPRADate.fullName',
                    defaultMessage: 'Publication from national NAGPRA date',
                  },
                  name: {
                    id: 'field.claims_common.publicationNationalNAGPRADate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            publicationNationalNAGPRANote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.publicationNationalNAGPRANote.fullName',
                    defaultMessage: 'Publication from national NAGPRA note',
                  },
                  name: {
                    id: 'field.claims_common.publicationNationalNAGPRANote.name',
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
        nationalNAGPRA30DayNoticesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nationalNAGPRA30DayNoticesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.nationalNAGPRA30DayNoticesGroup.name',
                  defaultMessage: 'Start and end dates for national NAGPRA\'s 30-day notice',
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
            nationalNAGPRA30DayNoticeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeDate.fullName',
                    defaultMessage: 'National NAGPRA 30-day notice date',
                  },
                  name: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            nationalNAGPRA30DayNoticeType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeType.fullName',
                    defaultMessage: 'National NAGPRA 30-day notice date type',
                  },
                  name: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'nagpraNoticeDateTypes',
                  },
                },
              },
            },
            nationalNAGPRA30DayNoticeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeNote.fullName',
                    defaultMessage: 'National NAGPRA 30-day notice note',
                  },
                  name: {
                    id: 'field.claims_common.nationalNAGPRA30DayNoticeNote.name',
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
        transferDatesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          transferDatesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.transferDatesGroup.name',
                  defaultMessage: 'Date of transfer',
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
            transferDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.transferDate.fullName',
                    defaultMessage: 'Date of transfer',
                  },
                  name: {
                    id: 'field.claims_common.transferDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            transferNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.transferNote.fullName',
                    defaultMessage: 'Date of transfer note',
                  },
                  name: {
                    id: 'field.claims_common.transferNote.name',
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
      },
      'ns2:claims_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim/local/omca',
          },
        },
        claimClaimantOMCAGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimClaimantOMCAGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.claimClaimantOMCAGroup.name',
                  defaultMessage: 'Requester/Claimant',
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
            filedByOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.filedByOMCA.fullName',
                    defaultMessage: 'Request/claim filed by',
                  },
                  name: {
                    id: 'field.claims_omca.filedByOMCA.name',
                    defaultMessage: 'Filed by',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            filedOnBehalfOfOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.filedOnBehalfOfOMCA.fullName',
                    defaultMessage: 'Request/claim filed on behalf of',
                  },
                  name: {
                    id: 'field.claims_omca.filedOnBehalfOfOMCA.name',
                    defaultMessage: 'On behalf of',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            claimantNoteOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.claimantNoteOMCA.fullName',
                    defaultMessage: 'Requester/claimant note',
                  },
                  name: {
                    id: 'field.claims_omca.claimantNoteOMCA.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            federallyRecognizedOMCA: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.federallyRecognizedOMCA.fullName',
                    defaultMessage: 'Requester/claimant federally recognized?',
                  },
                  name: {
                    id: 'field.claims_omca.federallyRecognizedOMCA.name',
                    defaultMessage: 'Federally recognized?',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'federallyrecognized',
                  },
                },
              },
            },
          },
        },
        transactionType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_omca.transactionType.name',
                defaultMessage: 'Transaction type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'transactiontype',
              },
            },
          },
        },
        requestsGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          requestsGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.requestsGroup.name',
                  defaultMessage: 'Requests',
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
            detailsOfRequest: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.detailsOfRequest.fullName',
                    defaultMessage: 'Request detail',
                  },
                  name: {
                    id: 'field.claims_omca.detailsOfRequest.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            dateOfRequest: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.dateOfRequest.fullName',
                    defaultMessage: 'Request date',
                  },
                  name: {
                    id: 'field.claims_omca.dateOfRequest.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            dateFulfilled: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.dateFulfilled.fullName',
                    defaultMessage: 'Request date fulfilled',
                  },
                  name: {
                    id: 'field.claims_omca.dateFulfilled.name',
                    defaultMessage: 'Date fulfilled',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        notesOnRequest: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          noteOnRequest: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.noteOnRequest.name',
                  defaultMessage: 'Notes on requests',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        claimNumberOMCA: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_omca.claimNumberOMCA.name',
                defaultMessage: 'Claim number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sortableClaimNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_omca.sortableClaimNumber.name',
                defaultMessage: 'Sortable claim number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        deaccessionResearchCompleteGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          deaccessionResearchCompleteGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.deaccessionResearchCompleteGroup.name',
                  defaultMessage: 'Date deaccession research complete',
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
            deaccessionResearchCompleteDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.deaccessionResearchCompleteDate.fullName',
                    defaultMessage: 'Date deaccession research complete',
                  },
                  name: {
                    id: 'field.claims_omca.deaccessionResearchCompleteDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            deaccessionResearchCompleteNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.deaccessionResearchCompleteNote.fullName',
                    defaultMessage: 'Date deaccession research complete note',
                  },
                  name: {
                    id: 'field.claims_omca.deaccessionResearchCompleteNote.name',
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
        sentCollectionsCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentCollectionsCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.sentCollectionsCommitteeGroup.name',
                  defaultMessage: 'Date sent to collections committee',
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
            sentCollectionsCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentCollectionsCommitteeDate.fullName',
                    defaultMessage: 'Date sent to collections committee',
                  },
                  name: {
                    id: 'field.claims_omca.sentCollectionsCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentCollectionsCommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentCollectionsCommitteeNote.fullName',
                    defaultMessage: 'Date sent to collections committee note',
                  },
                  name: {
                    id: 'field.claims_omca.sentCollectionsCommitteeNote.name',
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
        recommendationCollectionsCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationCollectionsCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.recommendationCollectionsCommitteeGroup.name',
                  defaultMessage: 'Recommendation of collections committee',
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
            recommendationCollectionsCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationCollectionsCommitteeDate.fullName',
                    defaultMessage: 'Recommendation of collections committee date',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationCollectionsCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationCollectionsCommitteeRecommendation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationCollectionsCommitteeRecommendation.fullName',
                    defaultMessage: 'Recommendation of collections committee',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationCollectionsCommitteeRecommendation.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentExecutiveTeamGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentExecutiveTeamGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.sentExecutiveTeamGroup.name',
                  defaultMessage: 'Date sent to executive team/ED',
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
            sentExecutiveTeamDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentExecutiveTeamDate.fullName',
                    defaultMessage: 'Date sent to executive team/ED',
                  },
                  name: {
                    id: 'field.claims_omca.sentExecutiveTeamDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentExecutiveTeamNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentExecutiveTeamNote.fullName',
                    defaultMessage: 'Date sent to executive team/ED note',
                  },
                  name: {
                    id: 'field.claims_omca.sentExecutiveTeamNote.name',
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
        recommendationExecutiveTeamGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationExecutiveTeamGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.recommendationExecutiveTeamGroup.name',
                  defaultMessage: 'Recommendation of executive team/ED',
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
            recommendationExecutiveTeamDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationExecutiveTeamDate.fullName',
                    defaultMessage: 'Recommendation of executive team/ED date',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationExecutiveTeamDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationExecutiveTeamRecommendation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationExecutiveTeamRecommendation.fullName',
                    defaultMessage: 'Recommendation of executive team/ED',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationExecutiveTeamRecommendation.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentOMCABoardGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentOMCABoardGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.sentOMCABoardGroup.name',
                  defaultMessage: 'Date sent to OMCA board',
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
            sentOMCABoardDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentOMCABoardDate.fullName',
                    defaultMessage: 'Date sent to OMCA board',
                  },
                  name: {
                    id: 'field.claims_omca.sentOMCABoardDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentOMCABoardNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.sentOMCABoardNote.fullName',
                    defaultMessage: 'Date sent to OMCA board note',
                  },
                  name: {
                    id: 'field.claims_omca.sentOMCABoardNote.name',
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
        recommendationOMCABoardGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationOMCABoardGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.recommendationOMCABoardGroup.name',
                  defaultMessage: 'Recommendation of OMCA board',
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
            recommendationOMCABoardDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationOMCABoardDate.fullName',
                    defaultMessage: 'Recommendation of OMCA board date',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationOMCABoardDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationOMCABoardRecommendation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.recommendationOMCABoardRecommendation.fullName',
                    defaultMessage: 'Recommendation of OMCA board',
                  },
                  name: {
                    id: 'field.claims_omca.recommendationOMCABoardRecommendation.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimantNotifiedClaimStatusGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimantNotifiedClaimStatusGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.claimantNotifiedClaimStatusGroup.name',
                  defaultMessage: 'Date claimant notified of claim status',
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
            claimantNotifiedClaimStatusDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.claimantNotifiedClaimStatusDate.fullName',
                    defaultMessage: 'Date claimant notified of claim status',
                  },
                  name: {
                    id: 'field.claims_omca.claimantNotifiedClaimStatusDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            claimantNotifiedClaimStatusNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_omca.claimantNotifiedClaimStatusNote.fullName',
                    defaultMessage: 'Date claimant notified of claim status note',
                  },
                  name: {
                    id: 'field.claims_omca.claimantNotifiedClaimStatusNote.name',
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
        claimProcessNotes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimProcessNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_omca.claimProcessNote.name',
                  defaultMessage: 'Notes on claim process',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
    },
  };
};
