import columns from './columns';
import fields from './fields';
import idGenerators from './idGenerators';
import title from './title';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    valuation: {
      columns,
      fields: fields(configContext),
      title: title(configContext),
    },
  },
});
