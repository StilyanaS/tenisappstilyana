import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cart.css";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import CartItem from "../CartItem/CartItem";
import CartForm from "../CartForm/CartForm";

const Cart = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orderId, setOrderId] = useState("");
  const { cartList, totalQty, deleteItems, calcTotal } =
    useContext(CartContext);
  const handleOnDelete = () => {
    deleteItems();
  };

  const createOrder = () => {
    let order = {
      buyer: { ...form },
      items: cartList.map((item) => ({
        id: item.itemId,
        ttle: item.name,
        price: item.price,
      })),
      total: calcTotal(),
      date: Date().toLocaleString(),
    };

    let createNewOrder = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createNewOrder()
      .then((res) => setOrderId(res.id))
      .then(handleShow())
      .catch((err) => console.log(err));

    cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.itemId);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });

    handleOnDelete();
  };
  return (
    <Container>
      <Row>
          {cartList.length === 0 ? (
            <Col sm={12}><h1>Your cart is empty</h1></Col>
          ) : (
            <>
            <Col sm={8}><Table bordered hover responsive="sm md" size="sm">
              <tbody>
                {cartList.map((item) => (
                  <CartItem item={item} key={item.id}/>
                ))}
              </tbody>
            </Table></Col>
            <Col>
            <Card>
              <Card.Header>
                Tienes {totalQty()} productos en el carrito
              </Card.Header>
              <Card.Body>
                <Card.Title>Total: {calcTotal()} euros</Card.Title>
                <CartForm
                  formData={form}
                  changeFormData={setForm}
                  orderCreated={createOrder}
                />
                <Button
                  variant="dark"
                  className="col-12"
                  onClick={handleOnDelete}
                >
                  Eliminar productos{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          </>
          )}
      </Row>
      /Users/USER/Desktop/comision16980 copia/tennisappestela/tennisappestela/build
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación del pedido {orderId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu pedido con numero {orderId} nos ha llegado</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
