import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    contact: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
