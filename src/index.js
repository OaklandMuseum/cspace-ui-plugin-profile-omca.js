/* global cspaceUIPluginProfileOMCA */
/* The cspaceUIPluginProfileOMCA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
import logo from '../images/logo.jpg';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/omca.css';

export default () => ({
  logo,
  messages,
  altMediaSnapshot: {
    mediaRecordType: 'restrictedmedia',
    mediaRecordBlobCsidField: 'ns2:restrictedmedia_common/blobCsid',
    name: 'restrictedmediaSnapshotPanel',
    sort: 'originalFileName',
    titleMessage: {
      id: 'restrictedmediaSnapshotPanel.title',
      defaultMessage: 'Media - Restricted',
    },
  },
  className: styles.common,
  defaultAdvancedSearchBooleanOp: 'and',
  mediaSnapshotSort: 'originalFileName',
  prettyUrls: true,
  tenantId: '35',
  pluginInfo: {
    cspaceUIPluginProfileOMCA: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileOMCA.name',
          defaultMessage: 'Oakland Museum of California profile',
        },
      }),
      version: cspaceUIPluginProfileOMCA.packageVersion,
    },
  },
  plugins: [
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
