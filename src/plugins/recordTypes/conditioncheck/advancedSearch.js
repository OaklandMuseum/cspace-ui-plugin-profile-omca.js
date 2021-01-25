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
        path: 'ns2:conditionchecks_common/conditionCheckRefNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_common/conditionChecker',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/assessmentRequestGroupList/assessmentRequestGroup/assessmentRequestedBy',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/assessmentRequestGroupList/assessmentRequestGroup/assessmentRequestRole',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conditionchecks_omca/assessmentRequestGroupList/assessmentRequestGroup/assessmentRequestDateRequested',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conditionchecks_omca/assessmentRequestGroupList/assessmentRequestGroup/assessmentRequestDateRequired',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_common/conditionCheckReason',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/condition',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conditionchecks_omca/conditionDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/tempRequirement',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/humidityRequirement',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_omca/lightRequirement',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_common/hazardGroupList/hazardGroup/hazard',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
