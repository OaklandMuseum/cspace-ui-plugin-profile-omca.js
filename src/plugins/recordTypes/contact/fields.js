import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:contacts_common': {
        emailGroupList: {
          emailGroup: {
            emailType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'emailtype',
                  },
                },
              },
            },
          },
        },
        telephoneNumberGroupList: {
          telephoneNumberGroup: {
            telephoneNumberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'telephonenumbertype',
                  },
                },
              },
            },
          },
        },
        faxNumberGroupList: {
          faxNumberGroup: {
            faxNumberType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'faxnumbertype',
                  },
                },
              },
            },
          },
        },
        webAddressGroupList: {
          webAddressGroup: {
            webAddressType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'webaddresstype',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:contacts_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/contact/local/omca',
          },
        },
        addressGroupOMCAList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          addressGroupOMCA: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.contacts_omca.addressGroupOMCA.name',
                  defaultMessage: 'Address',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            addressTypeOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressTypeOMCA.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'addresstype',
                  },
                },
              },
            },
            addressPlace1OMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressPlace1OMCA.name',
                    defaultMessage: 'Line 1',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            addressPlace2OMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressPlace2OMCA.name',
                    defaultMessage: 'Line 2',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            addressMunicipalityOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressMunicipalityOMCA.name',
                    defaultMessage: 'Municipality',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            addressStateOrProvinceOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressStateOrProvinceOMCA.name',
                    defaultMessage: 'State/province',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    // Suppress Chrome autofill
                    autoComplete: 'cspace-state',
                  },
                },
              },
            },
            addressPostCodeOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressPostCodeOMCA.name',
                    defaultMessage: 'Postal code',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    // Suppress Chrome autofill
                    autoComplete: 'cspace-postcode',
                  },
                },
              },
            },
            addressCountryOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressCountryOMCA.name',
                    defaultMessage: 'Country',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    // Suppress Chrome autofill
                    autoComplete: 'cspace-country',
                    source: 'addresscountry',
                  },
                },
              },
            },
            addressNoteOMCA: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.contacts_omca.addressNoteOMCA.name',
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
