import React from 'react'
import Head from 'next/head' 
import {  Montserrat} from 'next/font/google'
 

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home(props :any) {
 
  return (
    <>
      <Header />
      <main className={montserrat.className} >
        <div className='homePage  '>
          Əhli Sünnə Mədrəsəsi
        </div>
        
      </main>
    </>
  )
}

const Header=() => (
  <Head>
    <title>Əhli Sünnə Mədrəsəsi</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
 