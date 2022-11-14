import {Product} from "../../../interfaces/Product";
import { 
  createProductShape, 
  getDecimalPrice, 
  getFullPrice 
} from "../../../utils/products";

export const productCreate = async ({ctx,input}) => {
  const product: Product = createProductShape(input);
  const productCreated = await ctx.prisma.product.create({
    data: getDecimalPrice(product),
  });
  return productCreated;
}

export const productGetAll = async ({ctx}) => {
  const data = await ctx.prisma.product.findMany();
  return data;
}

export const productGetById = async ({ctx,input}) => {
  const data = await ctx.prisma.product.findUnique({
    where: {
      id: input.id,
    },
  });
  const product: Product = createProductShape(data);
  return getFullPrice(product);
}

export const productGetToCartById = async ({ctx,input}) => {
  const data = await ctx.prisma.product.findUnique({
    where: {
      id: input.id,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      inventory: true,
      price: true,
    }
  });
  const product: Product = createProductShape(data);
  return getFullPrice(product);
}

export const productEditById = async ({ctx,input}) => {
  const product: Product = createProductShape(input);
  const data = await ctx.prisma.product.update({
    where: {
      id: input.id,
    },
    data: getDecimalPrice(product),
  });
  return data;
}

export const productDeleteById = async ({ctx,input}) => {
  const data = await ctx.prisma.product.delete({
    where: {
      id: input.id,
    },
  });
  return data;
}
