import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
const CartForm = ({ formData, changeFormData, orderCreated }) => {
  const [buttonVisibility, setButtonVisibility] = useState(true);
  const handleForm = (e) => {
    changeFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.email.value === e.target.confEmail.value) {
      orderCreated();
    } else {
      alert("Los campos de correo no coinciden");
    }
  }

  useEffect(() => {
    formData.name.length > 2 &&
    formData.email.length > 6 &&
    formData.phone.length > 6
      ? setButtonVisibility(false)
      : setButtonVisibility(true);
  }, [formData]);

  return (
    <Form onSubmit={handleSubmit} onChange={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Tu email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirma tu email </Form.Label>
        <Form.Control type="email" placeholder="Tu email" name="confEmail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Teléfono" name="phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" />
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        className="col-12 mb-2"
        disabled={buttonVisibility}
      >
        Finalizar compra
      </Button>
    </Form>
  );
};

export default CartForm;
