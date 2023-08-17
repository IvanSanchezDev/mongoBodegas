import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export class Producto {
    @Expose({ name: 'nombreProducto' })
    @IsDefined({ message: 'El nombre del producto es obligatorio' })
    @IsString({ message: 'El nombre del producto debe ser de tipo string' })
    nombre: string;

    @Expose({ name: 'descripcionProducto' })
    @IsDefined({ message: 'La descripción del producto es obligatoria' })
    @IsString({ message: 'La descripción del producto debe ser de tipo string' })
    descripcion: string;

    @Expose({ name: 'estadoProducto' })
    @IsDefined({ message: 'El estado del producto es obligatorio' })
    @IsInt({ message: 'El estado del producto debe ser de tipo integer' })
    estado: number;

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
    
    constructor(data: Partial<Producto>) {
        Object.assign(this, data);
        this.nombre="Jabon";
        this.descripcion="Jabon limpio para la ropa";
        this.estado=1
    }
}
