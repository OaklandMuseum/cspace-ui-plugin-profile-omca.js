import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    exhibition: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
