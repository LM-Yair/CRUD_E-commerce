import { type NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { PageContainer } from "../components/PageContainer";
import { ProductCardToCart } from "../components/ProductCardToCart";
import { useGetProductsToCart } from "../hooks/useGetProductsToCart";
import { useProductAction } from "../hooks/useProductAction";

const Carrito: NextPage = () => {
  const { removeProductFromCart, actionExecuted } = useProductAction();
  const { cartUtils } = useGetProductsToCart(actionExecuted);

  return (
    <PageContainer title="Inicio">
      <Header />
      <main>
        <section className="flex h-full flex-col items-center justify-center gap-2 p-2">
          {cartUtils.cartList.length ? (
            cartUtils.cartList.map((product) => (
              <ProductCardToCart
                key={product.id}
                product={product}
                removeProduct={removeProductFromCart}
              />
            ))
          ) : (
            <p className="p-4">Parece que no tienes nada en el carrito</p>
          )}
        </section>
      </main>
    </PageContainer>
  );
};

export default Carrito;
