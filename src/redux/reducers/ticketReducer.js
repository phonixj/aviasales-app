import { GET_SEARCH_ID, TICKET_LOAD, TICKET_SHOW_MORE } from '../actionsTypes';

const initialState = {
  tickets: [],
  searchId: '',
  showTicket: 5,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return { ...state, searchId: action.searchId };
    case TICKET_LOAD:
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    case TICKET_SHOW_MORE:
      return { ...state, showTicket: state.showTicket + 5 };
    default:
      return state;
  }
};

export default ticketReducer;
