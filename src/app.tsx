import type { AppProps as NextAppProps, NextWebVitalsMetric } from 'next/app';
import type { NextPageWithLayout } from '@/types';

import { useEffect } from 'react';
import Head from 'next/head';
import { useAnalyticsPageTrack } from '@/hooks';
import { getNoopLayout } from '@/components/layout';

export async function reportWebVitals(_metric: NextWebVitalsMetric) {
  // TODO: Send metrics to backends
}

type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
};

function useApp() {
  useAnalyticsPageTrack();
  useEffect(() => {
    console.log('Have a great day! 📣🐢');
    console.log('Check this amazing material: https://bit.ly/3se7YYw');
  }, []);
}

export function App(props: AppProps) {
  const getLayout = props.Component.getPageLayout ?? getNoopLayout;

  useApp();

  return (
    <>
      <Head>
        <title>Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
}
