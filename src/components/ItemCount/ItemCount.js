import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import "./ItemCount.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ItemCount = ({ initial, stock, onAdd }) => {
  let quantity = 0;
  const [count, setCount] = useState(1);
  function onIncr() {
    count < stock && setCount(count + 1);
  }
  function onDecr() {
    count > 1 && setCount(count - 1);
  }
  function handlerOnAdd() {
    quantity = count;
    onAdd(quantity);
    setCount(initial);
  }
  
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <div className="count-container">
        <div className="buttons">
          <button onClick={onIncr}>
            <FiPlus size={20} />
          </button>
          <input type="text" placeholder={count} disabled />
          <button onClick={onDecr}>
            <FiMinus size={20} />
          </button>
        </div>
        <Button variant="dark" className="add-to-cart" onClick={handlerOnAdd}>
          Agregar
        </Button>
      </div>
    </Stack>
  );
};

export default ItemCount;
