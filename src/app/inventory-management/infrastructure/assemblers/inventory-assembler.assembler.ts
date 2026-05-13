import { Inventory } from '../../domain/model/entities/inventory.entity';
import { InventoryStatus } from '../../domain/model/enums/inventory-status.enum';
import { InventoryResource, InventoryResponse } from '../responses/inventory-response.response';

export class InventoryAssembler {
  toEntityFromResponse(response: InventoryResponse): Inventory {
    const status = InventoryAssembler.parseStatus(response.status, response.quantity, response.minStock);
    return new Inventory(
      response.id,
      response.name,
      response.quantity,
      response.unit,
      response.minStock ?? 0,
      status,
    );
  }

  toResourceFromEntity(entity: Inventory): InventoryResource {
    return {
      name: entity.getName(),
      quantity: entity.getQuantity(),
      unit: entity.getUnit(),
      minStock: entity.getMinStock(),
    };
  }

  private static parseStatus(raw: string, quantity: number, minStock: number): InventoryStatus {
    const upper = raw?.toUpperCase() as keyof typeof InventoryStatus;
    if (upper && upper in InventoryStatus) {
      return InventoryStatus[upper];
    }
    return Inventory.resolveStatus(quantity, minStock);
  }
}
