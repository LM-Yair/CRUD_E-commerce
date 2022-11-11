import { type NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { PageContainer } from "../components/PageContainer";
import { ProductCardToCart } from "../components/ProductCardToCart";
import { useGetProductsToCart } from "../hooks/useGetProductsToCart";
import { useProductAction } from "../hooks/useProductAction";

const Carrito: NextPage = () => {
  const { removeProductFromCart, actionExecuted } = useProductAction();
  const { cartUtils, updatePrice } = useGetProductsToCart(actionExecuted);

  return (
    <PageContainer title="Inicio">
      <Header />
      <main className="relative">
        <section className="flex h-full flex-col items-center justify-center gap-2 p-2">
          {cartUtils.cartList.length ? (
            cartUtils.cartList.map((product) => (
              <ProductCardToCart
                key={product.id}
                product={product}
                removeProduct={removeProductFromCart}
		updatePrice={updatePrice}
              />
            ))
          ) : (
            <p className="p-4">Parece que no tienes nada en el carrito</p>
          )}
        </section>
      <div className="h-24">
	<div className="p-4 h-24 w-full px-8 bg-neutral-800 flex justify-between items-center fixed z-30 bottom-0 left-0">
	  <p className="text-neutral-200 text-xl underline underline-offset-4">Total: MXN {cartUtils.priceTotal}</p>
	</div>
      </div>
      </main>
    </PageContainer>
  );
};

export default Carrito;
