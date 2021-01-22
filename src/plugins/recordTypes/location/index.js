import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    location: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
