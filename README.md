# Gestion Bodegas 



## Pasos instalacion:


1. Descargue o clone el repositorio

2. Ejecutar la bd esta en la direccion src/database/schemasBodegas.mongodb.js

3. Ejecutar el siguiente comando para instalar las dependencias necesarias para que funcione => npm i

4. configurar archivo .env en la raiz del proyecto y  como esta en el .envexample

5. ejecutar el proyecto => npm run dev

6. Comando para compilar archivos typ escript => npm run tsc

7. Generar token correspondientes

8. Probar EndPoints


## Token

1. Primero debe generar el token de acceso a los diferentes endpoints => http://127.0.0.1:1234/api/token/:coleccion

	**coleccion:** corresponde al nombre del recurso a la cual desee acceder en este caso existen 3: ['bodega', 'inventario', 'producto']

	**Ejemplo:** entonces quedaria asi para acceder a los recursos de bodega: http://127.0.0.1:1234/api/token/bodega



2. Copiar el token generado y pegarlo en los headers con el nombre Authorization

	**Ejemplo:** Authorization: codigojwtCopiado

   

## EndPoints


- Realizar un EndPolnt que permita listar todas las bodegas ordenadas alfabéticamente.

	##### GET=> http://127.0.0.1:1234/api/bodega/getBodegas

- Realizar un EndPolnt que permita crear una bodegas.(agregar en los comentarios de la función los datos de entrada).

	#####  POST=>http://127.0.0.1:1234/api/bodega/addBodegas

​		*Datos de entrada :* 
		{
		
		"id":3,

​		"nombreBodega":"Bodega San Pedro", 

​		"idResponsable":1,

​		 "estadoBodega":1

 		}

- Realizar un EndPoint que permita listar todos los productos en orden descendente por el campo "Total".

	##### 	GET => http://127.0.0.1:1234/api/producto/getTotalProductos

- Realizar un EndPoint que permita insertar registros en la tabla de inventarios, los parámetros de entrada deben ser (id_producto,id_bodega,cantidad).

	##### 	POST => http://127.0.0.1:1234/api/inventario/addInventario

​		*Datos de entrada:* 
		{			
			"id":3,
		​	 "idProducto":2, 
		​	 "idBodega":2, 
		​	  "cantidadInventario":150
​		}

- Realizar un EndPolnt que permita Trasladar un producto de una bodega a otra

	##### POST => http://127.0.0.1:1234/api/producto/transladoProductos

​		*Datos de entrada* : 
		{
			"id":2,
			"id_producto":1, 
			"id_bodega_origen":1, 
			"id_bodega_destino":2,
			"cantidad":30
		}