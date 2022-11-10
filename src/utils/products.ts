import {z, ZodRawShape} from "zod";
import {Product} from "../interfaces/Product";

const productShape = (rules: ZodRawShape) => {
  return z.object(rules);
}

export const productValidation = () => {
  const id = z.string().cuid();
  const basic = {
    name: z.string().min(2).trim(),
    slug: z.string().trim(),
    description: z.string().trim(),
    inventory: z.number().min(1),
    price: z.number().min(1),
  };
  return{
    toCreate: productShape(basic),
    toUpdate: productShape({id,...basic}),
    toGetById: productShape({id}),
    toDeleteById: productShape({id}),
  }
}

export const validateProductShape = (product: Product) => {
  return productValidation().toCreate.safeParse(product);
}

export const createSlug = (productName: string): string => {
    return productName.split(' ').join('-').toLowerCase();
}
