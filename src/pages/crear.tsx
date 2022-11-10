import { type NextPage } from "next";
import React from "react";
import {Form} from "../components/Form";
import {Header} from "../components/Header";
import {PageContainer} from "../components/PageContainer";
import {Product} from "../interfaces/Product";
import {trpc} from "../utils/trpc";

const Crear: NextPage = () => {
  const utils = trpc.useContext();
  const formAction = async (product: Product) => {
    return await utils.product.create.fetch(product);
  }
  return (
    <PageContainer title="Añadir producto">
      <Header />
      <main>
	<section className='p-2 flex flex-wrap justify-center items-center gap-2'>
	  <Form title={"Añadir"} formAction={formAction} />
	</section>
      </main>
    </PageContainer>
  );
};

export default Crear;
