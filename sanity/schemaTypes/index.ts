import { type SchemaTypeDefinition } from 'sanity'
import productType from './modelTypes/productType'
import salesRecord from './modelTypes/salesRecord'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,salesRecord],
}
