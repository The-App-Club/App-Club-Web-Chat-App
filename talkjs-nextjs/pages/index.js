import Link from 'next/link';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import classnames from 'classnames';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

const Page = (props) => {
  const meta = {
    title: 'Cool',
    description: 'Welcome Cool Page',
  };

  const router = useRouter();

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <Layout params={{ page: 'home' }}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <Link href={`/mypage`}>
        <a>my page</a>
      </Link>
    </Layout>
  );
};

export default Page;
