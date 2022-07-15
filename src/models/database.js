import { Database } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'
import { mySchema } from 'models/schema'
import AccessControl from 'models/AccessControl'

const adapter = new LokiJSAdapter({
  dbName: 'WatermelonDemo',
  schema: mySchema,
})

export const database = new Database({
  adapter,
  modelClasses: [AccessControl],
  actionsEnabled: true,
})
