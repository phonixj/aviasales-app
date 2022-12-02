import { useDispatch } from 'react-redux';

import { ticketShowMore } from '../../redux/actions';
import './ButtonShowMore.scss';

const ButtonShowMore = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ticketShowMore());
  };

  return (
    <button type="button" className="show-more" onClick={handleClick}>
      Показать еще 5 билетов!
    </button>
  );
};

export default ButtonShowMore;
