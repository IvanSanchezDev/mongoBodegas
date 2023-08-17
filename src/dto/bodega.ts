import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export class Bodega {
    @Expose({ name: 'nombreBodega' })
    @IsDefined({ message: 'El nombre de la bodega es obligatorio' })
    @IsString({ message: 'El nombre de la bodega debe ser de tipo string' })
    nombre: string;

    @Expose({ name: 'idResponsable' })
    @IsDefined({ message: 'El ID del responsable de la bodega es obligatorio' })
    id_responsable: string; 

    @Expose({ name: 'estadoBodega' })
    @IsDefined({ message: 'El estado de la bodega es obligatorio' })
    @IsInt({ message: 'El estado de la bodega debe ser de tipo integer' })
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
    
    constructor(data: Partial<Bodega>) {
        Object.assign(this, data);
        this.nombre="Bodega San jorge";
        this.id_responsable="fg5f8rs24v1b36s5";
        this.estado=1
    }
}
