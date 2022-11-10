import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {Header} from "../../components/Header";
import {PageContainer} from "../../components/PageContainer";
import {trpc} from "../../utils/trpc";
import {ViewProduct} from "../../components/ViewProduct";
import {useRouter} from "next/router";

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

const Producto = ({id}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const product = trpc.product.getById.useQuery({id});
  const utils = trpc.useContext();
  const deleteProduct = async (id: string) => {
    const productDeleted = await utils.product.deleteById.fetch({id});
    console.log(':(',{productDeleted});
    router.push("/");
  }
  const goToEditPage = (url: string) => router.push(url);
  return (
    <PageContainer title={`${product.data?.name ?? 'Product'}`}>
      <Header />
      <main>
	<section className='p-2 flex flex-wrap justify-center items-center gap-2'>
	{
	  product.data && (
	    <ViewProduct 
	      product={{
		id:product.data.id, 
		name:product.data.name,
		description:product.data.description,
		slug:product.data.slug,
		inventory:product.data.inventory,
		price:product.data.price,
	      }}
	      edit={goToEditPage}
	      deleteProduct={deleteProduct}
	    />
	  )
	}
	</section>
      </main>
    </PageContainer>
  );
};

export default Producto;
