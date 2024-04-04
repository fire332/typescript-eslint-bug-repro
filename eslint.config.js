import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

    languageOptions: {
      parserOptions: {
        EXPERIMENTAL_useProjectService: true,
      },
    },
  },
);
