import Section from "./sections/section";
import Img from "./Img";
import photo1 from "/photo1.jpg";
import photo2 from "/photo2.png";
import photo3 from "/photo3.jpeg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SectionPhoto = () => {
  return (
    <Container>
      <Row className="">
        <Col sm={4} className="align-self-center">
          <Img src={photo1}></Img>
        </Col>
        <Col sm={4} className="align-self-center">
          <Img src={photo2}></Img>
        </Col>
        <Col sm={4} className="align-self-center">
          <Img src={photo3}></Img>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionPhoto;
