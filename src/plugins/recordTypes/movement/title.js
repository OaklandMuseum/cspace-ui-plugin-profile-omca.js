export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'movements_common');

  if (!common) {
    return '';
  }

  const movementReferenceNumber = common.get('movementReferenceNumber');
  const currentLocation = getDisplayName(common.get('currentLocation'));
  const reasonForMove = getDisplayName(common.get('reasonForMove'));

  return (
    [movementReferenceNumber, currentLocation, reasonForMove]
      .filter((part) => !!part).join(' – ')
  );
};
