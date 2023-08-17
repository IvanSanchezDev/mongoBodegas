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
import { IsDefined, IsInt } from 'class-validator';
export class Inventario {
    constructor(data) {
        Object.assign(this, data);
        this.id_bodega = "fdg5611dfz56161zdf";
        this.id_producto = "dfsdgd511fbnf525";
        this.cantidad = 95;
    }
}
__decorate([
    Expose({ name: 'idBodega' }),
    IsDefined({ message: 'El ID de la bodega es obligatorio' }),
    __metadata("design:type", String)
], Inventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'idProducto' }),
    IsDefined({ message: 'El ID del producto es obligatorio' }),
    __metadata("design:type", String)
], Inventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'cantidadInventario' }),
    IsDefined({ message: 'La cantidad en el inventario es obligatoria' }),
    IsInt({ message: 'La cantidad en el inventario debe ser de tipo integer' }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    __metadata("design:type", String)
], Inventario.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    __metadata("design:type", String)
], Inventario.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], Inventario.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Inventario.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], Inventario.prototype, "deleted_at", void 0);
