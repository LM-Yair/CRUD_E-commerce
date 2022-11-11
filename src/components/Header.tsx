import Link from "next/link";

export const Header = () => {
  const linkClass = "text-neutral-200 p-2 px-4 h-full flex justify-center items-center hover:bg-neutral-200 hover:text-neutral-600";
  return(
    <header className="pt-4 bg-neutral-800 flex flex-col justify-between items-center gap-4 md:flex-row md:py-0 md:h-20">
      <h1 className="text-neutral-200 text-xl text-center px-4 md:text-intial">Ingeniería Científica Bionanomolecular SA de CV</h1>
      <nav className="h-full flex">
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
