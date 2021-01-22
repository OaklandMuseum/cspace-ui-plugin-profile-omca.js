import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    exhibition: {
      columns,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
