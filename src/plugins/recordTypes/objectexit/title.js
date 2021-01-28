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

  const common = getPart(data, 'objectexit_common');

  if (!common) {
    return '';
  }

  const exitNumber = common.get('exitNumber');
  const exitReason = getDisplayName(common.get('exitReason'));

  return [exitNumber, exitReason].filter((part) => !!part).join(' – ');
};
