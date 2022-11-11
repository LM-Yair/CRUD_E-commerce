import Link from "next/link";
import { Button } from "./Button";
import { ProductCardProps } from "../interfaces/Product";

export const ProductCard = ({ id, name, addToCart }: ProductCardProps) => {
  return (
    <article
      className="flex h-64 w-48 flex-col gap-2 rounded-xl border border-neutral-600 p-2"
      id={id}
    >
      <div className="h-32 w-full rounded-xl bg-neutral-400"></div>
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
