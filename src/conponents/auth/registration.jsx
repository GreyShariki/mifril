import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { registerUser } from "./backend/registration";
import MyButton from "../button/button";

const SectionRegistration = ({ setTab }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    lname: "",
    fname: "",
    country: "",
    repeatPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordRepValid, setPasswordRepValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleChange = (element) => {
    const { name, value } = element.target;
    setData({ ...data, [name]: value });

    setEmailValid(false);
    setPasswordRepValid(false);
    setPasswordValid(false);
  };

  const handleSubmit = async () => {
    const { email, password, repeatPassword, lname, fname, country } = data;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValid(true);
      return;
    }

    const passwordRegex =
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{6,}/;
    if (!passwordRegex.test(password)) {
      setPasswordValid(true);
      return;
    }

    if (password !== repeatPassword) {
      setPasswordRepValid(true);
      return;
    }

    const hasEmptyFields = Object.values(data).some((value) => !value);
    if (hasEmptyFields) {
      alert("Заполни все поля, Артемий");
      return;
    }

    try {
      setIsLoading(true);
      const userData = { email, password, lname, fname, country };
      await registerUser(userData);
      alert("Регистрация успешна");
    } catch (error) {
      alert(error.message || "Ошибка при регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form className="w-25 bg-light border rounded p-3">
      <legend>Регистрация</legend>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          isInvalid={emailValid}
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
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
          value={data.fname}
          onChange={handleChange}
          placeholder="Введите имя"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lname">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control
          name="lname"
          type="text"
          value={data.lname}
          onChange={handleChange}
          placeholder="Введите фамилию"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="country">
        <Form.Label>Страна</Form.Label>
        <Form.Control
          name="country"
          type="text"
          value={data.country}
          onChange={handleChange}
          placeholder="Введите страну"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          isInvalid={passwordValid}
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
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
          type="password"
          value={data.repeatPassword}
          onChange={handleChange}
          placeholder="Повторите пароль"
        />
        <Form.Control.Feedback type="invalid">
          Пароли не совпадают.
        </Form.Control.Feedback>
      </Form.Group>
      <MyButton
        className={isLoading ? "bg-red w-100" : "w-100"}
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
      </MyButton>
      <button
        type="button"
        onClick={() => setTab("login")}
        className="btn btn-primary mt-3"
      >
        У меня есть аккаунт
      </button>
    </Form>
  );
};

export default SectionRegistration;
