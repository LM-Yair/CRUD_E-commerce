import {z} from "zod";
import {ProductCartRaw} from "../../../interfaces/Product";

import { router, publicProcedure } from "../trpc";

export const cartRouter = router({
  add: publicProcedure
    .input(z.object({
      productId: z.string().cuid(),
    }))
    .query(async ({ ctx, input }) => {
      const productAdded = await ctx.prisma.cart.create({
        data: {
	  productId: input.productId,
	},
      });
      return productAdded;
    }),
  get: publicProcedure.query(async ({ ctx }) => {
    const data: ProductCartRaw[] = await ctx.prisma.cart.findMany();
    return data;
  }),
  removeById: publicProcedure
    .input(z.object({
      productId: z.string().cuid(),
    }))
    .query(async ({ ctx, input }) => {
      const data = await ctx.prisma.cart.delete({
        where: {
          productId: input.productId,
        },
      });
      return data;
    }),
});
