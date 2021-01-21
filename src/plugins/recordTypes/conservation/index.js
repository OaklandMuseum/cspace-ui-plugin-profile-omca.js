import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    conservation: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
