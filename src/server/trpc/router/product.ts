import {Product} from "../../../interfaces/Product";
import { createProductShape, getDecimalPrice, getFullPrice, productValidation } from "../../../utils/products";

import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  create: publicProcedure
    .input(productValidation().toCreate)
    .query(async ({ ctx, input }) => {
      const product: Product = createProductShape(input);
      const productCreated = await ctx.prisma.product.create({
        data: getDecimalPrice(product),
      });
      return productCreated;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.product.findMany();
    return data;
  }),
  getById: publicProcedure
    .input(productValidation().toGetById)
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
      });
      const product: Product = createProductShape(data);
      return getFullPrice(product);
    }),
  editById: publicProcedure
    .input(productValidation().toUpdate)
    .query(async ({ ctx, input }) => {
      const product: Product = createProductShape(input);
      const data = await ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: getDecimalPrice(product),
      });
      return data;
    }),
  deleteById: publicProcedure
    .input(productValidation().toDeleteById)
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.product.delete({
        where: {
          id: input.id,
        },
      });
      return data;
    }),
});
