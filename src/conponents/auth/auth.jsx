import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { loginUser } from "./backend/auth";
import MyButton from "../button/button";

const SectionAuth = ({ setTab }) => {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const [loginValid, setLoginValid] = useState(false);

  const handleChangeLogin = (element) => {
    const { name, value } = element.target;
    setDataLogin({ ...dataLogin, [name]: value });
    setLoginValid(false);
  };

  const handleSubmitLogin = async () => {
    const { email, password } = dataLogin;

    if (!email || !password) {
      alert("Заполни все поля, Артемий");
      return;
    }

    try {
      const response = await loginUser(email, password);
      alert("Вход успешен");
      navigate("/cabinet");
    } catch (error) {
      setLoginValid(true);
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <Form className="w-25 bg-light border rounded p-3">
      <legend>Вход</legend>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={dataLogin.email}
          onChange={handleChangeLogin}
          placeholder="Введите Email"
        />
        <Form.Control.Feedback type="invalid">
          Неправильный Email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          isInvalid={loginValid}
          name="password"
          type="password"
          value={dataLogin.password}
          onChange={handleChangeLogin}
          placeholder="Введите пароль"
        />
        <Form.Control.Feedback type="invalid">
          Неверный логин или пароль.
        </Form.Control.Feedback>
      </Form.Group>
      <MyButton
        className="bg-red w-100"
        type="button"
        onClick={handleSubmitLogin}
      >
        Войти
      </MyButton>
      <button
        type="button"
        onClick={() => setTab("register")}
        className="btn btn-primary mt-3"
      >
        У меня ещё нет аккаунта
      </button>
    </Form>
  );
};

export default SectionAuth;
