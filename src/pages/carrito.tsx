import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { PageContainer } from "../components/PageContainer";
import { ProductCardToCart } from "../components/ProductCardToCart";
import { useProductAction } from "../hooks/useProductAction";
import { ProductCartRaw } from "../interfaces/Product";

import { trpc } from "../utils/trpc";

const initialValue: ProductCartRaw[] = [];

const Carrito: NextPage = () => {
  const [listCart, setListCart] = useState(initialValue);
  const { removeProductFromCart, actionExecuted } = useProductAction();
  const utils = trpc.useContext();

  useEffect(() => {
    utils.cart.get
      .fetch()
      .then((res) => {
        setListCart(res);
      })
      .catch(console.warn);
  }, [actionExecuted]);

  return (
    <PageContainer title="Inicio">
      <Header />
      <main>
        <section className="h-full flex flex-col items-center justify-center gap-2 p-2">
          {listCart.length ?
            listCart.map((cart) => (
              <ProductCardToCart
                key={cart.id}
                productId={cart.productId}
                removeProduct={removeProductFromCart}
              />
            ))
	    :(<p className="p-4">Parece que no tienes nada en el carrito</p>)
	    }
        </section>
      </main>
    </PageContainer>
  );
};

export default Carrito;
