import { InventoryStatus } from '../enums/inventory-status.enum';

export class Inventory {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private quantity: number,
    private readonly unit: string,
    private readonly minStock: number,
    private status: InventoryStatus,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getUnit(): string {
    return this.unit;
  }

  getMinStock(): number {
    return this.minStock;
  }

  getStatus(): InventoryStatus {
    return this.status;
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
    this.status = Inventory.resolveStatus(quantity, this.minStock);
  }

  static resolveStatus(quantity: number, minStock: number): InventoryStatus {
    if (quantity <= 0) {
      return InventoryStatus.OUT_OF_STOCK;
    }
    if (quantity <= minStock) {
      return InventoryStatus.LOW_STOCK;
    }
    return InventoryStatus.AVAILABLE;
  }
}
