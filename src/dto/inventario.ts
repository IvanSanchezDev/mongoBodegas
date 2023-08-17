import { Expose } from 'class-transformer';
import { IsDefined, IsInt } from 'class-validator';

export class Inventario {
    @Expose({ name: 'idBodega' })
    @IsDefined({ message: 'El ID de la bodega es obligatorio' })
    id_bodega: string; 

    @Expose({ name: 'idProducto' })
    @IsDefined({ message: 'El ID del producto es obligatorio' })
    id_producto: string; 

    @Expose({ name: 'cantidadInventario' })
    @IsDefined({ message: 'La cantidad en el inventario es obligatoria' })
    @IsInt({ message: 'La cantidad en el inventario debe ser de tipo integer' })
    cantidad: number;

    @Expose({ name: 'created_by' })
    created_by?: string; 

    @Expose({ name: 'updated_by' })
    updated_by?: string; 

    @Expose({ name: 'created_at' })
    created_at?: Date;

    @Expose({ name: 'updated_at' })
    updated_at?: Date;

    @Expose({ name: 'deleted_at' })
    deleted_at?: Date;
    
    constructor(data: Partial<Inventario>) {
        Object.assign(this, data);
        this.id_bodega="fdg5611dfz56161zdf";
        this.id_producto="dfsdgd511fbnf525";
        this.cantidad=95
    }
}
