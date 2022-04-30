import Head from 'next/head';

export function PageTitle(props: { title: string }) {
  return (
    <Head>
      <title>{props.title} | MyWebsite</title>
    </Head>
  );
}
