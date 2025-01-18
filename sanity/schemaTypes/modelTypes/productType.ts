import { defineType } from 'sanity';

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    { name: 'id', type: 'string', title: 'Product ID' },
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'category', type: 'string', title: 'Category' },
    {
      name: 'dimensions',
      type: 'object',
      title: 'Dimensions',
      fields: [
        { name: 'length', type: 'number', title: 'Length' },
        { name: 'height', type: 'number', title: 'Height' },
        { name: 'width', type: 'number', title: 'Width' },
        { name: 'weight', type: 'number', title: 'Weight' },
        {
          name: 'unit',
          type: 'string',
          title: 'Unit',
          options: { list: ['cm', 'kg', 'in', 'lbs'] },
        },
        {
          name: 'distanceUnit',
          type: 'string',
          title: 'Distance Unit',
          options: { list: ['cm', 'm', 'in', 'ft'] },
        },
      ],
    },
    { name: 'material', type: 'string', title: 'Material' },
    { name: 'color', type: 'string', title: 'Color' },
    { name: 'stock', type: 'number', title: 'Stock' },
    { name: 'image', type: 'image', title: 'Image' , options: {
      hotspot: true
    }},
    { name: 'rating', type: 'number', title: 'Rating' },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [
        {
          type: 'string',
        },
      ],
    },
    { name: 'createdAt', type: 'datetime', title: 'Created At' },
    { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
  ],
});