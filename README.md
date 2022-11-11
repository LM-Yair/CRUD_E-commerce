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


---

## Iniciar el proyecto

En el archivo package.json ya están configurados los comandos para iniciar el proyecto.

Para comenzar ejecutaremos el comando:
```bash
  yarn install
```
Este comando instalará los paquetes necesarios que necesita nuestra aplicación


Ahora necesitaremos crear nuestro archivo .env de la siguiente manera:
```bash
  yarn run db:env
```


El siguiente comando que necesitamos es:
```bash
  yarn run postinstall
```
Este inicializará los archivos para el Prisma Client, nos generará el modelo de 
datos que definimos previamente en el archivo **prisma/schema.prisma** y poder
detectar el tipado durante el desarrollo.


El ultimo comando será:
```bash
  yarn run db:create
```
Este comando hará un push de nuestro esquema de datos configurado previamente en **prisma/schema.prisma**
hacia la base de datos y la creará en caso de que esta no exista.


Una vez hecho esto, si no ocurrió ningun error ya deberíamos poder ejecutar el comando:
```bash
  yarn run dev
```
Y podremos acceder a nuestro http://localhost:3000 para poder ver y usar nuestra la aplicación :D

Además de eso, hayun comando más que podemos usar:
```bash
  yarn run db:open
```
Este comando nos levantará otro servidor en http://localhost:5555 donde podremos 
ver la base de datos desplegada.

Por el momento es todo, me gustaría mucho saber su opinion acerca de mi desempeño
en esta practica.

Saludos! 👋
