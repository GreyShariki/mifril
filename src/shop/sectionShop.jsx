import { Col, Row } from "react-bootstrap";
import MyButton from "../conponents/button/button";
import DefaultHeader from "../conponents/header/headerDefault";
import ShopHead from "/backkat.jpg";
import CardShop from "../conponents/card/cardShop";
import { useEffect, useState } from "react";
const SectionShop = () => {
  const [userData, getDataUser] = useState(null);
  const getDataUserServer = async () => {
    const res = await fetch("http://localhost:3001/api/getData", {
      method: "get",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      getDataUser(data);
    }
  };
  const buy = async (product_id) => {
    try {
      const res = await fetch("http://localhost:3001/api/addShop", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userData?.login.id,
          product_id: product_id,
          quantity: 1,
        }),
      });
      if (res.ok) {
        alert("Товар добавлен в корзину");
      } else {
        alert("Для начала войдите в аккаунт");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [shopData, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/katalog", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [tab, setTab] = useState("Все товары");
  const category = ["Все товары", "Костюмы", "Оружие", "Аксессуары", "Парики"];
  useEffect(() => {
    getData();
    getDataUserServer();
  }, []);
  return (
    <>
      <DefaultHeader img={ShopHead}>Каталог</DefaultHeader>
      <Row className="w-100">
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
            {shopData
              .filter((object) =>
                tab === "Все товары" ? true : object.category === tab
              )
              .map((object) => {
                return (
                  <CardShop
                    buy={() => buy(object.id)}
                    key={object.id}
                    type={object.category}
                    img={object.image}
                    price={object.price}
                  >
                    {object.name}
                  </CardShop>
                );
              })}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default SectionShop;
