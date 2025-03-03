import { Form } from "react-bootstrap";
import MyButton from "./button/button";
import { useState } from "react";
const SectionRegister = () => {
  const [emailValid, setValid] = useState(false);
  const [passwordRepValid, setPasswordRepValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    lname: "",
    fname: "",
    country: "",
    repeatPassword: "",
  });
  const Change = (element) => {
    const { name, value } = element.target;
    setData({ ...data, [name]: value });
  };
  const subnit = async () => {
    const passwordRegex =
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setValid(true);
    } else {
      setValid(false);
    }

    if (data.password !== data.repeatPassword) {
      setPasswordRepValid(true);
    } else {
      setPasswordRepValid(false);
    }

    if (!passwordRegex.test(data.password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lname: data.lname,
          fname: data.fname,
          password: data.password,
          email: data.email,
          country: data.country,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || "Регистрация прошла успешно!");
      } else {
        alert(result.message || "Ошибка при регистрации");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };
  return (
    <header className="position-relative bg w-100 m-0 row align-items-center justify-content-center">
      <Form method="post" className="w-25 bg-light border rounded p-3">
        <legend>Регистрация</legend>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            isInvalid={emailValid}
            name="email"
            type="email"
            onChange={Change}
            placeholder="Введите Email"
          />
          <Form.Control.Feedback type="invalid">
            Неправильный Email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="fname">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            name="fname"
            type="text"
            onChange={Change}
            placeholder="Введите имя"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lname">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            name="lname"
            type="text"
            onChange={Change}
            placeholder="Введите фамилию"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label>Страна</Form.Label>
          <Form.Control
            name="country"
            type="text"
            onChange={Change}
            placeholder="Введите страну"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            isInvalid={passwordValid}
            name="password"
            type="password"
            onChange={Change}
            placeholder="Введите пароль"
          />
          <Form.Control.Feedback type="invalid">
            Пароль должен содержать минимум 6 символов, включая цифры, спец.
            символы, строчные и прописные символы.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="repeatPassword">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            isInvalid={passwordRepValid}
            name="repeatPassword"
            onChange={Change}
            type="password"
            placeholder="Повторите пароль"
          />
          <Form.Control.Feedback type="invalid">
            Пароли не совпадают.
          </Form.Control.Feedback>
        </Form.Group>
        <MyButton className="w-100" type="button" onClick={subnit}>
          Зарегестрироваться
        </MyButton>
      </Form>
    </header>
  );
};
export default SectionRegister;
