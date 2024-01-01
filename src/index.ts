import type { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  rules: {
    // Case
    'value-keyword-case': [
      'lower',
      { ignoreProperties: /font-family/, camelCaseSvgKeywords: true }
    ],

    // Empty lines
    'declaration-empty-line-before': null
  }
};

export default config;
