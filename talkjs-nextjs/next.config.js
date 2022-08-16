module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/setting-a-custom-build-directory
  // https://github.com/serverless-nextjs/serverless-next.js/issues/467#issuecomment-726227243
  // distDir: 'build'
  // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  env: {
    NEXT_JS_API_URL: 'http://localhost:3000/api',
  },
  // https://nextjs.org/docs/basic-features/eslint#migrating-existing-config
  extends: ['eslint:recommended', 'next'],
  config: {
    api: {
      bodyParser: true,
    },
  },
};
