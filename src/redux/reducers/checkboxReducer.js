import { CHECKBOX_ALL, CHECKBOX_CHANGE } from '../actionsTypes';

const initialState = {
  isNonStopChecked: true,
  isOneStopChecked: true,
  isTwoStopChecked: true,
  isThreeStopChecked: true,
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX_CHANGE: {
      return { ...state, [action.checkbox]: !state[action.checkbox] };
    }
    case CHECKBOX_ALL:
      return {
        ...state,
        isNonStopChecked: action.isCheck,
        isOneStopChecked: action.isCheck,
        isTwoStopChecked: action.isCheck,
        isThreeStopChecked: action.isCheck,
      };
    default:
      return state;
  }
};

export default checkboxReducer;
