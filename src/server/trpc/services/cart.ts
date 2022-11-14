
export const cartAdd = async ({ctx,input}) => {
  const productAdded = await ctx.prisma.cart.create({
    data: {
      productId: input.productId,
    },
  });
  return productAdded;
}

export const cartGet = async ({ctx}) => {
  const data = await ctx.prisma.cart.findMany();
  return data;
}

export const cartRemoveAll = async ({ctx}) => {
  const data = await ctx.prisma.cart.deleteMany();
  return data;
}

export const cartRemoveById = async ({ctx,input}) => {
  const data = await ctx.prisma.cart.delete({
    where: {
      productId: input.productId,
    },
  });
  return data;
}
