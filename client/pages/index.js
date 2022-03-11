import Link from "next/link";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

import greeter from "../greeter";

const IndexGreeter = (props) => {
  return (
    <Layout>
      <h1>Greeting: {props.greeting}</h1>
      <Link href="/change_greeting">
      <Button primary>Change Greeting</Button>
      </Link>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const greeting = await greeter.greet();
  return {
    props: { greeting }, // will be passed to the page component as props
  };
}

export default IndexGreeter;
