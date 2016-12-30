import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Text, Dropdown, SettingsItem } from '../../abstract-settings'
import { functions } from '../showdown'
import { editKeyPrefix } from './'

const Settings = ({ settings, showSettings }) => (
  showSettings &&
    <ListGroup>
      <SettingsItem
        title='Question duration (ms)'
        child={<Text settingsKey='durationMs'
          settings={settings} editKeyPrefix={editKeyPrefix}/>}
      />
      <SettingsItem
        title='Selection duration (ms)'
        child={<Text settingsKey='showdownDurationMs'
          settings={settings} editKeyPrefix={editKeyPrefix}/>}
      />
      <SettingsItem
        title='Selection animation'
        child={<Dropdown
          settingsKey='showdown'
          settings={settings}
          editKeyPrefix={editKeyPrefix}
          options={Object.keys(functions)}/>
        }
      />
      {settings.showdown === 'random' &&
        <SettingsItem
          title='Number of random hops'
          child={<Text settingsKey='randomN'
            settings={settings} editKeyPrefix={editKeyPrefix}/>}
        />
      }
    </ListGroup>
)

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  showSettings: PropTypes.bool.isRequired,
}

export default Settings