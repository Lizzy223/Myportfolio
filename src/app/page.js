'use client';

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { About } from '../components/About'
import Works from '../components/Works'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Lizzie portfolio</title>
        <meta name="description" content="Created with love ❤️" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Header/>      
      <About/>
      <Works />
      <Footer />
    </ChakraProvider>
  )
}
