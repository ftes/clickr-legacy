import React from 'react'
import { ButtonToolbar, ListGroup, ListGroupItem } from 'react-bootstrap'
import RequestBatteryLevel from '../battery-level/RequestBatteryLevelC'
import DeviceList from './device-list/DeviceListC'
import AddNewLine from './device/AddNewLineC'
import AddEmpty from './device/AddEmptyC'
import FA from 'react-fontawesome'

import './Devices.css'

const Devices = () =>
  <div>
    <DeviceList/>
    <ButtonToolbar>
      <RequestBatteryLevel/>
      <AddNewLine/>
      <AddEmpty/>
    </ButtonToolbar>
    <hr/>
    <div className='hints'>
      <h3>Hints</h3>
      <ListGroup>
        <ListGroupItem header='Add Devices'>
          Pressing the device button will add it to the list.
        </ListGroupItem>
        <ListGroupItem header='Edit Names'>
          You can edit device names by clicking on them.
        </ListGroupItem>
        <ListGroupItem header='Tab Navigation'>
          You can navigate between elements with the &nbsp;
          <FA name='exchange'/> Tab key.
        </ListGroupItem>
      </ListGroup>
    </div>
  </div>

export default Devices