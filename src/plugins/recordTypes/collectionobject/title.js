export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');
  const omca = getPart(data, 'collectionobjects_omca');

  const objectNumber = common && common.get('objectNumber');
  const computedCatalogingSummary = omca && omca.get('computedCatalogingSummary');

  return [objectNumber, computedCatalogingSummary].filter((part) => !!part).join(' – ');
};
