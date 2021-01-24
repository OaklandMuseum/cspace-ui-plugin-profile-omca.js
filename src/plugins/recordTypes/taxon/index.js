import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    taxon: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
