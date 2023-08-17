use('db_bodegas_campus')
db.createCollection('bodegas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'bodegas object validation',
      required: ['id', 'nombre', 'id_responsable', 'estado'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id de la bodega es requerido y debe ser de tipo integer'
        },
        nombre: {
          bsonType: 'string',
          description: 'nombre de la bodega debe ser obligatorio y de tipo string'
        },
        id_responsable: {
          bsonType: 'int',
          description: 'ID del responsable de la bodega es requerido y debe ser de tipo int'
        },
        estado: {
          bsonType: 'int',
          description: 'estado de la bodega es requerido y debe ser de tipo integer'
        },
        created_by: {
          bsonType: 'objectId',
          description: 'ID del creador de la bodega, si existe, debe ser de tipo objectID'
        },
        updated_by: {
          bsonType: 'objectId',
          description: 'ID del actualizador de la bodega, si existe, debe ser de tipo ObjectId'
        },
        created_at: {
          bsonType: 'date',
          description: 'timestamp de creación de la bodega, si existe, debe ser de tipo date'
        },
        updated_at: {
          bsonType: 'date',
          description: 'timestamp de actualización de la bodega, si existe, debe ser de tipo date'
        },
        deleted_at: {
          bsonType: 'date',
          description: 'timestamp de eliminación de la bodega, si existe, debe ser de tipo date'
        }
      }
    }
  }
})

use('db_bodegas_campus')
db.createCollection('historiales', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'historiales object validation',
      required: ['id', 'cantidad', 'id_bodega_origen', 'id_bodega_destino', 'id_inventario'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id de la bodega es requerido y debe ser de tipo integer'
        },
        cantidad: {
          bsonType: 'int',
          description: 'cantidad en el histórico es requerida y debe ser de tipo integer'
        },
        id_bodega_origen: {
          bsonType: 'int',
          description: 'ID de la bodega de origen es requerido y debe ser de tipo int'
        },
        id_bodega_destino: {
          bsonType: 'int',
          description: 'ID de la bodega de destino es requerido y debe ser de tipo int'
        },
        id_inventario: {
          bsonType: 'int',
          description: 'ID del inventario es requerido y debe ser de tipo int'
        },
        created_by: {
          bsonType: 'objectId',
          description: 'ID del creador del histórico, si existe, debe ser de tipo ObjectId'
        },
        updated_by: {
          bsonType: 'objectId',
          description: 'ID del actualizador del histórico, si existe, debe ser de tipo ObjectId'
        },
        created_at: {
          bsonType: 'date',
          description: 'timestamp de creación del histórico, si existe, debe ser de tipo date'
        },
        updated_at: {
          bsonType: 'date',
          description: 'timestamp de actualización del histórico, si existe, debe ser de tipo date'
        },
        deleted_at: {
          bsonType: 'date',
          description: 'timestamp de eliminación del histórico, si existe, debe ser de tipo date'
        }
      }
    }
  }
})

use('db_bodegas_campus')
db.createCollection('inventarios', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'inventarios object validation',
      required: ['id', 'id_bodega', 'id_producto', 'cantidad'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id de la bodega es requerido y debe ser de tipo integer'
        },
        id_bodega: {
          bsonType: 'int',
          description: 'ID de la bodega es requerido y debe ser de tipo int'
        },
        id_producto: {
          bsonType: 'int',
          description: 'ID del producto es requerido y debe ser de tipo int'
        },
        cantidad: {
          bsonType: 'int',
          description: 'cantidad en el inventario es requerida y debe ser de tipo integer'
        },
        created_by: {
          bsonType: 'objectId',
          description: 'ID del creador del inventario, si existe, debe ser de tipo ObjectId'
        },
        updated_by: {
          bsonType: 'objectId',
          description: 'ID del actualizador del inventario, si existe, debe ser de tipo ObjectId'
        },
        created_at: {
          bsonType: 'date',
          description: 'timestamp de creación del inventario, si existe, debe ser de tipo date'
        },
        updated_at: {
          bsonType: 'date',
          description: 'timestamp de actualización del inventario, si existe, debe ser de tipo date'
        },
        deleted_at: {
          bsonType: 'date',
          description: 'timestamp de eliminación del inventario, si existe, debe ser de tipo date'
        }
      }
    }
  }
})

use('db_bodegas_campus')
db.createCollection('productos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'productos object validation',
      required: ['id', 'nombre', 'descripcion', 'estado'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id de la bodega es requerido y debe ser de tipo integer'
        },
        nombre: {
          bsonType: 'string',
          description: 'nombre del producto es requerido y debe ser de tipo string'
        },
        descripcion: {
          bsonType: 'string',
          description: 'descripcion del producto es requerida y debe ser de tipo string'
        },
        estado: {
          bsonType: 'int',
          description: 'estado del producto es requerido y debe ser de tipo integer'
        },
        created_by: {
          bsonType: 'objectId',
          description: 'ID del creador del producto, si existe, debe ser de tipo ObjectId'
        },
        updated_by: {
          bsonType: 'objectId',
          description: 'ID del actualizador del producto, si existe, debe ser de tipo ObjectId'
        },
        created_at: {
          bsonType: 'date',
          description: 'timestamp de creación del producto, si existe, debe ser de tipo date'
        },
        updated_at: {
          bsonType: 'date',
          description: 'timestamp de actualización del producto, si existe, debe ser de tipo date'
        },
        deleted_at: {
          bsonType: 'date',
          description: 'timestamp de eliminación del producto, si existe, debe ser de tipo date'
        }
      }
    }
  }
})

