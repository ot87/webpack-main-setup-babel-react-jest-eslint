const js = require("@eslint/js");
const { fixupPluginRules } = require("@eslint/compat");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const jest = require("eslint-plugin-jest");
const testingLibrary = require("eslint-plugin-testing-library");
const jestDom = require("eslint-plugin-jest-dom");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const globals = require("globals");

const reactHooksConfig = {
  plugins: {
    "react-hooks": fixupPluginRules(reactHooks),
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
  },
};

const testConfig = {
  plugins: {
    jest,
    "testing-library": fixupPluginRules(testingLibrary),
    "jest-dom": fixupPluginRules(jestDom),
  },
  rules: {
    ...jest.configs["flat/recommended"].rules,
    ...jest.configs["flat/style"].rules,
    ...testingLibrary.configs["flat/react"].rules,
    ...jestDom.configs["flat/recommended"].rules,
  },
  languageOptions: {
    ...jest.configs["flat/recommended"].languageOptions,
  },
  files: ["src/**/*.test.js", "src/**/*.test.jsx"],
};

module.exports = [
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooksConfig,
  jsxA11y.flatConfigs.recommended,
  testConfig,
  prettierRecommended,
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
