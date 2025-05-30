import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/1.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const MyNavbar = ({ onClick }) => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="">
      <Container fluid className="align-items-end">
        <div as={Navbar.Brand} className="p-0">
          <img src={logo} alt="" />
        </div>
        <Nav
          justify
          className="w-100"
          variant="tabs"
          defaultActiveKey="/"
          data-bs-theme="dark"
        >
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => onClick("/")}
            className="custom-nav-link"
            eventKey="/"
          >
            ГЛАВНАЯ
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/shop"
            onClick={() => onClick("shop")}
            className="custom-nav-link"
            eventKey="shop"
          >
            КАТАЛОГ
          </Nav.Link>

          <Nav.Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="custom-nav-link"
            eventKey="genshin"
          >
            ГЕНШИН
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/profile"
            onClick={() => onClick("profile")}
            className="custom-nav-link"
            href="#login"
            eventKey="profile"
          >
            ПРОФИЛЬ
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/cart"
            onClick={() => onClick("cart")}
            className="custom-nav-link"
            href="#cart"
            eventKey="cart"
          >
            КОРЗИНА
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/faq"
            onClick={() => onClick("faq")}
            className="custom-nav-link"
            href="#faq"
            eventKey="faq"
          >
            FAQ
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
