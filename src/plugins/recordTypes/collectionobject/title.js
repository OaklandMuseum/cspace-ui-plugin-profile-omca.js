import { joinValues } from '../../../utils';

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

  const summary = joinValues(
    [
      common.getIn([
        'objectNameList',
        'objectNameGroup',
        0,
        'objectName',
      ]),
      omca.getIn([
        'determinationHistoryGroupList',
        'determinationHistoryGroup',
        0,
        'dhName',
      ]),
      common.getIn([
        'objectProductionPersonGroupList',
        'objectProductionPersonGroup',
        0,
        'objectProductionPerson',
      ]),
    ],
    configContext.formatHelpers,
  );

  return [objectNumber, summary].filter((part) => !!part).join(' – ');
};
