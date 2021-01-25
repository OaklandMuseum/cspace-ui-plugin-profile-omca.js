import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
