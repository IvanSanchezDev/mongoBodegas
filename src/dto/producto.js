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
export class Producto {
    constructor(data) {
        Object.assign(this, data);
        this.nombre = "Jabon";
        this.descripcion = "Jabon limpio para la ropa";
        this.estado = 1;
    }
}
__decorate([
    Expose({ name: 'nombreProducto' }),
    IsDefined({ message: 'El nombre del producto es obligatorio' }),
    IsString({ message: 'El nombre del producto debe ser de tipo string' }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcionProducto' }),
    IsDefined({ message: 'La descripción del producto es obligatoria' }),
    IsString({ message: 'La descripción del producto debe ser de tipo string' }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estadoProducto' }),
    IsDefined({ message: 'El estado del producto es obligatorio' }),
    IsInt({ message: 'El estado del producto debe ser de tipo integer' }),
    __metadata("design:type", Number)
], Producto.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    __metadata("design:type", String)
], Producto.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    __metadata("design:type", String)
], Producto.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], Producto.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Producto.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], Producto.prototype, "deleted_at", void 0);
