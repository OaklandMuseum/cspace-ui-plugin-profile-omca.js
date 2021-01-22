import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanin: {
      messages,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
