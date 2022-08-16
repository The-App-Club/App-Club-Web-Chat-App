import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      {/* 全ページ共通のメタタグ */}
      <meta property="fb:app_id" content="121212121" />
      <meta name="twitter:card" content="summary_large_image" />
      <link href="/apple-touch-icon-precomposed.png" rel="apple-touch-icon" />
      <meta name="theme-color" content="#F4F4F4" media="(prefers-color-scheme: light)" key="1" />
      <meta name="theme-color" content="#343434" media="(prefers-color-scheme: dark)" key="2" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      <meta property="og:site_name" content="Cool" />
    </Head>
  );
};
export { Meta };
