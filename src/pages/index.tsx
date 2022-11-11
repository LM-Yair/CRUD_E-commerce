import { type NextPage } from "next";
import React from "react";
import {Header} from "../components/Header";
import {PageContainer} from "../components/PageContainer";
import { ProductCard } from "../components/ProductCard";
import {useProductAction} from "../hooks/useProductAction";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const {addProductToCart} = useProductAction();
  const products = trpc.product.getAll.useQuery();
  return (
    <PageContainer title='Inicio'>
      <Header />
      <h2 className="text-center text-3xl py-6">Inicio</h2>
      <main>
	<section className='p-2 flex flex-wrap justify-center items-center gap-2'>
	{
	  products.data 
	    ? products.data.map(product => (
	      <ProductCard 
		key={product.id}
		id={product.id} 
		name={product.name}
		addToCart={addProductToCart}
	      />)
	    )
	  : (<span>Caragando...</span>)
	  
	}
	</section>
      </main>
    </PageContainer>
  );
};

export default Home;
