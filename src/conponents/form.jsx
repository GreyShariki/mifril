import Form from "react-bootstrap/Form";
import MyButton from "./button/button";
const MyForm = ({ children, legend }) => {
  return (
    <>
      <Form
        className="bg-light container col-3 border rounded p-3"
        action={"post"}
      >
        <legend>{legend}</legend>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control name="Fname" type="text" placeholder="Введите имя" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            name="Lname"
            type="text"
            placeholder="Введите фамилию"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Введите Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Страна</Form.Label>
          <Form.Control
            name="country"
            type="text"
            placeholder="Введите страну"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Адрес</Form.Label>
          <Form.Control name="adress" type="text" placeholder="Введите адрес" />
        </Form.Group>

        <MyButton>{children}</MyButton>
      </Form>
    </>
  );
};
export default MyForm;
