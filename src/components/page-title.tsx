import Head from 'next/head';

export function PageTitle(props: { title: string }) {
  return (
    <Head>
      <title>{props.title} - Erlang/OTP</title>
    </Head>
  );
}
