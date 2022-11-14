import {Product} from "../interfaces/Product";
import {validationScheme} from "./validations";

export const validateProductShape = (product: Product) => {
  return validationScheme().product().create.safeParse(product);
}

export const createSlug = (productName: string): string => {
    return productName.split(' ').join('-').toLowerCase();
}

export const createProductShape = (input:any): Product => {
  const product: Product = {
    id: input.id,
    name: input.name,
    slug: input.slug,
    description: input.description,
    inventory: input.inventory,
    price: input.price,
  };
  return product;
}

export const getDecimalPrice = (product: Product): Product => {
  return { ...product, price: product.price * 100 }
}

export const getFullPrice = (product: Product): Product => {
  return { ...product, price: product.price / 100 }
}
