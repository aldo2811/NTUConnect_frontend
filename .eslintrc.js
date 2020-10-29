module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  extends: ["airbnb", "eslint:recommended", "prettier", "prettier/react"],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-param-reassign": 0,
  },
  env: {
    browser: true,
    es6: true,
  },
};
