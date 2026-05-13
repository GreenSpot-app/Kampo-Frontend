import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Inventory } from '../domain/model/entities/inventory.entity';
import { OrderInput } from '../domain/model/entities/order-input.entity';
import { Supplier } from '../domain/model/entities/supplier.entity';
import { InventoryAssembler } from './assemblers/inventory-assembler.assembler';
import { OrderInputAssembler } from './assemblers/order-input-assembler.assembler';
import { SupplierAssembler } from './assemblers/supplier-assembler.assembler';
import { InventoryResponse } from './responses/inventory-response.response';
import { OrderInputResponse } from './responses/order-input-response.response';
import { SupplierResponse } from './responses/supplier-response.response';

@Injectable({ providedIn: 'root' })
export class InventoryApi {
  private readonly inventoryAssembler = new InventoryAssembler();
  private readonly supplierAssembler = new SupplierAssembler();
  private readonly orderAssembler = new OrderInputAssembler();

  private readonly inventoriesEndpoint = '/api/inventories';
  private readonly suppliersEndpoint = '/api/suppliers';
  private readonly ordersEndpoint = '/api/orders-input';

  constructor(private readonly http: HttpClient) {}

  getInventories(): Observable<Inventory[]> {
    return this.http
      .get<InventoryResponse[]>(this.inventoriesEndpoint)
      .pipe(map((list) => list.map((dto) => this.inventoryAssembler.toEntityFromResponse(dto))));
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http
      .get<SupplierResponse[]>(this.suppliersEndpoint)
      .pipe(map((list) => list.map((dto) => this.supplierAssembler.toEntityFromResponse(dto))));
  }

  getOrders(): Observable<OrderInput[]> {
    return this.http
      .get<OrderInputResponse[]>(this.ordersEndpoint)
      .pipe(map((list) => list.map((dto) => this.orderAssembler.toEntityFromResponse(dto))));
  }

  updateStock(inventoryId: number, quantity: number): Observable<Inventory> {
    return this.http
      .patch<InventoryResponse>(`${this.inventoriesEndpoint}/${inventoryId}/stock`, { quantity })
      .pipe(map((dto) => this.inventoryAssembler.toEntityFromResponse(dto)));
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    const body = this.supplierAssembler.toResourceFromEntity(supplier);
    return this.http
      .post<SupplierResponse>(this.suppliersEndpoint, body)
      .pipe(map((dto) => this.supplierAssembler.toEntityFromResponse(dto)));
  }

  orderInput(inventoryId: number, supplierId: number, quantity: number): Observable<OrderInput> {
    const body: { inventoryId: number; supplierId: number; quantity: number } = {
      inventoryId,
      supplierId,
      quantity,
    };
    return this.http
      .post<OrderInputResponse>(this.ordersEndpoint, body)
      .pipe(map((dto) => this.orderAssembler.toEntityFromResponse(dto)));
  }

  receiveInput(orderId: number, quantity: number): Observable<OrderInput> {
    return this.http
      .patch<OrderInputResponse>(`${this.ordersEndpoint}/${orderId}/receive`, { quantity })
      .pipe(map((dto) => this.orderAssembler.toEntityFromResponse(dto)));
  }

  registerInput(inventory: Inventory): Observable<Inventory> {
    const body = this.inventoryAssembler.toResourceFromEntity(inventory);
    return this.http
      .post<InventoryResponse>(this.inventoriesEndpoint, body)
      .pipe(map((dto) => this.inventoryAssembler.toEntityFromResponse(dto)));
  }
}
