module.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "extends": [
    // "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  "rules": {
    "comma-dangle": [
      "error",
      "always",
    ],
    "indent-legacy": [
      "error",
      2,
    ],
    "arrow-parens": [
      "error",
      "always",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "max-len": [
      "error",
      {
        "code": 5000,
      },
    ],
    "vue/max-attributes-per-line": 0,
    "vue/html-self-closing": 0,
    "vue/require-prop-types": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/multi-word-component-names": 0,
    "vue/component-definition-name-casing": 0,
  },
}