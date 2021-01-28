export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'media_common');
  const omca = getPart(data, 'media_omca');

  const identificationNumber = common && common.get('identificationNumber');
  const title = common && common.get('title');
  const originalFileName = omca && omca.get('originalFileName');

  return [identificationNumber, title, originalFileName].filter((part) => !!part).join(' – ');
};
