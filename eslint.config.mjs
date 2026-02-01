import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";
import storybook from "eslint-plugin-storybook";

export default [
  js.configs.recommended,

  ...next(),

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    files: ["**/*.stories.{ts,tsx}"],
    plugins: {
      storybook,
    },
    rules: {
      "storybook/hierarchy-separator": "error",
      "storybook/default-exports": "error",
    },
  },

  prettier,
];
