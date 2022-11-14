import { router, publicProcedure } from "../trpc";

import {
  productCreate, 
  productDeleteById, 
  productEditById, 
  productGetAll, 
  productGetById, 
  productGetToCartById
} from "../services/product";
import {validationScheme} from "../../../utils/validations";

export const productRouter = router({
  create: publicProcedure
    .input(validationScheme().product().create)
    .query(productCreate),
  getAll: publicProcedure.query(productGetAll),
  getById: publicProcedure
    .input(validationScheme().product().getById)
    .query(productGetById),
  getToCartById: publicProcedure
    .input(validationScheme().product().getById)
    .query(productGetToCartById),
  editById: publicProcedure
    .input(validationScheme().product().editById)
    .query(productEditById),
  deleteById: publicProcedure
    .input(validationScheme().product().deleteById)
    .query(productDeleteById),
});
