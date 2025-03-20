import DefaultHeader from "../header/headerDefault";
import cabinet from "/cab.jpg";
import { Col, Row, Form } from "react-bootstrap";
import MyButton from "../button/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderList from "./buys.jsx";

export const Profile = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const formChange = (element) => {
    const { name, value } = element.target;
    setAdminData({ ...adminData, [name]: value });
  };
  const getData = async () => {
    const res = await fetch("http://localhost:3001/api/getData", {
      method: "get",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setData(data);
    }
  };
  const [tab, setTab] = useState("info");
  const [userData, setData] = useState(null);
  const logout = async () => {
    try {
      setTab("/");
      const res = await fetch("http://localhost:3001/api/logout", {
        method: "get",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Ошибка при выходе из системы");
      }

      localStorage.removeItem("token");
      console.log("Выход выполнен успешно");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const addProduct = async () => {
    try {
      const { name, description, price, image, category } = adminData;
      const res = await fetch("http://localhost:3001/api/adminpanel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, image, category }),
        credentials: "include",
      });
      if (res.ok) {
        alert("Запись добавлена");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DefaultHeader img={cabinet}>Личный кабинет</DefaultHeader>
      <Row className="w-100">
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
              onClick={() => logout()}
              eventKey="/"
            >
              Выйти
            </MyButton>
          </Link>
        </Col>
        <Col xs="8" className="m-4">
          {tab === "info" && (
            <div>
              <h3>
                Добро пожаловать, {userData?.login.fname}{" "}
                {userData?.login.lname}
              </h3>
              <ul>
                <li>Имя: {userData?.login.fname}</li>
                <li>Фамилия: {userData?.login.lname}</li>
                <li>Страна: {userData?.login.country}</li>
              </ul>
              <MyButton>Редактировать профиль</MyButton>
            </div>
          )}
          {tab === "orders" &&
            (userData?.login.role === "admin" ? (
              <Form className="w-25 bg-light border rounded p-3">
                <legend>AdminPanel 1.0</legend>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    onChange={formChange}
                    value={adminData.name}
                    placeholder="Введите название"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Описание</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    onChange={formChange}
                    value={adminData.description}
                    placeholder="Введите описание"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Цена</Form.Label>
                  <Form.Control
                    name="price"
                    type="text"
                    onChange={formChange}
                    value={adminData.price}
                    placeholder="Введите цену"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Категория</Form.Label>
                  <Form.Control
                    name="category"
                    type="text"
                    onChange={formChange}
                    value={adminData.category}
                    placeholder="Введите категорию"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                  <Form.Label>Изображение</Form.Label>
                  <Form.Control
                    name="image"
                    type="text"
                    onChange={formChange}
                    value={adminData.image}
                    placeholder="Введите категорию"
                  />
                </Form.Group>
                <MyButton type="button" onClick={() => addProduct()}>
                  Добавить товар
                </MyButton>
              </Form>
            ) : (
              <OrderList></OrderList>
            ))}
        </Col>
      </Row>
    </>
  );
};
