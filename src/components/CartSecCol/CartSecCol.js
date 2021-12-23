import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

const CartSecCol = (handleOnDelete, handleOnCreateOrder) => {
  const { totalQty, calcTotal } = useContext(CartContext);

  return (
    <Card>
      <Card.Header>Tienes {totalQty()} productos en el carrito</Card.Header>
      <Card.Body>
        <Card.Title>Total: {calcTotal()} euros</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="dark" onClick={handleOnCreateOrder}>
          Finalizar compra
        </Button>
        <Button variant="dark" onClick={handleOnDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartSecCol;
