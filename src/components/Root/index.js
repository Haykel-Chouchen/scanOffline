import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import Button from 'components/Button'
import AccessList from 'components/AccessList'
import {sync} from '../../models/sync'
import style from './style'
import { resetDB } from '../../models/generate'

class Root extends Component {
  resetData = async () => {
    await resetDB(this.props.database)
    alert(`reset DB !`)
  }

syncData = async () => {
  console.log('*********sync started********')
  await sync()
  console.log('*********sync ended********')
}

  render() {

    return (
      
      <Router basename="/">
        <div className={style.root}>
          <div className={style.headerBtnGroup}>
            <Button title="Reset Data"
              onClick={this.resetData}
            />
            <Button title="Synchronize"
              onClick={this.syncData}
            />
          </div>

          <div className={style.content}>
              <AccessList />
          </div>
        </div>
      </Router>
    )
  }
}

export default withDatabase(Root)
