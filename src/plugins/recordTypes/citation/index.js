import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    citation: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
