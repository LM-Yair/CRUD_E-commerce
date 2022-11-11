import Link from "next/link";

export const Header = () => {
  const linkClass = "text-neutral-200 p-2 px-4 h-full flex justify-center items-center hover:bg-neutral-200 hover:text-neutral-600";
  return(
    <header className='h-16 bg-neutral-800 flex justify-end'>
      <nav className="flex">
	<Link href='/' className={linkClass}>
	  Inicio
	</Link>
	<Link href='/crear' className={linkClass}>
	  Añadir
	</Link>
	<Link href='/carrito' className={linkClass}>
	  Carrito
	</Link>
      </nav>
    </header>
  );
}