use('db_bodegas_campus')
db.createCollection('usuarios', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'usuarios object validation',
      required: ['id', 'nombre', 'email', 'password', 'estado'],
      properties: {
        id: {
          bsonType: 'int',
          description: 'el id de la bodega es requerido y debe ser de tipo integer'
        },
        nombre: {
          bsonType: 'string',
          description: 'nombre del usuario es requerido y debe ser de tipo string'
        },
        email: {
          bsonType: 'string',
          description: 'correo electrónico del usuario es requerido y debe ser de tipo string'
        },
        email_verified_at: {
          bsonType: 'date',
          description: 'timestamp de verificación del correo electrónico, si existe, debe ser de tipo date'
        },
        foto: {
          bsonType: 'string',
          description: 'ruta de la foto del usuario, si existe, debe ser de tipo string'
        },
        password: {
          bsonType: 'string',
          description: 'contraseña del usuario es requerida y debe ser de tipo string'
        },
        estado: {
          bsonType: 'int',
          description: 'estado del usuario es requerido y debe ser de tipo integer'
        },
        created_by: {
          bsonType: 'objectId',
          description: 'ID del creador del usuario, si existe, debe ser de tipo objectId'
        },
        updated_by: {
          bsonType: 'objectId',
          description: 'ID del actualizador del usuario, si existe, debe ser de tipo objectId'
        },
        created_at: {
          bsonType: 'date',
          description: 'timestamp de creación del usuario, si existe, debe ser de tipo date'
        },
        updated_at: {
          bsonType: 'date',
          description: 'timestamp de actualización del usuario, si existe, debe ser de tipo date'
        },
        deleted_at: {
          bsonType: 'date',
          description: 'timestamp de eliminación del usuario, si existe, debe ser de tipo date'
        }
      }
    }
  }
})

// INSERCION DE DATOS
use('db_bodegas_campus')
db.usuarios.insertMany([{
  id: 1,
  nombre: 'Usuario A',
  email: 'usuario@example.com',
  email_verified_at: new Date(),
  foto: 'ruta/a/la/foto.jpg',
  password: 'contraseña_encriptada',
  estado: 1
}, {
  id: 2,
  nombre: 'Usuario B',
  email: 'usuarioB@example.com',
  email_verified_at: new Date(),
  foto: 'ruta/a/la/foto.jpg',
  password: 'contraseña_encriptada',
  estado: 1
}])

use('db_bodegas_campus')
db.productos.insertOne({
  id: 1,
  nombre: 'Producto A',
  descripcion: 'Descripción del Producto A',
  estado: 1
})

use('db_bodegas_campus')
db.productos.insertOne({
  id: 2,
  nombre: 'Producto B',
  descripcion: 'Descripción del Producto B',
  estado: 1
})

use('db_bodegas_campus')
const idUsuarioResponsable1 = db.usuarios.findOne({ nombre: 'Usuario A' }).id
const idUsuarioResponsable2 = db.usuarios.findOne({ nombre: 'Usuario B' }).id

db.bodegas.insertMany([
  {
    id: 1,
    nombre: 'Bodega Principal',
    id_responsable: idUsuarioResponsable1,
    estado: 1
  },
  {
    id: 2,
    nombre: 'Bodega Secundaria',
    id_responsable: idUsuarioResponsable2,
    estado: 1
  }
])

use('db_bodegas_campus')

const idBodega = db.bodegas.findOne({ nombre: 'Bodega Principal' }).id
const idBodega2 = db.bodegas.findOne({ nombre: 'Bodega Secundaria' }).id
const idProducto = db.productos.findOne({ nombre: 'Producto A' }).id

db.inventarios.insertMany([{
  id: 1,
  id_bodega: idBodega,
  id_producto: idProducto,
  cantidad: 200
}, {
  id: 2,
  id_bodega: idBodega2,
  id_producto: idProducto,
  cantidad: 100
}])

use('db_bodegas_campus')

const idBodega1 = db.bodegas.findOne({ nombre: 'Bodega Principal' }).id
// const idBodega2 = db.bodegas.findOne({ nombre: 'Bodega Secundaria' }).id
const inventario = db.inventarios.findOne({ id_bodega: idBodega, id_producto: idProducto }).id

db.historiales.insertOne({
  id: 1,
  cantidad: 100,
  id_bodega_origen: idBodega1,
  id_bodega_destino: idBodega2,
  id_inventario: inventario
})
