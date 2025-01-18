export default {
  name: 'salesRecord',
  type: 'document',
  title: 'Sales Record',
  fields: [
    { name: 'productId', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
    { name: 'userId', type: 'string', title: 'User ID' },
    { name: 'quantity', type: 'number', title: 'Quantity Sold' },
    { name: 'totalAmount', type: 'number', title: 'Total Amount' },
    { name: 'costPrice', type: 'number', title: 'Cost Price' },
    { name: 'profit', type: 'number', title: 'Profit Per Item' },
    { name: 'profitPerSale', type: 'number', title: 'Total Profit for Sale' },
    { name: 'saleDate', type: 'datetime', title: 'Sale Date' },
    { name: 'status', type: 'string', title: 'Status', options: { list: ['Completed', 'Pending', 'Failed'] } }
  ]
};