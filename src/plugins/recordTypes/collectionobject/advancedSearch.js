export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectNameList/objectNameGroup/objectName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/titleGroupList/titleGroup/title',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_omca/art',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_omca/history',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_omca/science',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_omca/ipAudit',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/recordStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_omca/determinationHistoryGroupList/determinationHistoryGroup/dhName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/computedCurrentLocation',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/editionNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/styles/style',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/materialGroupList/materialGroup/material',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/sex',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/forms/form',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectComponentGroupList/objectComponentGroup/objectComponentName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/contentConcepts/contentConcept',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/contentPlaces/contentPlace',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/contentPersons/contentPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/contentOrganizations/contentOrganization',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/techniqueGroupList/techniqueGroup/technique',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPlaceGroupList/objectProductionPlaceGroup/objectProductionPlace',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPersonGroupList/objectProductionPersonGroup/objectProductionPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionOrganizationGroupList/objectProductionOrganizationGroup/objectProductionOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocConceptGroupList/assocConceptGroup/assocConcept',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocCulturalContextGroupList/assocCulturalContextGroup/assocCulturalContext',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocOrganizationGroupList/assocOrganizationGroup/assocOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocPersonGroupList/assocPersonGroup/assocPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocPlaceGroupList/assocPlaceGroup/assocPlace',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_omca/exhibitionHistories/exhibitionHistory',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
