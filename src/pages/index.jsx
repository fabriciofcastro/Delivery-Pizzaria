import Head from "next/head";
import Hero from "../components/hero/Hero";
import style from '../styles/home.module.css'

export default function Home ()
{
 
  return (
   
    <div className={style.container}>
      <Head>
        <title>Pizzaria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* body */ }
      <main>
       <Hero />
      </main>
    </div>
  );
}

