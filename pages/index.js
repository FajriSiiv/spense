import Head from "next/head";
import Content from "../components/Content";
import Hero from "../components/hero";
import TextEditor from "../components/TextEditor";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Head>
        <title>spense.</title>
        <meta
          desc="Spense uses Escrow to secure all payment. We believe Escrow offers,
            the highest level of security for your payments, so you never need
            to worry about scams."
        />
      </Head>
      <Hero />
      <Content />
      <TextEditor />
    </div>
  );
}
