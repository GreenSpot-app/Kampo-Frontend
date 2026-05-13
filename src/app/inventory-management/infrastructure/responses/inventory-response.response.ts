export interface InventoryResponse {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
  status: string;
}

export interface InventoryResource {
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
}
