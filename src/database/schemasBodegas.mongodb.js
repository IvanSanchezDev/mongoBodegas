use('db_bodegas_campus')
db.createCollection('bodegas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'bodegas object validation',
      required: ['nombre', 'id_responsable', 'estado'],
      properties: {
        nombre: {
          bsonType: 'string',
          description: 'nombre de la bodega debe ser obligatorio y de tipo string'
        },
        id_responsable: {
          bsonType: 'objectId',
          description: 'ID del responsable de la bodega es requerido y debe ser de tipo objectId'
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
      required: ['cantidad', 'id_bodega_origen', 'id_bodega_destino', 'id_inventario'],
      properties: {
        cantidad: {
          bsonType: 'int',
          description: 'cantidad en el histórico es requerida y debe ser de tipo integer'
        },
        id_bodega_origen: {
          bsonType: 'objectId',
          description: 'ID de la bodega de origen es requerido y debe ser de tipo ObjectId'
        },
        id_bodega_destino: {
          bsonType: 'objectId',
          description: 'ID de la bodega de destino es requerido y debe ser de tipo ObjectId'
        },
        id_inventario: {
          bsonType: 'objectId',
          description: 'ID del inventario es requerido y debe ser de tipo ObjectId'
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
      required: ['id_bodega', 'id_producto', 'cantidad'],
      properties: {
        id_bodega: {
          bsonType: 'objectId',
          description: 'ID de la bodega es requerido y debe ser de tipo ObjectId'
        },
        id_producto: {
          bsonType: 'objectId',
          description: 'ID del producto es requerido y debe ser de tipo ObjectId'
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
      required: ['nombre', 'descripcion', 'estado'],
      properties: {
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
      required: ['nombre', 'email', 'password', 'estado'],
      properties: {
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
  nombre: 'Usuario A',
  email: 'usuario@example.com',
  email_verified_at: new Date(),
  foto: 'ruta/a/la/foto.jpg',
  password: 'contraseña_encriptada',
  estado: 1
}, {
  nombre: 'Usuario B',
  email: 'usuarioB@example.com',
  email_verified_at: new Date(),
  foto: 'ruta/a/la/foto.jpg',
  password: 'contraseña_encriptada',
  estado: 1
}])

use('db_bodegas_campus')
db.productos.insertOne({
  nombre: 'Producto A',
  descripcion: 'Descripción del Producto A',
  estado: 1
})

use('db_bodegas_campus')
db.productos.insertOne({
  nombre: 'Producto B',
  descripcion: 'Descripción del Producto B',
  estado: 1
})

use('db_bodegas_campus')
const idUsuarioResponsable1 = db.usuarios.findOne({ nombre: 'Usuario A' })._id
const idUsuarioResponsable2 = db.usuarios.findOne({ nombre: 'Usuario B' })._id

db.bodegas.insertMany([
  {
    nombre: 'Bodega Principal',
    id_responsable: idUsuarioResponsable1,
    estado: 1
  },
  {
    nombre: 'Bodega Secundaria',
    id_responsable: idUsuarioResponsable2,
    estado: 1
  }
])

use('db_bodegas_campus')

const idBodega = db.bodegas.findOne({ nombre: 'Bodega Principal' })._id
const idProducto = db.productos.findOne({ nombre: 'Producto A' })._id

db.inventarios.insertOne({
  id_bodega: idBodega,
  id_producto: idProducto,
  cantidad: 200
})

use('db_bodegas_campus')

const idBodega1 = db.bodegas.findOne({ nombre: 'Bodega Principal' })._id
const idBodega2 = db.bodegas.findOne({ nombre: 'Bodega Secundaria' })._id

db.historiales.insertOne({
  cantidad: 100,
  id_bodega_origen: idBodega1,
  id_bodega_destino: idBodega2,
  id_inventario: ObjectId('64da2e43b3840001fc8a89c7')
})
