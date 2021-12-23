import React from 'react'
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const CartTable = () => {

        const {
          cartList,
          deleteItem,
          calcTotalPerItem
        } = useContext(CartContext);

    return (
        <Table bordered hover responsive="sm md" size="sm">
              <tbody>
                {cartList.map((item) => (
                  <tr key={item.itemId}>
                    <td>
                      <div className="align-me">3</div>
                    </td>
                    <td className="w-20">
                      <Image src={item.image} className="cart-photo" />
                    </td>
                    <td colSpan="2">
                      {" "}
                      <div className="align-me">
                        {" "}
                        <h3>{item.name}</h3>
                      </div>
                      <div className="align-me">
                        <p>
                          {item.qty} <span className="span-space">x</span>
                          {item.price}
                        </p>
                      </div>
                    </td>
                    <td colSpan="2">
                      {" "}
                      <div className="align-me">
                        Total: {calcTotalPerItem(item.itemId)}
                      </div>
                    </td>
                    <td colSpan="2">
                      <div className="align-me">
                        <Button
                          variant="dark"
                          onClick={() => deleteItem(item.itemId)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
    )
}

export default CartTable
