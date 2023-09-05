import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [items, setItems] = createStore([
    { title: "Test Product", quantity: 2, id: 100, price: 15.0 },
    { title: "Test Product 2", quantity: 3, id: 24, price: 100.0 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
