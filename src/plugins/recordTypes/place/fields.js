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
      'ns2:places_common': {
        placeTermGroupList: {
          placeTermGroup: {
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
            historicalStatus: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'placehistoricalStatus',
                  },
                },
              },
            },
          },
        },
        placeType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'placeType',
              },
            },
          },
        },
        placeSource: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'citation/local',
              },
            },
          },
        },
        vCoordSys: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'vcoordsys',
              },
            },
          },
        },
        vSpatialReferenceSystem: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'vspatialreferencesystem',
              },
            },
          },
        },
        vUnitofMeasure: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'vunitofmeasure',
              },
            },
          },
        },
        placeGeoRefGroupList: {
          placeGeoRefGroup: {
            geodeticDatum: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'geodeticdatum',
                  },
                },
              },
            },
            geoRefProtocol: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'georefprotocol',
                  },
                },
              },
            },
            geoRefVerificationStatus: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'georefverificationstatus',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:places_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/local/omca',
          },
        },
        legacyArgusNotes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_omca.legacyArgusNotes.name',
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
                id: 'field.places_omca.legacyParents.name',
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
                id: 'field.places_omca.legacySeeAlso.name',
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
