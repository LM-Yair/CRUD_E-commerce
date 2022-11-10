import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {Form} from "../../components/Form";
import {Header} from "../../components/Header";
import {PageContainer} from "../../components/PageContainer";
import {ProductToEdit} from "../../interfaces/Product";
import {trpc} from "../../utils/trpc";

type Id = {
  id: string;
}

export const getServerSideProps: GetServerSideProps<{id: Id}> = (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}

const Editar = ({id}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const product = trpc.product.getById.useQuery({id});
  const utils = trpc.useContext();
  const formAction = async (product: ProductToEdit) => {
    return utils.product.editById.fetch(product);
  }
  return (
    <PageContainer title="Editar producto">
      <Header />
      <main>
	<section className='p-2 flex flex-wrap justify-center items-center gap-2'>
	{
	  product.data &&(
	    <Form title={"Editar"} product={product.data} formAction={formAction} />
	  )
	}
	</section>
      </main>
    </PageContainer>
  );
};

export default Editar;
