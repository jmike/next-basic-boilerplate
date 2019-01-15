const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    // add polyfills
    const originalEntry = config.entry;
    config.entry = () => {
      return originalEntry().then((entries) => {
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
          entries['main.js'].unshift('./polyfills.js');
        }

        return entries;
      });
    };

    return config;
  },
});
