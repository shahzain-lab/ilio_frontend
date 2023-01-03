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
    <link rel="icon" href="/favicon.png" />
   </Head>
  )
}

export default AppHead