import {
  computeSortableIDNumber,
  joinValues,
  transformSortableIDNumberSearch,
} from '../../../utils';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: ({ data }) => {
          const commonData = data.get('ns2:movements_common');

          return Immutable.fromJS({
            'ns2:movements_omca': {
              computedMovementSummary: joinValues(
                [
                  commonData.get('currentLocation'),
                  commonData.get('reasonForMove'),
                ],
                configContext.formatHelpers,
              ),
              sortableMovementReferenceNumber: computeSortableIDNumber(
                commonData.get('movementReferenceNumber'),
              ),
            },
          });
        },
      },
      'ns2:movements_common': {
        movementReferenceNumber: {
          [config]: {
            searchCompareField: 'ns2:movements_omca/sortableMovementReferenceNumber',
            view: {
              props: {
                source: 'omcaLocation,omcaInventory',
              },
            },
          },
        },
        currentLocationFitness: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'currentLocationFitness',
              },
            },
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'reasonformove',
              },
            },
          },
        },
        inventoryActionRequired: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'inventoryActionRequired',
              },
            },
          },
        },
      },
      'ns2:movements_omca': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/omca',
          },
        },
        sortableMovementReferenceNumber: {
          [config]: {
            cloneable: false,
            searchTransform: transformSortableIDNumberSearch,
          },
        },
      },
    },
  };
};
