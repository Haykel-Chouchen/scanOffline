import axios from 'axios'
import {synchronize} from '@nozbe/watermelondb/sync'
import {database} from './database'

// you should update the eventId

const eventId = ''
const SYNC_API_URL = `https://api.dev.ticketchainer.com/access-control/event/${eventId}/sync`
const token = ''
export async function sync() {
  await synchronize({
    database,
    pullChanges: async ({lastPulledAt}) => {
      const response = await axios.get(`${SYNC_API_URL}?lastPulledAt=${lastPulledAt}&token=${token}`)
      if (!(response.status === 200)) {
        throw new Error(response.statusText)
      }

      const {changes, timestamp} = await response.data
      return {changes, timestamp};
    },
    pushChanges: async ({changes, lastPulledAt}) => {
      const response = await axios.post(
        `${SYNC_API_URL}?lastPulledAt=${lastPulledAt}&token=${token}`,
        {
          method: 'POST',
          body: JSON.stringify(changes),
        },
      )
      
      if (!(response.status === 200)) {
        throw new Error(await response.statusText)
      }
    },
  })
}