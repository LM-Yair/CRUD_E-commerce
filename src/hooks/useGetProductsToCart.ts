import { useEffect, useState } from "react";
import { ProductCartRaw, ProductToCart } from "../interfaces/Product";
import { trpc } from "../utils/trpc";
import {ActionExecuted} from "./useProductAction";

type CartValue = {
  priceTotal: number;
  cartList: ProductToCart[];
  cartListRaw: ProductCartRaw[];
};

const initialValue: CartValue = {
  priceTotal: 0,
  cartList: [],
  cartListRaw: [],
};

/*
 --- RECUPERANDO DATOS DEL CARRITO ---
 * |> se recuperan los productos en crudo de la tabla Cart
 * |--> se busca cada producto en la tabla Products
 * |----> se calcula el total
 * | :D
*/

export const useGetProductsToCart = (userAction?: ActionExecuted) => {
  const [cartUtils, setCartUtils] = useState(initialValue);
  const utils = trpc.useContext();

  useEffect(() => {
    utils.cart.get
      .fetch()
      .then((res) => setCartUtils({ ...cartUtils, cartListRaw: res }))
      .catch(console.warn);
  }, [userAction]);

  useEffect(() => {
    if (cartUtils.cartListRaw.length) {
      Promise.all(
        cartUtils.cartListRaw.map((raw) =>
          utils.product.getById.fetch({ id: raw.productId })))
      .then(res => setCartUtils({...cartUtils, cartList: res}))
      .catch(console.warn);
    }
    if(!cartUtils.cartListRaw.length && cartUtils.cartList.length){
      setCartUtils(initialValue);
    }
  }, [cartUtils.cartListRaw]);

  useEffect(() => {
    if(cartUtils.cartList.length) {
      let priceCalculated: number = 0;
      cartUtils.cartList.forEach(product => {
	priceCalculated += product.price;
      });
      setCartUtils({...cartUtils, priceTotal: priceCalculated});
    }
  },[cartUtils.cartList]);

  return {cartUtils};
};
