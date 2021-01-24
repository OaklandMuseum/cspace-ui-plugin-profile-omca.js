import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    organization: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
