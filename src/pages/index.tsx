import { type NextPage } from "next";
import React from "react";
import {Header} from "../components/Header";
import {PageContainer} from "../components/PageContainer";
import { ProductCard } from "../components/ProductCard";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const products = trpc.product.getAll.useQuery();
  return (
    <PageContainer title='Inicio'>
      <Header />
      <main>
	<section className='p-2 flex flex-wrap justify-center items-center gap-2'>
	{
	  products.data 
	    ? products.data.map(product => (
	      <ProductCard 
		key={product.id}
		id={product.id} 
		name={product.name} 
		slug={product.slug}
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
