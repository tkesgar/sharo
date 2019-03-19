import React from 'react'
import {Navbar, NavbarBrand, Container} from 'reactstrap'

export class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Navbar dark color="dark">
          <Container>
            <NavbarBrand href="#">sharo</NavbarBrand>
          </Container>
        </Navbar>
        <Container className="my-2 text-center">
          <h1>Hello world!</h1>
          <p>It works!</p>
        </Container>
      </>
    )
  }
}

export default IndexPage
