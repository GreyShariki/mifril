import { Col, Row } from "react-bootstrap";
import MyButton from "./button/button";
const SectionShop = () => {
  return (
    <Row>
      <Col xs={2}>
        <MyButton>Все товары</MyButton>
        <MyButton>Готовые костюмы</MyButton>
        <MyButton>Оружие</MyButton>
        <MyButton>Аксессуары</MyButton>
        <MyButton>Парики</MyButton>
      </Col>
      <Col xs={10}></Col>
    </Row>
  );
};
export default SectionShop;
