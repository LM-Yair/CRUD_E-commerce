# Ingeniería Científica Bionanomolecular SA de CV
## CRUD E-Commerce ( prueba )

## Stack ( IMPORTANTE )
 - React
 - Next
 - TypeScript
 - TailwindCSS
 - Prisma
 - TRPC
 - yarn ( yarn create t3-app )

*NOTA - Realizar commits a lo largo del desarrollo*

Crear un sitio web simulando un e-commerce donde el usuario pueda ver 
todos los productos en la página principal, ver cada producto, 
crear, editar, eliminar y añadir a un carrito.

### Esquema del producto: (Prisma con SQLite)

 - Nombre
 - Slug ( generado automáticamente del nombre )
 - Descripción
 - Inventario
 - Precio ( EN CENTAVOS )

### Páginas necesarias:

 - Página principal ( Lista de productos ).
 - Crear producto ( Implementar un formulario que permita añadir nuevos productos ).
 - Editar un producto ( Implementar un formulario que permita editar un producto ).
 - Ver producto ( Aquí se podrá eliminar, ver detalles del producto e ir a la página de edición );

### Componentes

> Producto 
 - Este deberá tener un botón para añadir al carrito ( simulando una compra ).

> Carrito
 - Este deberá incluir todos los productos añadidos al carrito junto con la cantidad de cada producto en pesos
