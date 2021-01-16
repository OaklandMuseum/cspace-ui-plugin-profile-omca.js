/* global cspaceUIPluginProfileOMCA */
/* The cspaceUIPluginProfileOMCA global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/omca.css';

export default () => ({
  messages,
  className: styles.common,
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
  plugins: plugins.map((plugin) => plugin()),
});
