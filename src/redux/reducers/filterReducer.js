import { FILTER_CHANGE } from '../actionsTypes';

const initialState = {
  filter: 'cheapest',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
