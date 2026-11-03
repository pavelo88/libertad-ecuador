import eslint from "eslint";

export default [
  {
    // Files to lint (JS/JSX)
    files: ["**/*.{js,mjs,cjs,jsx}"],
    // Ignore generated Next.js build files and dependencies
    ignores: ["**/.next/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Use Babel parser for modern JSX syntax
      parser: await import("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ["@babel/preset-react"] },
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: await import("eslint-plugin-react"),
      node: await import("eslint-plugin-node"),
    },
    rules: {
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
