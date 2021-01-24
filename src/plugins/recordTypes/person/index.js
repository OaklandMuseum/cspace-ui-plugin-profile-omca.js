import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    person: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
