import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/getOrders", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <Container className="mt-5">Загрузка...</Container>;
  }

  if (error) {
    return <Container className="mt-5">Ошибка: {error}</Container>;
  }

  if (orders.length === 0) {
    return <Container className="mt-5">У вас пока нет заказов.</Container>;
  }

  return (
    <Container className="mt-5">
      <Row xs={1} sm={2} md={3} className="g-3">
        {orders.map((order) => (
          <Col key={order.id}>
            <Card className="shadow-sm">
              <div className="img-container">
                <Card.Img
                  variant="top"
                  src={`${order.image}`}
                  alt="Изображение товара"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>Товар: {order.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="outline-secondary" className="me-3">
                      {order.price} р.
                    </Button>
                    <Button variant="outline-primary">Повторить</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OrderList;
