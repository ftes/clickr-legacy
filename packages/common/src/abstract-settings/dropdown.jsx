import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { save } from './';

// component
export const Dropdown = ({
  settingsKey, settings, options, onChange,
  editKeyPrefix,
}) => (
  <select
    className="form-control"
    value={settings[settingsKey]}
    onChange={event =>
      onChange(editKeyPrefix, settingsKey, event.target.value)}
  >
    {options.map(o =>
      <option value={o} key={o}>{o}</option>)}
  </select>
);

Dropdown.propTypes = {
  settingsKey: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  editKeyPrefix: PropTypes.string.isRequired,
};

// Container
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onChange: (editKeyPrefix, key, value) =>
    dispatch(save(editKeyPrefix, key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
