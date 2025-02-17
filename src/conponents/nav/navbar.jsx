import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/1.png";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="">
      <Container fluid className="align-items-end">
        <Navbar.Brand href="#home" className="p-0">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Nav justify className="w-100" variant="tabs" data-bs-theme="dark">
          <Nav.Link className="custom-nav-link" eventKey="home">
            ГЛАВНАЯ
          </Nav.Link>
          <Nav.Link className="custom-nav-link" eventKey="shop">
            КАТАЛОГ
          </Nav.Link>

          <Nav.Link className="custom-nav-link" eventKey="genshin">
            ГЕНШИН
          </Nav.Link>

          <Nav.Link className="custom-nav-link" eventKey="profile">
            ПРОФИЛЬ
          </Nav.Link>

          <Nav.Link className="custom-nav-link" eventKey="link-5">
            КОРЗИНА
          </Nav.Link>

          <Nav.Link className="custom-nav-link" eventKey="link-6">
            ВЫЙТИ
          </Nav.Link>

          <Nav.Link className="custom-nav-link" eventKey="link-7">
            FAQ
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
