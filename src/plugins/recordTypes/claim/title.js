export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const commonPart = getPart(data, 'claims_common');
  const omcaPart = getPart(data, 'claims_omca');

  const claimNumber = commonPart && commonPart.get('claimNumber');

  const filedByOMCA = (
    omcaPart
    && deepGet(omcaPart, ['claimClaimantOMCAGroupList', 'claimClaimantOMCAGroup', 0, 'filedByOMCA'])
  );

  const filedBy = configContext.formatHelpers.formatRefName(filedByOMCA) || filedByOMCA;

  return [claimNumber, filedBy].filter((part) => !!part).join(' – ');
};
