import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

const SEO = ({ title }: any) => {
  const metaTitle = title?.title ? `${title?.title} | Phishing Bear` : 'Phishing Bear'
  const router = useRouter()

  return (
    <Head>
      <title>{metaTitle}{router?.pathname}</title>
    </Head>
  )
}
export default SEO