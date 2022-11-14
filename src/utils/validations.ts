import {z} from "zod";

const cart = () => {
  const productId = z.string().cuid();
  return{
    add: z.object({ productId }),
    removeById: z.object({productId}),
  }
}

const product = () => {
  const id = z.string().cuid();
  const name = z.string().min(2).trim();
  const slug = z.string().trim();
  const description = z.string().trim();
  const inventory = z.number().min(1);
  const price = z.number().min(1);
  return{
    create: z.object({ name, slug, description, inventory, price, }),
    getById: z.object({id}),
    editById: z.object({ id, name, slug, description, inventory, price, }),
    deleteById: z.object({id}),
  }
}

export const validationScheme = () => {
  return{
    cart,
    product,
  }
}
