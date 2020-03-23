import * as React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

export default function IndexPage(): JSX.Element {
  return (
    <>
      <Navbar dark color="dark">
        <NavbarBrand href="#">sharo</NavbarBrand>
      </Navbar>
      <Container className="my-2 text-center">
        <h1>Hello world!</h1>
        <p>It works!</p>
      </Container>
    </>
  );
}
