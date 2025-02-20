import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/1.png";
import Container from "react-bootstrap/Container";

const MyNavbar = ({ onClick }) => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="">
      <Container fluid className="align-items-end">
        <div as={Navbar.Brand} className="p-0">
          <img src={logo} alt="" />
        </div>
        <Nav justify className="w-100" variant="tabs" data-bs-theme="dark">
          <Nav.Link
            onClick={() => onClick("index")}
            className="custom-nav-link"
            href="#"
            eventKey="home"
          >
            ГЛАВНАЯ
          </Nav.Link>
          <Nav.Link
            onClick={() => onClick("shop")}
            className="custom-nav-link"
            href="#"
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
            onClick={() => onClick("profile")}
            className="custom-nav-link"
            href="#"
            eventKey="profile"
          >
            ПРОФИЛЬ
          </Nav.Link>

          <Nav.Link
            onClick={() => onClick("shop1")}
            className="custom-nav-link"
            href="#"
            eventKey="shop1"
          >
            КОРЗИНА
          </Nav.Link>

          <Nav.Link
            onClick={() => onClick("out")}
            className="custom-nav-link"
            href="#"
            eventKey="out"
          >
            ВЫЙТИ
          </Nav.Link>

          <Nav.Link
            onClick={() => onClick("faq")}
            className="custom-nav-link"
            href="#"
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
