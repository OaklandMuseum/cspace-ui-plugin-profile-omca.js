import { defineMessages } from 'react-intl';
import { computeSortableIDNumber, transformSortableIDNumberSearch } from '../../../utils';

export default (configContext) => {
  const {
    CheckboxInput,
    CompoundInput,
    DateInput,
    TextInput,
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:loansout_common');

          return Immutable.fromJS({
            'ns2:loansout_omca': {
              sortableLoanOutNumber: computeSortableIDNumber(
                commonData.get('loanOutNumber'),
              ),
            },
          });
        },
      },
      'ns2:loansout_common': {
        loanOutNumber: {
          [config]: {
            searchCompareField: 'ns2:loansout_omca/sortableLoanOutNumber',
            view: {
              props: {
                source: 'omcaLoanout',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'loanpurpose',
              },
            },
          },
        },
        loanStatusGroupList: {
          loanStatusGroup: {
            loanStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'omcaloanoutstatus',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:loansout_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/omca',
          },
        },
        sortableLoanOutNumber: {
          [config]: {
            cloneable: false,
            searchTransform: transformSortableIDNumberSearch,
          },
        },
        loanoutExhibitionTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_omca.loanoutExhibitionTitle.name',
                defaultMessage: 'Exhibition title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        loanoutVenuesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loanoutVenuesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_omca.loanoutVenuesGroup.name',
                  defaultMessage: 'Venue',
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
            loanoutVenue: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutVenue.fullName',
                    defaultMessage: 'Venue name',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutVenue.name',
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
            loanoutVenueOpeningDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutVenueOpeningDate.fullName',
                    defaultMessage: 'Venue opening date',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutVenueOpeningDate.name',
                    defaultMessage: 'Opening date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            loanoutVenueClosingDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutVenueClosingDate.fullName',
                    defaultMessage: 'Venue closing date',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutVenueClosingDate.name',
                    defaultMessage: 'Closing date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        loanoutFeesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loanoutFeesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_omca.loanoutFeesGroup.name',
                  defaultMessage: 'Loan fees',
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
            loanoutFeesCurrency: {
              [config]: {
                defaultValue: 'urn:cspace:museumca.org:vocabularies:name(currency):item:name(USD)\'US Dollar\'',
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutFeesCurrency.fullName',
                    defaultMessage: 'Loan fee currency',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutFeesCurrency.name',
                    defaultMessage: 'Currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            loanoutFeesAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutFeesAmount.fullName',
                    defaultMessage: 'Loan fee amount',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutFeesAmount.name',
                    defaultMessage: 'Amount',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            loanoutFeesDatePaid: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansout_omca.loanoutFeesDatePaid.fullName',
                    defaultMessage: 'Loan fee date paid',
                  },
                  name: {
                    id: 'field.loansout_omca.loanoutFeesDatePaid.name',
                    defaultMessage: 'Date paid',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        loanoutCourierInfo: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_omca.loanoutCourierInfo.name',
                defaultMessage: 'Courier required',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        loanoutInsuranceInsurers: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loanoutInsuranceInsurer: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_omca.loanoutInsuranceInsurer.name',
                  defaultMessage: 'Insurer',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },
          },
        },
        loanoutInsurancePolicyNumber: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_omca.loanoutInsurancePolicyNumber.fullName',
                defaultMessage: 'Insurance policy number',
              },
              name: {
                id: 'field.loansout_omca.loanoutInsurancePolicyNumber.name',
                defaultMessage: 'Policy number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        loanoutInsuranceRenewalDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_omca.loanoutInsuranceRenewalDate.fullName',
                defaultMessage: 'Insurance renewal date',
              },
              name: {
                id: 'field.loansout_omca.loanoutInsuranceRenewalDate.name',
                defaultMessage: 'Renewal date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        loanoutInsuranceReferenceNumber: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_omca.loanoutInsuranceReferenceNumber.fullName',
                defaultMessage: 'Insurance reference number',
              },
              name: {
                id: 'field.loansout_omca.loanoutInsuranceReferenceNumber.name',
                defaultMessage: 'Reference number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        loanoutInsuranceNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansout_omca.loanoutInsuranceNote.fullName',
                defaultMessage: 'Insurance Note',
              },
              name: {
                id: 'field.loansout_omca.loanoutInsuranceNote.name',
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
  };
};
