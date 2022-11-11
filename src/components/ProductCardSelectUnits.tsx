import {BaseSyntheticEvent, useState} from "react";
import {UpdatePrice} from "../hooks/useGetProductsToCart";
import {ProductToCart} from "../interfaces/Product";

type ProductCardSelectUnitsProps = {
  units: number,
  product: ProductToCart,
  updatePrice: UpdatePrice,
}

export const ProductCardSelectUnits = ({units, product, updatePrice}:ProductCardSelectUnitsProps) => {
  const [ selectedUnits, setSelectedUnits ] = useState(units);
  const change = (e: BaseSyntheticEvent) => {
    const parseToNumber = Number(e.target.value);
    if(parseToNumber && parseToNumber <= product.inventory  ){
      setSelectedUnits(parseToNumber)
    }
  }
  const submit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if(selectedUnits <= product.inventory && product.id){
      updatePrice(product.id,selectedUnits);
    }
  }
  return(
    <>
      <form onSubmit={submit} className="my-2 flex flex-wrap gap-2">
	<input type="number" className="max-w-full p-2 rounded-xl" value={selectedUnits} onChange={change}/>
	<input type="submit" className="p-2 rounded-xl cursor-pointer hover:bg-neutral-600 hover:text-neutral-200" value="Añadir"/>
      </form>
    </>
  );
}
