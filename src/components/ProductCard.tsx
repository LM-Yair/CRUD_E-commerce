import Link from "next/link";
import { Button } from "./Button";
import { ProductCardProps } from "../interfaces/Product";

export const ProductCard = ({ id, name, addToCart }: ProductCardProps) => {
  return (
    <article
      className="p-4 flex min-h-68 w-52 flex flex-col gap-2 rounded-xl bg-neutral-300"
      id={id}
    >
      <div className="h-36 w-full rounded-xl bg-neutral-400"></div>
      <Link
        href={`/producto/${id}`}
        className="underline-offset-2 hover:underline"
      >
        {name}
      </Link>
      <Button
        action={() => addToCart({ productId: `${id}`, redirectTo:'/carrito' })}
        text="Añadir al carrito"
      />
    </article>
  );
};
