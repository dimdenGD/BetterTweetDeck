const commonConnectHosts = (exports.commonConnectHosts = [
  'https://*.tenor.com',
  'https://*.giphy.com',
  'https://*.twimg.com',
]);

exports.commonHosts = [
  '*://tweetdeck.twitter.com/*',
  '*://tweetdeck.dimden.dev/*',
  ...commonConnectHosts.map((h) => `${h}/*`),
];
