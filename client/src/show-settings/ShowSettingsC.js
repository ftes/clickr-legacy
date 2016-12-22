import { connect } from 'react-redux'
import Button from '../components/Button'
import { toggle } from './'

const local = (state) => state.showSettings

const mapStateToProps = (state) => ({
  value: local(state),
  label: local(state) ? 'Hide Settings' : 'Show Settings',
  faIcon: 'wrench',
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(toggle())
})

const ShowSettingsC = connect(mapStateToProps, mapDispatchToProps)(Button)

export default ShowSettingsC