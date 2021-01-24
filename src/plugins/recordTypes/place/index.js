import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    place: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
