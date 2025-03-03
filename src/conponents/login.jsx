import { Form } from "react-bootstrap";
import MyButton from "./button/button";
import { useState } from "react";
const SectionLogin = () => {
  const [emailValid, setValid] = useState(false);
  const [passwordRepValid, setPasswordRepValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const showRegister = () => {};
  const Change = (element) => {
    const { name, value } = element.target;
    setData({ ...data, [name]: value });
  };
  const subnit = () => {
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
  };
  return (
    <header className="position-relative bg w-100 m-0 row align-items-center justify-content-center">
      <Form className="w-25 bg-light border rounded p-3">
        <legend>Вход</legend>
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
            Неверный логин или пароль.
          </Form.Control.Feedback>
        </Form.Group>
        <MyButton className="w-100" type="button" onClick={subnit}>
          Войти
        </MyButton>
        <button
          type="button"
          onClick={() => showRegister}
          className="btn btn-primary mt-3"
        >
          У меня уже есть аккаунт
        </button>
      </Form>
    </header>
  );
};
export default SectionLogin;
