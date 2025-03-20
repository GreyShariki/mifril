import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartSection = () => {
  const navigate = useNavigate();
  const buyItems = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/addOrder", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });
      if (res.ok) {
        alert("Заказ успешно оформлен");
      }
    } catch (error) {
      alert(error);
    }
  };
  const [userData, setUserData] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getDataUserServer();
    getCartData();
  }, []);

  const getDataUserServer = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/getData", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        navigate("/profile");

        throw new Error("Ошибка при загрузке данных пользователя");
      }
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCartData = async () => {
    try {
      const cartResponse = await fetch("http://localhost:3001/api/userCart", {
        method: "GET",
        credentials: "include",
      });
      if (!cartResponse.ok) throw new Error("Ошибка при загрузке корзины");
      const cartData = await cartResponse.json();
      const catalogResponse = await fetch("http://localhost:3001/api/katalog", {
        method: "GET",
        credentials: "include",
      });
      if (!catalogResponse.ok) throw new Error("Ошибка при загрузке каталога");
      const catalogData = await catalogResponse.json();

      const itemsWithDetails = cartData
        .map((cartItem) => {
          const product = catalogData.find(
            (item) => item.id === Number(cartItem.product_id)
          );
          return product
            ? {
                ...product,
                cartItemId: cartItem.id,
                quantity: cartItem.quantity,
              }
            : null;
        })
        .filter((item) => item);
      setCartItems(itemsWithDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(cartItems);

  return (
    <Container className="py-5">
      <h2 className="mb-4">
        <i className="bi bi-cart3"></i> Ваша корзина
      </h2>

      <Card className="mb-4">
        <Card.Body>
          {cartItems.map((item) => (
            <Row
              key={`${item.id}-${item.cartItemId}`}
              className="g-3 align-items-center mb-4"
            >
              <Col md={2}>
                <img
                  src={item.image}
                  className="img-fluid rounded"
                  alt={item.id}
                />
              </Col>
              <Col md={4}>
                <h5 className="mb-1">{item.name}</h5>
                <p className="text-muted mb-0">{item.description}</p>
              </Col>
              <Col md={3}>
                <div className="input-group">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    <i className="bi bi-dash"></i>
                  </Button>
                  <Form.Control
                    type="number"
                    className="text-center"
                    value={item.quantity}
                    min="1"
                    readOnly
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    <i className="bi bi-plus"></i>
                  </Button>
                </div>
              </Col>
              <Col md={2} className="text-md-end">
                <h5 className="mb-0 price">{item.price * item.quantity} ₽</h5>
              </Col>
              <Col md={1} className="text-end">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="bi bi-trash"></i> Удалить товар
                </Button>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5 className="mb-3">Промокод</h5>
              <div className="input-group mb-3">
                <Form.Control type="text" placeholder="Введите промокод" />
                <Button variant="outline-secondary">Применить</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-between mb-2">
                <span>Товары ({cartItems.length}):</span>
                <span className="total-price" id="total">
                  {totalPrice} ₽
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Итого:</h5>
                <h5 className="total-price">{totalPrice} ₽</h5>
              </div>

              <Button
                onClick={() => buyItems()}
                variant="dark"
                className="w-100 mt-3"
                type="submit"
              >
                <i className="bi bi-credit-card"></i> Перейти к оплате
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartSection;
