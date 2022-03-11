import { useRef, useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import greeter from "../greeter";
import provider from "../provider";

const ChangeGreeting = (props) => {
  const [seccessMessage, setSeccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const greetingRef = useRef();

  const handleChangeGreeting = async (event) => {
    event.preventDefault();
    setSeccessMessage("");
    setErrorMessage("");
    setIsLoading(true);

    try {
      const signer = await provider.getSigner();
      const greeterWithSigner = greeter.connect(signer);
      const response = await greeterWithSigner.setGreeting(
        greetingRef.current.value
      );
      console.log("response: ", response);
      setSeccessMessage("Hash of transaction: " + response.hash);
    } catch (error) {
      setErrorMessage(error.message);
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Form
        onSubmit={handleChangeGreeting}
        error={!!errorMessage}
        success={!!seccessMessage}
      >
        <Form.Field>
          <label>New greeting</label>
          <input ref={greetingRef} placeholder="Type new greeting here" />
        </Form.Field>

        <Button loading={isLoading} primary type="submit">
          Change!
        </Button>
        <Message success header="Success" content={seccessMessage} />
        <Message error header="Ops...." content={errorMessage} />
      </Form>
    </Layout>
  );
};

export default ChangeGreeting;
