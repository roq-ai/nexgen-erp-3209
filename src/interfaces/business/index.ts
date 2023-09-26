import { InventoryInterface } from 'interfaces/inventory';
import { ProductInterface } from 'interfaces/product';
import { PurchaseOrderInterface } from 'interfaces/purchase-order';
import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  product?: ProductInterface[];
  purchase_order?: PurchaseOrderInterface[];
  report?: ReportInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    product?: number;
    purchase_order?: number;
    report?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
