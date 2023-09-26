import { ProductInterface } from 'interfaces/product';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseOrderInterface {
  id?: string;
  product_id: string;
  quantity: number;
  total_price: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  business?: BusinessInterface;
  _count?: {};
}

export interface PurchaseOrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  business_id?: string;
}
