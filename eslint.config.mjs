// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];
import { defineConfig } from 'eslint-define-config';
import globals from 'globals';
import tsparser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  {
    plugins: {
      '@typescript-eslint': tseslint,
      'react': pluginReact,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Include globals for Node.js if necessary
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Include TypeScript recommended rules
      ...pluginReact.configs.recommended.rules, // Include React recommended rules
    },
  },
]);

// env: {
//   browser: true,
//   node: true,
// },
// tseslint.configs.recommended,
// pluginReact.configs.recommended,