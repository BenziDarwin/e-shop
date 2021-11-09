import React from 'react'
import {Navbar, Nav, NavbarBrand,Offcanvas,Form,FormControl,Button, Container} from "react-bootstrap"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigationbar() {
    return (
        <div>
            <Navbar className="navigationbar" id="navbar" expand="lg">
                <Container fluid>
                <NavbarBrand href="#"><div id="brand" style={{marginTop:"0px"}}>Shoggle</div></NavbarBrand>
                <div>

                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  >
                  <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">Shoggle Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/contacts">Contact us</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/help">Help</Nav.Link>
                      </Nav>
                      <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 w-50"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
                  </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
    <div id="items">
    <Nav className="me-auto d-none d-lg-flex">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/shop">Shop</Nav.Link>
                  <Nav.Link href="/contacts">Contact us</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/help">Help</Nav.Link>
                  </Nav>
                  </div>
    <Form className="form d-none d-lg-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    <Link to="/" className="icon d-none d-lg-flex me-auto float-right">Shopping Cart</Link>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigationbar
