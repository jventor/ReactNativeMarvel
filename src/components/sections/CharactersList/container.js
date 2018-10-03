import CharactersList from './view'
import { connect } from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
    list: state.characters.list,
    page: state.characters.page,
    totalPages: state.characters.totalPages
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCharacterList: () => {
      dispatch(CharactersActions.fetchCharactersList())
    },
    onLoadMoreCharacters: page => {
      dispatch(CharactersActions.setPage(page))
      dispatch(CharactersActions.fetchCharactersList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersList)
