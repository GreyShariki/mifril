import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section = ({ children, secondElement, className, fluid = false }) => {
  return (
    <Container className={className} fluid={fluid}>
      <Row className="w-100">
        <Col md={6} className="align-self-center p-5">
          {children}
        </Col>
        <Col md={6} className="align-self-center p-5">
          {secondElement}
        </Col>
      </Row>
    </Container>
  );
};
export default Section;
