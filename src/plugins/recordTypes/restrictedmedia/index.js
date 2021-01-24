import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';
import serviceConfig from './serviceConfig';
import subrecords from './subrecords';
import title from './title';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    restrictedmedia: {
      messages,
      serviceConfig,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      subrecords: subrecords(configContext),
      title: title(configContext),
    },
  },
});
