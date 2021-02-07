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
          const commonData = data.get('ns2:loansin_common');

          return Immutable.fromJS({
            'ns2:loansin_omca': {
              sortableLoanInNumber: computeSortableIDNumber(
                commonData.get('loanInNumber'),
              ),
            },
          });
        },
      },
      'ns2:loansin_common': {
        loanInNumber: {
          [config]: {
            searchCompareField: 'ns2:loansin_omca/sortableLoanInNumber',
            view: {
              props: {
                source: 'omcaLoanin,omcaCatalogingLoaninAlt',
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
                    source: 'loaninstatus',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:loansin_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanin/local/omca',
          },
        },
        sortableLoanInNumber: {
          [config]: {
            cloneable: false,
            searchTransform: transformSortableIDNumberSearch,
          },
        },
        loaninFeesGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loaninFeesGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansin_omca.loaninFeesGroup.name',
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
            loaninFeesCurrency: {
              [config]: {
                defaultValue: 'urn:cspace:museumca.org:vocabularies:name(currency):item:name(USD)\'US Dollar\'',
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_omca.loaninFeesCurrency.fullName',
                    defaultMessage: 'Loan fee currency',
                  },
                  name: {
                    id: 'field.loansin_omca.loaninFeesCurrency.name',
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
            loaninFeesAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_omca.loaninFeesAmount.fullName',
                    defaultMessage: 'Loan fee amount',
                  },
                  name: {
                    id: 'field.loansin_omca.loaninFeesAmount.name',
                    defaultMessage: 'Amount',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            loaninFeesDatePaid: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.loansin_omca.loaninFeesDatePaid.fullName',
                    defaultMessage: 'Loan fee date paid',
                  },
                  name: {
                    id: 'field.loansin_omca.loaninFeesDatePaid.name',
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
        loaninCourierInfo: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansin_omca.loaninCourierInfo.name',
                defaultMessage: 'Courier required',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        lenderNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_omca.lenderNote.name',
                defaultMessage: 'Lender note',
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
        creditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_omca.creditLine.name',
                defaultMessage: 'Credit line',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        anonymous: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansin_omca.anonymous.name',
                defaultMessage: 'Anonymous',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        loaninInsuranceInsurers: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          loaninInsuranceInsurer: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansin_omca.loaninInsuranceInsurer.name',
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
        loaninInsurancePolicyNumber: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_omca.loaninInsurancePolicyNumber.fullName',
                defaultMessage: 'Insurance policy number',
              },
              name: {
                id: 'field.loansin_omca.loaninInsurancePolicyNumber.name',
                defaultMessage: 'Policy number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        loaninInsuranceRenewalDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_omca.loaninInsuranceRenewalDate.fullName',
                defaultMessage: 'Insurance renewal date',
              },
              name: {
                id: 'field.loansin_omca.loaninInsuranceRenewalDate.name',
                defaultMessage: 'Renewal date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        loaninInsuranceReferenceNumber: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_omca.loaninInsuranceReferenceNumber.fullName',
                defaultMessage: 'Insurance reference number',
              },
              name: {
                id: 'field.loansin_omca.loaninInsuranceReferenceNumber.name',
                defaultMessage: 'Reference number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        loaninInsuranceNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_omca.loaninInsuranceNote.fullName',
                defaultMessage: 'Insurance Note',
              },
              name: {
                id: 'field.loansin_omca.loaninInsuranceNote.name',
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
