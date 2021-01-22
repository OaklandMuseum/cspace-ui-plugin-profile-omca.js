import columns from './columns';
import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    conservation: {
      columns,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
