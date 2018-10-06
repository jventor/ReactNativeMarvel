import { connect } from 'react-redux'
import CharacterAdd from './view.js'
import * as CharactersActions from '../../../redux/characters/actions'

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    postNewCharacter: value => {
      dispatch(CharactersActions.postCharacter(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterAdd)
