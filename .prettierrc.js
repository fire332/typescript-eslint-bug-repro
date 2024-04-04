/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,

  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      options: {
        parser: 'jsonc'
      }
    }
  ]
}

export default config