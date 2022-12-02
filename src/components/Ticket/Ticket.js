import { format, addMinutes } from 'date-fns';

import './Ticket.scss';

const Ticket = ({ price, logo, ticketInfo }) => {
  const { origin, destination, date, duration, stops } = ticketInfo[0];
  const {
    origin: originBack,
    destination: destinationBack,
    date: dateBack,
    duration: durationBack,
    stops: stopsBack,
  } = ticketInfo[1];

  const stopsTransfer = (stop) => {
    if (stop.length === 1) {
      return `${stop.length} Пересадка`;
    }
    if (stop.length > 1) {
      return `${stop.length} Пересадки`;
    }
    return '0 Пересадок';
  };

  return (
    <div className="ticket">
      <header className="ticket__header">
        <span className="ticket__price">{price}</span>
        <img src={`//pics.avs.io/99/36/${logo}.png`} alt="logo" />
      </header>
      <main className="ticket__info info">
        <ul className="info__list">
          <li className="info__item">
            <span className="info__city">{`${origin} - ${destination}`}</span>
            <span className="info__time">{`${format(new Date(date), 'HH:mm')} - 
            ${format(addMinutes(new Date(date), duration), 'HH:mm')}`}</span>
          </li>
          <li className="info__item">
            <span className="info__path">В пути</span>
            <span className="info__time">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</span>
          </li>
          <li className="info__item">
            <span className="info__transfer">{stopsTransfer(stops)}</span>
            <span className="info__transfer-city">{stops.join(', ')}</span>
          </li>
        </ul>
        <ul className="info__list">
          <li className="info__item">
            <span className="info__city">{`${originBack} - ${destinationBack}`}</span>
            <span className="info__time">{`${format(new Date(dateBack), 'HH:mm')} - 
            ${format(addMinutes(new Date(dateBack), durationBack), 'HH:mm')}`}</span>
          </li>
          <li className="info__item">
            <span className="info__path">В пути</span>
            <span className="info__time">{`${Math.floor(durationBack / 60)}ч ${durationBack % 60}м`}</span>
          </li>
          <li className="info__item">
            <span className="info__transfer">{stopsTransfer(stopsBack)}</span>
            <span className="info__transfer-city">{stopsBack.join(', ')}</span>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Ticket;
