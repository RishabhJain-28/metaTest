import Head from "next/head";
import React, { useEffect } from "react";

const Test = ({ name, id }) => {
  useEffect(() => {
    console.log("name: ", name);
    console.log("id: ", id);
  }, [name, id]);

  return (
    <>
      <Head>
        <title>testparty - test</title>
        <meta property="og:title" content={name} />
        <link rel="shortcut icon" href="/images/hp_logo_1024px.png" />
      </Head>
      <h1>Hello</h1>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  context.query;
  const res = await fetch(
    "https://random-data-api.com/api/coffee/random_coffee"
  ).then((res) => res.json());
  console.log("data", `${res.blend_name}-${context.query.id}`);

  return {
    props: {
      name: `${res.blend_name}-${context.query.id}`,
      id: res.id,
    }, // will be passed to the page component as props
  };
}
export default Test;
