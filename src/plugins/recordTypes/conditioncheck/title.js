export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'conditionchecks_common');
  const omca = getPart(data, 'conditionchecks_omca');

  const conditioncheckRefNumber = common && common.get('conditionCheckRefNumber');
  const condition = omca && omca.get('condition');
  const formattedCondition = formatRefName(condition) || condition;

  return [conditioncheckRefNumber, formattedCondition].filter((part) => !!part).join(' – ');
};
