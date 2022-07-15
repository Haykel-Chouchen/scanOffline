import React from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'

const handleClick = async (id, database) => {
const accessCollection = await database.collections.get('access_control')
const actions = [
  database.action(async () => {
    try {
      const access = await accessCollection.find(id)
      // if it exists, update it
      await access.update(access => {
        access.direction = 'IN'
        access.status = 'VALID'
      })
    } catch (error) {
      throw error
    }
  }),
]
await Promise.all(actions)
}
const ListItem = ({ accessItem, database }) => (
  
    <tr>
      <td onClick={() => handleClick(accessItem.id, database)}>{accessItem.id}</td>
      <td>{accessItem.code}</td>
      <td>{accessItem.direction}</td>
      <td>{accessItem.status}</td>
    </tr>

)

export default withDatabase(ListItem)
