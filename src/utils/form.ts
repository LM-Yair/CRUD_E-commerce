import {FORM_STATE} from "../CONSTANTS/FORM_STATE";
import {PRODUCT_INITIAL_DATA} from "../CONSTANTS/PRODUCT";
import {FormState} from "../interfaces/Form";
import {Product} from "../interfaces/Product";
import {createSlug, validateProductShape} from "./products";

export const inizializedFormData = ( title: string, product?: Product): FormState => {
  const inicialFormData: FormState = {
    title,
    product: product || PRODUCT_INITIAL_DATA,
    formStatus: product ? FORM_STATE.COMPLETE : FORM_STATE.INCOMPLETE,
  };
  return inicialFormData;
}

export const updateFormData = ( 
  productInCreation: Product, 
  currentFormData: FormState
): FormState => {
  const newProductState: Product = {
    name: productInCreation.name,
    slug: createSlug(productInCreation.name),
    description: productInCreation.description,
    inventory: Number(productInCreation.inventory),
    price: Number(productInCreation.price),
  }
  const newFormStatus = validateProductShape(newProductState);
  const newFormState: FormState  = {
    title: currentFormData.title,
    product: newProductState,
    formStatus: newFormStatus.success 
      ?FORM_STATE.COMPLETE
      :FORM_STATE.INCOMPLETE,
  };

  return newFormState;
}
