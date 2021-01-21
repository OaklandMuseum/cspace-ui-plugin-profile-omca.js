import { defineMessages } from 'react-intl';
import { computeSortableIDNumber, joinValues } from '../../../utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
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

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:collectionobjects_common');
          const omcaData = data.get('ns2:collectionobjects_omca');

          return Immutable.fromJS({
            'ns2:collectionobjects_omca': {
              computedCatalogingSummary: joinValues(
                [
                  commonData.getIn([
                    'objectNameList',
                    'objectNameGroup',
                    0,
                    'objectName',
                  ]),
                  omcaData.getIn([
                    'determinationHistoryGroupList',
                    'determinationHistoryGroup',
                    0,
                    'dhName',
                  ]),
                  commonData.getIn([
                    'objectProductionPersonGroupList',
                    'objectProductionPersonGroup',
                    0,
                    'objectProductionPerson',
                  ]),
                ],
                configContext.formatHelpers,
              ),
              sortableObjectNumber: computeSortableIDNumber(
                commonData.get('objectNumber'),
              ),
            },
          });
        },
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              props: {
                source: 'omcaCatalogingAccession,omcaCatalogingIntake,omcaCatalogingLoanIn,omcaCatalogingLoanInAlt',
              },
            },
          },
        },
        otherNumberList: {
          otherNumber: {
            numberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'numberType',
                  },
                },
              },
            },
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  readOnly: true,
                  source: 'responsibleDepartment',
                },
              },
            },
          },
        },
        collection: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'collection',
              },
            },
          },
        },
        recordStatus: {
          [config]: {
            defaultValue: 'urn:cspace:museumca.org:vocabularies:name(recordStatus):item:name(new)\'New\'',
            view: {
              type: TermPickerInput,
              props: {
                source: 'recordStatus',
              },
            },
          },
        },
        comments: {
          comment: {
            [config]: {
              view: {
                props: {
                  height: 40,
                },
              },
            },
          },
        },
        titleGroupList: {
          titleGroup: {
            titleType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'titletype',
                  },
                },
              },
            },
          },
        },
        objectNameList: {
          objectNameGroup: {
            objectName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
                  },
                },
              },
            },
            objectNameSystem: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'objectnamesystem',
                  },
                },
              },
            },
          },
        },
        sex: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'sex',
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'phase',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'form',
                },
              },
            },
          },
        },
        colors: {
          color: {
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
        materialGroupList: {
          materialGroup: {
            material: {
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
        objectComponentGroupList: {
          objectComponentGroup: {
            objectComponentName: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'objectcomponentname',
                  },
                },
              },
            },
          },
        },
        technicalAttributeGroupList: {
          technicalAttributeGroup: {
            technicalAttribute: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'technicalattribute',
                  },
                },
              },
            },
            technicalAttributeMeasurement: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'technicalattributemeasurement',
                  },
                },
              },
            },
            technicalAttributeMeasurementUnit: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'technicalattributemeasurementunit',
                  },
                },
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        textualInscriptionGroupList: {
          textualInscriptionGroup: {
            inscriptionContentScript: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptioncontentscript',
                  },
                },
              },
            },
            inscriptionContentType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptioncontenttype',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        assocCulturalContextGroupList: {
          assocCulturalContextGroup: {
            assocCulturalContext: {
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
        assocPlaceGroupList: {
          assocPlaceGroup: {
            assocPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        fieldCollectionMethods: {
          fieldCollectionMethod: {
            [config]: {
              view: {
                props: {
                  source: 'fieldcollectionmethod',
                },
              },
            },
          },
        },
        ...extensions.dimension.fields,
      },
      'ns2:collectionobjects_anthropology': {
        // OMCA has defined a collectionobjects_anthropology schema that differs from the community
        // schema of the same name, so the community anthropology profile plugin
        // (cspace-ui-plugin-profile-anthropology) can not be used. Instead, the UI for the non-
        // standard collectionobjects_anthropology extension fields are configured below.
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/anthropology',
          },
        },
        nagpraInventoryNameList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nagpraInventoryName: {
            [config]: {
              defaultValue: 'notOnAnInventory',
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.nagpraInventoryName.name',
                  defaultMessage: 'NAGPRA inventory',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'nagpraInventories',
                },
              },
            },
          },
        },
        nagpraApplicabilityList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nagpraApplicability: {
            [config]: {
              defaultValue: 'nonNagpra',
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.nagpraApplicability.name',
                  defaultMessage: 'Museum\'s NAGPRA category determination',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'nagpraCategories',
                },
              },
            },
          },
        },
        nagpraCulturalDeterminationList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nagpraCulturalDetermination: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.nagpraCulturalDetermination.name',
                  defaultMessage: 'NAGPRA cultural determination',
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
        repatriationNoteList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          repatriationNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.repatriationNote.name',
                  defaultMessage: 'Repatriation note',
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
        culturalCareNoteList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          culturalCareNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.culturalCareNote.name',
                  defaultMessage: 'Cultural care note',
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
        accessRestrictionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          accessRestrictionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.accessRestrictionGroup.name',
                  defaultMessage: 'Access limitation',
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
            accessRestrictionType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionType.fullName',
                    defaultMessage: 'Access limitation type',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'accessrestrictiontype',
                  },
                },
              },
            },
            accessRestrictionLevel: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.fullName',
                    defaultMessage: 'Access limitation level',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.name',
                    defaultMessage: 'Level',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'accessRestrictionLevels',
                  },
                },
              },
            },
            accessRestrictionDetails: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDetails.fullName',
                    defaultMessage: 'Access limitation detail',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDetails.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            accessRestrictionRequestor: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionRequestor.fullName',
                    defaultMessage: 'Access limitation requestor',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionRequestor.name',
                    defaultMessage: 'Requestor (person)',
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
            accessRestrictionOnBehalfOf: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionOnBehalfOf.fullName',
                    defaultMessage: 'Access limitation requested on behalf of',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionOnBehalfOf.name',
                    defaultMessage: 'On behalf of (org)',
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
            accessRestrictionDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDate.fullName',
                    defaultMessage: 'Access limitation date',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/omca',
          },
        },
        computedCatalogingSummary: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.computedCatalogingSummary.name',
                defaultMessage: 'Computed cataloging summary',
              },
            }),
          },
        },
        argusCount: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusCount.name',
                defaultMessage: 'Argus count',
              },
            }),
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        art: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.art.name',
                defaultMessage: 'Art',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        history: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.history.name',
                defaultMessage: 'History',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        science: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.science.name',
                defaultMessage: 'Science',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        doNotPublishOnWeb: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            defaultValue: true,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.doNotPublishOnWeb.name',
                defaultMessage: 'Do not publish on the web',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        photos: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          photo: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_omca.photo.name',
                  defaultMessage: 'Photo',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  height: 40,
                  multiline: true,
                },
              },
            },
          },
        },
        determinationHistoryGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          determinationHistoryGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_omca.determinationHistoryGroup.name',
                  defaultMessage: 'Determination history',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            dhName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.dhName.fullName',
                    defaultMessage: 'Taxonomic identification scientific name',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.dhName.name',
                    defaultMessage: 'Scientific name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'taxon/local',
                  },
                },
              },
            },
            dhQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.dhQualifier.fullName',
                    defaultMessage: 'Taxonomic identification qualifier',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.dhQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'determinationQualifier',
                  },
                },
              },
            },
            identBy: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.identBy.fullName',
                    defaultMessage: 'Taxonomic identification by',
                  },
                  groupName: {
                    id: 'field.collectionobjects_omca.identBy.groupName',
                    defaultMessage: 'Identification by',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.identBy.name',
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
            identDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.identDate.fullName',
                    defaultMessage: 'Taxonomic identification date',
                  },
                  groupName: {
                    id: 'field.collectionobjects_omca.identDate.groupName',
                    defaultMessage: 'Identification date',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.identDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            institution: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.institution.fullName',
                    defaultMessage: 'Taxonomic identification institution',
                  },
                  groupName: {
                    id: 'field.collectionobjects_omca.institution.groupName',
                    defaultMessage: 'Identification institution',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.institution.name',
                    defaultMessage: 'Institution',
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
            identKind: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.identKind.fullName',
                    defaultMessage: 'Taxonomic identification kind',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.identKind.name',
                    defaultMessage: 'Kind',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'determinationKind',
                  },
                },
              },
            },
            dhReference: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.dhReference.fullName',
                    defaultMessage: 'Taxonomic identification reference source',
                  },
                  groupName: {
                    id: 'field.collectionobjects_omca.dhReference.groupName',
                    defaultMessage: 'Reference source',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.dhReference.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            dhPage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.dhPage.fullName',
                    defaultMessage: 'Taxonomic identification reference page',
                  },
                  groupName: {
                    id: 'field.collectionobjects_omca.dhPage.groupName',
                    defaultMessage: 'Reference page',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.dhPage.name',
                    defaultMessage: 'Page',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            dhNotes: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.dhNotes.fullName',
                    defaultMessage: 'Taxonomic identification note',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.dhNotes.name',
                    defaultMessage: 'Note',
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
          },
        },
        ipAudit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.ipAudit.name',
                defaultMessage: 'IP audit',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'ipaudit',
              },
            },
          },
        },
        copyrightHolder: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.copyrightHolder.name',
                defaultMessage: 'Copyright holder',
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
        argusSubject: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusSubject.name',
                defaultMessage: 'Argus subject',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
                readOnly: true,
              },
            },
          },
        },
        signatureOMCA: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.signatureOMCA.name',
                defaultMessage: 'Signature',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        inscriptionOMCA: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.inscriptionOMCA.name',
                defaultMessage: 'Inscription',
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
        argusDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusDescription.name',
                defaultMessage: 'Material/technique summary',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        argusRemarks: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusRemarks.name',
                defaultMessage: 'Argus remarks',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
                readOnly: true,
              },
            },
          },
        },
        accessory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.accessory.name',
                defaultMessage: 'Accessory',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        argusMade: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusMade.name',
                defaultMessage: 'Argus made',
              },
            }),
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        argusFoundAndUsed: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_omca.argusFoundAndUsed.name',
                defaultMessage: 'Argus found and used',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
                readOnly: true,
              },
            },
          },
        },
        exhibitionHistories: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionHistory: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_omca.exhibitionHistory.name',
                  defaultMessage: 'Exhibition history',
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
        previousOwnersGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          previousOwnersGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_omca.previousOwnersGroup.name',
                  defaultMessage: 'Previous owner',
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
            previousOwner: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.previousOwner.fullName',
                    defaultMessage: 'Previous owner name',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.previousOwner.name',
                    defaultMessage: 'Name',
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
            provenanceInformation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.provenanceInformation.fullName',
                    defaultMessage: 'Previous owner provenance information',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.provenanceInformation.name',
                    defaultMessage: 'Provenance information',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        viewerContributionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          viewerContributionGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            viewerName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_omca.viewerName.name',
                    defaultMessage: 'Viewer\'s name',
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
            viewerRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_omca.viewerRole.name',
                    defaultMessage: 'Viewer\'s role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'viewersrole',
                  },
                },
              },
            },
            viewerContribution: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_omca.viewerContribution.name',
                    defaultMessage: 'Viewer\'s contribution',
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
            viewerContributionDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.viewerContributionDate.fullName',
                    defaultMessage: 'Viewer\'s contribution date of completion',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.viewerContributionDate.name',
                    defaultMessage: 'Date of completion',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            viewerReferences: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              viewerReference: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.collectionobjects_omca.viewerReference.name',
                      defaultMessage: 'Viewer\'s reference',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: TextInput,
                  },
                },
              },
            },
            viewerContributionNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_omca.viewerContributionNote.fullName',
                    defaultMessage: 'Viewer\'s contribution note',
                  },
                  name: {
                    id: 'field.collectionobjects_omca.viewerContributionNote.name',
                    defaultMessage: 'Note',
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
          },
        },
      },
    },
  };
};
