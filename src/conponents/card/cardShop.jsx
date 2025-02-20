import { Col, Row } from "react-bootstrap";
import MyButton from "../button/button";
import Img from "../Img";
const CardShop = ({ children, type, img, price }) => {
  return (
    <Col xs={4} className="mb-4" type={type}>
      <div className="card shadow card-fixed-height mt-0 rounded">
        <Img className="card-img-top" src={img} alt={children}></Img>
        <div className="card-body">
          <p className="card-text">{children}</p>
          <Row className="justify-content-md-between">
            <p className="text-secondary w-auto mb-0">Цена: {price} €</p>
            <MyButton className="w-auto">Купить</MyButton>
          </Row>
        </div>
      </div>
    </Col>
  );
};
export default CardShop;
