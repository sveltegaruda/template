const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-import-url'),
    production &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.svelte', './assets/__app.html'],
        whitelist: ['svg:not(:root).svg-inline--fa'],
        whitelistPatterns: [/svelte-/, /^fa-/, /^svg-inline--fa/],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
        defaultExtractor: (content) => {
          const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
          const matchedTokens = [];
          let match = regExp.exec(content);
          while (match) {
            if (match[0].startsWith('class:')) {
              matchedTokens.push(match[0].substring(6));
            } else {
              matchedTokens.push(match[0]);
            }
            match = regExp.exec(content);
          }
          return matchedTokens;
        },
      }),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
