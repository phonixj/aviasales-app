import {
  FILTER_CHANGE,
  CHECKBOX_CHANGE,
  CHECKBOX_ALL,
  TICKET_LOAD,
  GET_SEARCH_ID,
  TICKET_SHOW_MORE,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from './actionsTypes';

export const filterChange = (filter) => {
  return { type: FILTER_CHANGE, filter };
};

export const checkboxChange = (checkbox) => {
  return { type: CHECKBOX_CHANGE, checkbox };
};

export const checkboxAll = (isCheck) => {
  return { type: CHECKBOX_ALL, isCheck };
};

export const loaderOn = () => {
  return { type: LOADER_DISPLAY_ON };
};

export const loaderOff = () => {
  return { type: LOADER_DISPLAY_OFF };
};

export const errorOn = (error) => {
  return { type: ERROR_DISPLAY_ON, error };
};

export const errorOff = () => {
  return { type: ERROR_DISPLAY_OFF };
};

export const getSearchId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      const { searchId } = await response.json();
      dispatch({ type: GET_SEARCH_ID, searchId });
    } catch (e) {
      dispatch(errorOn('Ошибка получения ID для поиска'));
    }
  };
};

export const ticketLoad = (searchId) => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      if (response.status === 500) {
        throw new Error('500');
      }
      if (!response.ok) {
        throw new Error();
      }
      const { tickets, stop } = await response.json();
      if (!stop) {
        dispatch(ticketLoad(searchId));
      }
      if (tickets.length > 0) {
        dispatch({ type: TICKET_LOAD, tickets });
      }
      if (stop) {
        dispatch(loaderOff());
      }
    } catch (e) {
      if (e.message === '500') {
        dispatch(ticketLoad(searchId));
      } else {
        dispatch(loaderOff());
        dispatch(errorOn('Не можем загрузить список билетов. Скоро исправим.'));
      }
    }
  };
};

export const ticketShowMore = () => {
  return { type: TICKET_SHOW_MORE };
};
