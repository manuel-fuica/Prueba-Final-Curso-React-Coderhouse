## Proyecto para la prueba final del curso desarrollo frontend React en Coderhouse

- Desarrollo de un ecommerse de venta de sushi, se muestra el catalogo de los productos,
estos productos son cargados desde la base de datos firebase a la cual esta conectada,
detalles de producto, funciones para agregar al carrito, eliminar del carrito y mostrar carrito.

- En el carrito se puede ver una tabla con el listado de los productos seleccionados,
sin repetir (solo aumenta el total), muestra el total de la venta y se puede generar el pedido
ingresando los datos (nombre, correo, telefono).

- El generador de pedidos esta conectado a la base de datos la cual genera una orden, 
muestra un alert con los datos ingresados y el numero de ID generado por la base de datos, 
la base de datos guarda el pedido.

## El proyecto consta de la siguiente estructura:

- Componentes:

    - NavBar
    - CartWidget
    - ItemListContainer
    - ItemList
    - ItemDetailContainer
    - ItemDetail

- Firebase:
    - Archivo client.js el cual contiene la conexion a la base de datos

## Esta subido a vercel para poder verlo en el navegador e incluye un Gif para ver su ejecucion

- Link:
    - https://sushifans-xi.vercel.app/ 