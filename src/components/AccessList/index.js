import React from 'react'
import { compose } from 'recompose'
import withObservables from '@nozbe/with-observables'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import ListItem from 'components/ListItem'
import style from './style'

const RawBlogItem = ({ accessItem }) => (
  <ListItem accessItem={accessItem} />
)

const AccessItem = compose(
  withObservables(['accessItem'], ({ accessItem }) => ({
    accessItem: accessItem.observe(),
  })),
)(RawBlogItem)

const AccessList = ({ accessItems}) => (
  <div className={style.root}>
    <table>
    <tbody>
    <tr>
    <th>Id</th>
      <th>code</th>
      <th>direction</th>
      <th>status</th>
    </tr>
    
    {accessItems.map((accessItem) => (
      <AccessItem key={accessItem.id} accessItem={accessItem} />
    ))}
    </tbody>
</table>
    {!accessItems.length && <span className={style.placeholder}>Click “Synchronize” above!</span>}
  </div>
)

const enhance = compose(
  withObservables(['search'], ({ database}) => ({
    accessItems: database.collections
      .get('access_control')
      .query(),
  }))
)

export default withDatabase(enhance(AccessList))
