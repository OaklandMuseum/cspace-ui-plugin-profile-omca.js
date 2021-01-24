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

  const common = getPart(data, 'valuationcontrols_common');

  if (!common) {
    return '';
  }

  const valuationcontrolReferenceNumber = common.get('valuationcontrolRefNumber');
  const valueType = common.get('valueType');
  const formattedValueType = formatRefName(valueType) || valueType;

  return [valuationcontrolReferenceNumber, formattedValueType].filter((part) => !!part).join(' – ');
};
