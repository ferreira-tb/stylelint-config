import type { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  rules: {
    // Descending
    'no-descending-specificity': true,

    // Duplicate
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-duplicate-names': true,
    'keyframe-block-no-duplicate-selectors': true,

    'declaration-empty-line-before': null,

    'value-keyword-case': ['lower', { ignoreProperties: /font-family/, camelCaseSvgKeywords: true }]
  }
};

export default config;
