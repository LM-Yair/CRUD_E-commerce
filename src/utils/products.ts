import {z, ZodRawShape} from "zod";

const productShape = (rules: ZodRawShape) => {
  return z.object(rules);
}

export const productValidation = () => {
  const id = z.string().cuid();
  const basic = {
    name: z.string().min(2).trim(),
    slug: z.string().trim(),
    description: z.string().trim(),
    inventory: z.number(),
    price: z.number(),
  };
  return{
    toCreate: productShape(basic),
    toUpdate: productShape({id,...basic}),
    toGetById: productShape({id}),
    toDeleteById: productShape({id}),
  }
}
