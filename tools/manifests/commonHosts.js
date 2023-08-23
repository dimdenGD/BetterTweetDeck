const commonConnectHosts = (exports.commonConnectHosts = [
  'https://*.tenor.com',
  'https://*.giphy.com',
  'https://*.twimg.com',
]);

exports.commonHosts = [
  '*://tweetdeck.twitter.com/*',
  '*://tweetdeck.dimden.dev/*',
  '*://twitter.com/i/tweetdeck',
  ...commonConnectHosts.map((h) => `${h}/*`),
];
