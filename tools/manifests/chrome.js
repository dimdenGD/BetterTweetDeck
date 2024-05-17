const common = require('./common');
const {commonHosts} = require('./commonHosts');
const _ = require('lodash');

module.exports = {
  ..._.omit(common, ['browser_specific_settings']),
  manifest_version: 3,
  background: {
    service_worker: 'background.js',
    type: 'module',
  },
  permissions: ['storage', 'contextMenus', 'notifications'],
  host_permissions: commonHosts,
  content_security_policy: {
    extension_pages: common.content_security_policy,
  },
  web_accessible_resources: [
    {
      resources: common.web_accessible_resources,
      matches: [
        '*://tweetdeck.twitter.com/*',
        '*://tweetdeck.dimden.dev/*',
        '*://twitter.com/*',
        '*://x.com/*',
      ],
    },
  ],
  externally_connectable: {
    matches: [
      '*://tweetdeck.twitter.com/*',
      '*://tweetdeck.dimden.dev/*',
      '*://twitter.com/*',
      '*://x.com/*',
    ],
  },
  browser_action: undefined,
  action: undefined,
  options_ui: undefined,
  options_page: common.options_ui.page,
};
