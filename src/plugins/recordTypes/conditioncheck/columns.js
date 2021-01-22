export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      conditionCheckRefNumber: {
        sortBy: 'conditionchecks_omca:sortableConditionCheckRefNumber',
      },
      condition: {
        formatValue: formatRefName,
      },
    },
  };
};
