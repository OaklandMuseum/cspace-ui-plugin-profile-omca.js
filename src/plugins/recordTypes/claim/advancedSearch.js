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
        path: 'ns2:claims_common/claimNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_omca/claimClaimantOMCAGroupList/claimClaimantOMCAGroup/filedByOMCA',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_omca/claimClaimantOMCAGroupList/claimClaimantOMCAGroup/filedOnBehalfOfOMCA',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_omca/transactionType',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_common/claimTypes/claimType',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_common/claimName',
      },
      {
        op: OP_RANGE,
        path: 'ns2:claims_common/claimFiledDatesGroupList/claimFiledDatesGroup/claimFiledDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
