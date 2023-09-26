const mapping: Record<string, string> = {
  businesses: 'business',
  inventories: 'inventory',
  products: 'product',
  'purchase-orders': 'purchase_order',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
