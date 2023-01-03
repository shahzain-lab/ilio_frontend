import React from 'react'
import Head from 'next/head'

interface Props {
    title: string;
    desc?: string;
}

const AppHead = ({ title, desc='Content Page' }: Props) => {
  return (
    <Head>
    <title>{ title }</title>
    <meta name="description" content={desc} />
    <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="Keywords" />
    <link rel="icon" href="/favicon.png" />
    <link rel="manifest" href="/manifest.json" />
   </Head>
  )
}

export default AppHead