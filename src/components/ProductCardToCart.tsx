import {Button} from "./Button";
import {ProductAction} from "../hooks/useProductAction";
import {ProductToCart} from "../interfaces/Product";
import {ProductCardSelectUnits} from "./ProductCardSelectUnits";
import {UpdatePrice} from "../hooks/useGetProductsToCart";

type ViewProductProps = {
  product: ProductToCart;
  removeProduct: ProductAction;
  updatePrice: UpdatePrice,
}

export const ProductCardToCart = ({ product, removeProduct, updatePrice }: ViewProductProps) => {
  const {name,slug,inventory,price, id} = product;
  return(
  <article className="p-4 w-full max-w-[16rem] bg-neutral-300 rounded-xl flex flex-col gap-4 md:flex-row md:max-w-lg lg:max-w-2xl">
    <div className="w-full h-56 bg-neutral-400 rounded-xl md:max-w-[180px]"></div>
    <div className="w-full">
      <h3 className="text-xl">{name}</h3>
      <span className="block text-neutral-400/75">{slug}</span>
      <span className="block text-neutral-600">En existencia: {inventory}</span>
      <span className="block text-neutral-600">MXN {price}</span>
      <ProductCardSelectUnits units={product.units || 1}  product={product} updatePrice={updatePrice} />
      <div className="flex flex-wrap gap-2">
        <Button 
          text="Remover" 
          action={() => removeProduct({productId: `${id}`})}
        />
      </div>
    </div>
  </article>
  );
}
