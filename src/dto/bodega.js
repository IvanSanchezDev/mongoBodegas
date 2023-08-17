var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';
export class Bodega {
    constructor(data) {
        Object.assign(this, data);
        this.nombre = "Bodega San jorge";
        this.id_responsable = 1;
        this.estado = 1;
    }
}
__decorate([
    Expose({ name: 'nombreBodega' }),
    IsDefined({ message: 'El nombre de la bodega es obligatorio' }),
    IsString({ message: 'El nombre de la bodega debe ser de tipo string' }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'idResponsable' }),
    IsDefined({ message: 'El ID del responsable de la bodega es obligatorio' }),
    IsInt({ message: 'El estado de la bodega debe ser de tipo integer' }),
    __metadata("design:type", Number)
], Bodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'estadoBodega' }),
    IsDefined({ message: 'El estado de la bodega es obligatorio' }),
    IsInt({ message: 'El estado de la bodega debe ser de tipo integer' }),
    __metadata("design:type", Number)
], Bodega.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    __metadata("design:type", String)
], Bodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    __metadata("design:type", String)
], Bodega.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], Bodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Bodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], Bodega.prototype, "deleted_at", void 0);
