import { type SchemaTypeDefinition } from 'sanity'
import game from '../schemas/game'
import member from '../schemas/member'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [game, member],
}
