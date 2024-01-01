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
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,

    // Empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,

    // Invalid
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'media-query-no-invalid': null,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'string-no-newline': true,

    // Irregular
    'no-irregular-whitespace': true,

    // Missing
    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Non-standard
    'function-linear-gradient-no-nonstandard-direction': true,

    // Overrides
    'declaration-block-no-shorthand-property-overrides': true,

    // Unmatchable
    'selector-anb-no-unmatchable': true,

    // Unknown
    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,

    'declaration-empty-line-before': null,

    'value-keyword-case': ['lower', { ignoreProperties: /font-family/, camelCaseSvgKeywords: true }]
  }
};

export default config;
