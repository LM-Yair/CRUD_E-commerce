import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {trpc} from "../utils/trpc";

type InitialValue = { productId: string, action: string, redirectTo?:string}

type ProductActionParams = {
  productId:string, 
  reportAction?:boolean, 
  redirectTo?: string
}

export type ProductAction = (params:ProductActionParams) => any;

const initialValue:InitialValue = {productId:'',action:''};

export const useProductAction = () => {
  const [actionExecuted,setActionExecuted] = useState(initialValue);
  const utils = trpc.useContext();
  
  const router = useRouter();

  useEffect(() => {
    if(actionExecuted.productId !== '' && actionExecuted.redirectTo) router.push(actionExecuted.redirectTo);
  },[actionExecuted]);

  const addProductToCart: ProductAction = async ({productId, reportAction = true, redirectTo}) => {
    try{
      const res = await utils.cart.add.fetch({productId});
      reportAction && setActionExecuted({
	productId:productId,
	action:'added to cart', 
	redirectTo
      });
      return res
    }catch(err){console.warn('añadir al carrito CATCH: ',{err})}
  }

  const removeProductFromCart: ProductAction = async ({productId, reportAction = true, redirectTo}) => {
    try{
      const res = await utils.cart.removeById.fetch({productId})
      reportAction && setActionExecuted({
	productId,
	action:'remove from cart', 
	redirectTo
      });
      return res
    }catch(err){console.warn('remover del carrito CATCH: ',{err})}
  }

  const deleteProductFromDB: ProductAction = async ({productId, reportAction = true, redirectTo}) => {
    try{
      const res = await utils.product.deleteById.fetch({id:productId});
      reportAction && setActionExecuted({ productId, action:'remove from DB', redirectTo });
      return res
    }catch(err){console.warn('remover del carrito CATCH: ',{err})}
  }

  return{
    actionExecuted,
    addProductToCart,
    deleteProductFromDB,
    removeProductFromCart,
  }; 
}
