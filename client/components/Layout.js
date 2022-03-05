import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

const Layout = (props) => {
  return (
    <Container>
      <h2>Main menu</h2>
      {props.children}
    </Container>
  );
};

export default Layout;
