import React, { useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, quantity) => {
    let foundProduct = cartList.find((current) => current.itemId === item.id);
    if (foundProduct === undefined) {
      setCartList([
        ...cartList,
        {
          stock: item.stock,
          image: item.image,
          itemId: item.id,
          name: item.name,
          price: item.price,
          qty: quantity
        },
      ]);
    } else {
      foundProduct.qty += quantity;
      setCartList([...cartList]);
    }
  };

  const deleteItem = (id) => {
    const newCartList = cartList.filter((item) => item.itemId !== id);
    setCartList(newCartList);
  };

  const deleteItems = () => {
    calcTotal();
    setCartList([]);
  };

  const calcTotalPerItem = (id) => {
    const currItemAr = cartList.filter((item) => item.itemId === id);
    const currItem = currItemAr[0];
    return currItem.price * currItem.qty;
  };

  const calcTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.itemId));
    return totalPerItem.reduce((prev, curr) => prev + curr, 0);
  };

  const totalQty = () => {
    let qtyPerItem = cartList.map((item) => item.qty);
    return qtyPerItem.reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        calcTotalPerItem,
        deleteItems,
        deleteItem,
        calcTotal,
        totalQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
