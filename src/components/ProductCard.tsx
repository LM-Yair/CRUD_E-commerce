import Link from "next/link";
import {Button} from "./Button";

interface ProductCardProps {
  name: String;
  id: String;
  slug: String;
  description: String;
  inventory: Number;
  price: Number;
};

export const ProductCard = ({ id, slug, name }:ProductCardProps) => {
  const click = () => console.log('Carrito');
  return (
    <article className='p-2 w-48 h-64 flex flex-col gap-2 rounded-xl border border-neutral-600' id={id}>
    <div className='w-full h-32 rounded-xl bg-neutral-400'></div>
      <Link href={`/producto/${slug}`} className="underline-offset-2 hover:underline">
	{name}
      </Link>
      <Button action={click} text='Añadir al carrito'/>
    </article>
  );
};
