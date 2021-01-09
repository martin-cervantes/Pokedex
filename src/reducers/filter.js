import { CHANGE_FILTER } from '../actions';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.pokemon_type;
    default:
      return state;
  }
};

export default filterReducer;
