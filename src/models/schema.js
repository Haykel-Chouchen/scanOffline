import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 5,
  tables: [
    tableSchema({
      name: 'access_control',
      columns: [{ name: 'code', type: 'string' },
                {name: 'direction', type: 'string'},
                {name: 'status', type: 'string'},
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
              ],
    }),
  ],
})
