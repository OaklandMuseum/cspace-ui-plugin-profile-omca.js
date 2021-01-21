import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    concept: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
