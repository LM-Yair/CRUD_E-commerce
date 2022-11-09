import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(async({ ctx }) => {
    const data = await ctx.prisma.example.findMany();
    return data;
    }),
  getById: publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async({ ctx, input }) => {
    const data = await ctx.prisma.example.findUnique({
      where: {
	id: input.id,
      },
    });
    return data;
    }),
  editById: publicProcedure
  .input(z.object({ id: z.string(), name: z.string().min(2).trim() }))
  .query(async({ ctx, input }) => {
    const data = await ctx.prisma.example.update({
      where: {
	id: input.id,
      },
      data: {
	name: input.name,
      },
    });
    return data;
    }),
  deleteById: publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async({ ctx, input }) => {
    const data = await ctx.prisma.example.delete({
      where: {
	id: input.id,
      },
    });
    return data;
    }),
  create: publicProcedure
    .input(z.object({
      name: z.string().min(2).trim()
    }))
    .query(async({ctx,input}) => {
      const example = await ctx.prisma.example.create({
        data: { name: input.name }
      });
      console.log(example);
      return example;
    }),
});
