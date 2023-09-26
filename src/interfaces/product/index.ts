import { InventoryInterface } from 'interfaces/inventory';
import { PurchaseOrderInterface } from 'interfaces/purchase-order';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  purchase_order?: PurchaseOrderInterface[];
  business?: BusinessInterface;
  _count?: {
    inventory?: number;
    purchase_order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  business_id?: string;
}
