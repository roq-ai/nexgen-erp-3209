interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Purchasing Manager', 'Inventory Manager'],
  tenantName: 'Business',
  applicationName: 'nexgen erp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user',
    'Manage business',
    'Manage product',
    'Manage inventory',
    'Manage purchase order',
    'Manage report',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1fec7f62-0c61-4adc-ac32-cb2a42210d03',
};
