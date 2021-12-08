import * as React from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { useAnalyticsPageTrack } from '@/hooks';

export async function reportWebVitals(_metric: NextWebVitalsMetric) {
  // TODO: Send metrics to backends
}

export function App(props: AppProps) {
  useAnalyticsPageTrack();

  React.useEffect(() => {
    console.log('Have a great day! 📣🐢');
    console.log('Check this amazing material: https://bit.ly/3se7YYw');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <props.Component {...props.pageProps} />
    </React.Fragment>
  );
}
