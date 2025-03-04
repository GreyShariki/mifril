import { Col, Row } from "react-bootstrap";
import MyButton from "../conponents/button/button";
import DefaultHeader from "../conponents/header/headerDefault";
import ShopHead from "/backkat.jpg";
import CardShop from "../conponents/card/cardShop";
import { data } from "./data.jsx";
import { useState } from "react";
const SectionShop = () => {
  const [tab, setTab] = useState("Все товары");
  const category = ["Все товары", "Костюмы", "Оружие", "Аксессуары", "Парики"];
  return (
    <Row>
      <DefaultHeader img={ShopHead}>Каталог</DefaultHeader>
      <Col xs={2} className="m-5">
        {category.map((el) => {
          return (
            <MyButton
              key={el}
              isActive={tab === el}
              onClick={() => setTab(el)}
              className={"w-75 mb-2"}
            >
              {el}
            </MyButton>
          );
        })}
      </Col>
      <Col xs={8} className="m-5">
        <Row className="justify-content-start">
          {data
            .filter((object) =>
              tab === "Все товары" ? true : object.type === tab
            )
            .map((object) => {
              return (
                <CardShop
                  key={object.id}
                  type={object.type}
                  img={object.img}
                  price={object.price}
                >
                  {object.name}
                </CardShop>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
};
export default SectionShop;
