import columns from './columns';
import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    intake: {
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
