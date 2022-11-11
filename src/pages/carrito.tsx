import { type NextPage } from "next";
import React from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { PageContainer } from "../components/PageContainer";
import { ProductCardToCart } from "../components/ProductCardToCart";
import { useGetProductsToCart } from "../hooks/useGetProductsToCart";
import { useProductAction } from "../hooks/useProductAction";

const Carrito: NextPage = () => {
  const { removeProductFromCart, actionExecuted, deleteAllCart } =
    useProductAction();
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
          <div className="fixed bottom-0 left-0 z-30 flex h-24 w-full items-center justify-between bg-neutral-800 p-4 px-8">
            <p className="text-xl text-neutral-200 underline underline-offset-4">
              Total: MXN {cartUtils.priceTotal}
            </p>
	    { cartUtils.cartList.length 
	    ? (<Button
		  text={"Comprar"}
		  action={() =>
		    deleteAllCart({
		      productId: "allDB",
		      reportAction: true,
		      redirectTo: "/",
		    })
		  }
		/>)
	    : <p className="text-neutral-200">Añade productos a tu carrito</p>
	    }
          </div>
        </div>
      </main>
    </PageContainer>
  );
};

export default Carrito;
