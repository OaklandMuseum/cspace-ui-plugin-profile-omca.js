import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    group: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
