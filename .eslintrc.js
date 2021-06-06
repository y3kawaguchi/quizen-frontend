module.exports = {
  // 環境設定
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  plugins: ["react", "testing-library"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // eslint-plugin-react 関連
    "eslint:recommended",
    "plugin:react/recommended",
    // Prettier 関連
    "plugin:prettier/recommended",
  ],
  rules: {
    // お好みで構文解析のルールを追加
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
    "testing-library/no-dom-import": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
};
