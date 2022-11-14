import { router, publicProcedure } from "../trpc";

import {
  cartAdd, 
  cartGet, 
  cartRemoveAll, 
  cartRemoveById
} from "../services/cart";
import {validationScheme} from "../../../utils/validations";

export const cartRouter = router({
  add: publicProcedure
    .input(validationScheme().cart().add)
    .query(cartAdd),
  get: publicProcedure
    .query(cartGet),
  removeAll: publicProcedure
    .query(cartRemoveAll),
  removeById: publicProcedure
    .input(validationScheme().cart().removeById)
    .query(cartRemoveById),
});
