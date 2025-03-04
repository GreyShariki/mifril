import DefaultHeader from "../header/headerDefault";
import cabinet from "/cab.jpg";
import { Col, Row } from "react-bootstrap";
import MyButton from "../button/button";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Profile = ({ location }) => {
  const [tab, setTab] = useState("info");
  return (
    <>
      <DefaultHeader img={cabinet}>Личный кабинет</DefaultHeader>
      <Row>
        <Col xs="2" className="m-4">
          <MyButton
            isActive={tab === "info"}
            onClick={() => setTab("info")}
            className="w-100 mb-2"
          >
            Информация
          </MyButton>
          <MyButton
            isActive={tab === "orders"}
            onClick={() => setTab("orders")}
            className="w-100 mb-2"
          >
            Заказы
          </MyButton>
          <Link to="/">
            <MyButton
              isActive={tab === "qut"}
              className="w-100 mb-2"
              onClick={() => onClick("/")}
              eventKey="/"
            >
              Выйти
            </MyButton>
          </Link>
        </Col>
        <Col xs="8" className="m-4">
          {tab === "info" && (
            <div>
              <h3>Добро пожаловать, имя пользователя</h3>
              <ul>
                <li>Имя: asdasdasd</li>
                <li>Фамилия: asdasdasd</li>
                <li>Страна: asdasdasd</li>
              </ul>
              <MyButton>Редактировать профиль</MyButton>
            </div>
          )}
          {tab === "orders" && (
            <div>
              <h3>Ваши заказы</h3>
              <ul>
                <li>Дата: </li>
                <li>Сумма: </li>
                <li>Товары: </li>
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};
