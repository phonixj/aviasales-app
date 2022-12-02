import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';
import uniqid from 'uniqid';

import Ticket from '../Ticket';
import Loader from '../Loader';
import Error from '../Error';
import './TicketList.scss';
import ButtonShowMore from '../ButtonShowMore';
import { getSearchId, ticketLoad } from '../../redux/actions';

const TicketList = () => {
  const dispatch = useDispatch();

  const { searchId, tickets, showTicket } = useSelector(({ ticketReducer }) => {
    return ticketReducer;
  });

  const { filter } = useSelector(({ filterReducer }) => {
    return filterReducer;
  });

  const numberTransfer = useSelector(({ checkboxReducer }) => {
    return checkboxReducer;
  });

  const error = useSelector(({ appReducer }) => {
    return appReducer.error;
  });

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId());
    }
    if (searchId) {
      dispatch(ticketLoad(searchId));
    }
  }, [searchId]);

  const filterView = (items, sort) => {
    switch (sort) {
      case 'cheapest':
        return [...items].sort((a, b) => a.price - b.price);
      case 'quickest':
        return [...items].sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration + (a.segments[1].duration - b.segments[1].duration)
        );
      default:
        return items;
    }
  };

  const numberOfTransfer = (ticketsArr) => {
    if (Object.values(numberTransfer).every((item) => item)) {
      return ticketsArr;
    }
    const selectedFilters = [];
    Object.entries(numberTransfer).forEach((item, i) => {
      if (item[1]) {
        selectedFilters.push(i);
      }
    });

    return ticketsArr.filter((ticket) => {
      return (
        selectedFilters.includes(ticket.segments[0].stops.length) &&
        selectedFilters.includes(ticket.segments[1].stops.length)
      );
    });
  };

  const visibleTickets = numberOfTransfer(filterView(tickets, filter)).slice(0, showTicket);

  const ticketList = visibleTickets.map((ticket) => {
    const id = uniqid();
    const { price, carrier, segments } = ticket;
    return (
      <li key={id} className="ticket-list__item">
        <Ticket price={price} logo={carrier} ticketInfo={segments} />
      </li>
    );
  });
  if (error) {
    return <Error />;
  }
  return (
    <>
      <Loader />
      {ticketList.length ? (
        <>
          <ul className="ticket-list">{ticketList}</ul>
          <ButtonShowMore />
        </>
      ) : (
        <Alert style={{ marginTop: 20 }} message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
      )}
    </>
  );
};

export default TicketList;
