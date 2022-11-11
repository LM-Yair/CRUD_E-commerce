import {Button} from "./Button";
import {ProductAction} from "../hooks/useProductAction";
import {ProductToCart} from "../interfaces/Product";

type ViewProductProps = {
  product: ProductToCart;
  removeProduct: ProductAction;
}

export const ProductCardToCart = ({ product, removeProduct }: ViewProductProps) => {
  const {name,slug,inventory,price, id} = product;
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
