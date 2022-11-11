import {Button} from "./Button";
import { trpc } from "../utils/trpc";
import {ProductCardToCart_info} from "./ProductCardToCart_info";
import {ProductAction} from "../hooks/useProductAction";

type ViewProductProps = {
  productId: string;
  removeProduct: ProductAction;
}

export const ProductCardToCart = ({ productId, removeProduct }: ViewProductProps) => {
  const {data,error} = trpc.product.getToCartById.useQuery({id: productId});
  if(!data)return <ProductCardToCart_info/>;
  if(error)return <ProductCardToCart_info type="error"/>;
  const {name,slug,inventory,price, id} = data;
  return(
  <>
    <div className="w-48 h-56 bg-neutral-400 rounded-xl"></div>
    <div>
      <h3 className="text-xl text-center">{name}</h3>
      <span className="block text-neutral-400/75">{slug}</span>
      <span className="block text-neutral-600">En existencia: {inventory}</span>
      <span className="block text-neutral-600">MXN {price}</span>
      <div className="flex flex-wrap gap-2">
        <Button 
	  text="Remover" 
	  action={() => removeProduct({productId: `${id}`})}
	/>
      </div>
    </div>
  </>
  );
}
