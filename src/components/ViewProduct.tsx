import {ProductAction} from "../hooks/useProductAction";
import {Product} from "../interfaces/Product";
import {Button} from "./Button";

type Edit = {
  (url:string):void;
}

type ViewProductProps = {
  product:Product;
  edit: Edit;
  deleteProduct: ProductAction;
  addToCart: ProductAction;
}

export const ViewProduct = ({ product, edit, addToCart, deleteProduct }: ViewProductProps) => {
  const {id, name, description,slug,inventory, price} = product;
  const URL_TO_EDIT = `/editar/${id}`;
  return(
  <>
    <div className="w-48 h-56 bg-neutral-400 rounded-xl"></div>
    <div>
      <h3 className="text-xl text-center">{name}</h3>
      <span className="block text-neutral-400/75">{slug}</span>
      <span className="block mt-2 text-neutral-600">Descripción:</span>
      <p className="mb-2">{description}</p>
      <span className="block text-neutral-600">En existencia: {inventory}</span>
      <span className="block text-neutral-600">MXN {price}</span>
      <div className="flex flex-wrap gap-2">
	<Button text="Agregar al carrito" action={() => addToCart({
	  productId:`${id}`,
	  reportAction:true,
	  redirectTo:'/carrito',
	})}/>
	<Button text="Editar" action={() => edit(URL_TO_EDIT)}/>
        <Button text="ELIMINAR" action={() => deleteProduct({
	  productId: `${id}`,
	  redirectTo: '/',
	})}/>
      </div>
    </div>
  </>
  );
}
