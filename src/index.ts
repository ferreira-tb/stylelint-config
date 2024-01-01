import type { Config } from 'stylelint';

export interface ConfigOptions {
  /** @default false */
  vue?: boolean;
}

function config(options: ConfigOptions = {}): Config {
  const configExtends: NonNullable<Config['extends']> = ['stylelint-config-standard-scss'];
  if (options.vue) {
    configExtends.push('stylelint-config-standard-vue/scss');
  }

  const rules: NonNullable<Config['rules']> = {
    // Case
    'value-keyword-case': [
      'lower',
      { ignoreProperties: /font-family/, camelCaseSvgKeywords: true }
    ],

    // Empty lines
    'declaration-empty-line-before': null,

    // SCSS
    'scss/dollar-variable-colon-space-after': 'always-single-line'
  };

  return {
    extends: configExtends,
    rules
  };
}

export default config;
