import { productValidation } from "../../../utils/products";

import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  create: publicProcedure
    .input(productValidation().toCreate)
    .query(async ({ ctx, input }) => {
      const productCreated = await ctx.prisma.product.create({
        data: {
          name: input.name,
          slug: input.slug,
          description: input.description,
          inventory: input.inventory,
          price: input.price,
        },
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
      return data;
    }),
  editById: publicProcedure
    .input(productValidation().toUpdate)
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          slug: input.slug,
          description: input.description,
          inventory: input.inventory,
          price: input.price,
        },
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
