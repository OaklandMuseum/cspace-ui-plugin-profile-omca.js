import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    group: {
      forms: forms(configContext),
    },
  },
});
