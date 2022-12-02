import './NumberTransfer.scss';
import { useDispatch, useSelector } from 'react-redux';

import { checkboxAll, checkboxChange } from '../../redux/actions';

const NumberTransfer = () => {
  const { isNonStopChecked, isOneStopChecked, isTwoStopChecked, isThreeStopChecked } = useSelector(
    ({ checkboxReducer }) => {
      return checkboxReducer;
    }
  );
  const dispatch = useDispatch();

  const checkboxList = [
    { name: 'Без пересадок', checked: isNonStopChecked, value: 'isNonStopChecked' },
    { name: '1 пересадка', checked: isOneStopChecked, value: 'isOneStopChecked' },
    { name: '2 пересадки', checked: isTwoStopChecked, value: 'isTwoStopChecked' },
    { name: '3 пересадки', checked: isThreeStopChecked, value: 'isThreeStopChecked' },
  ];

  const handleCheckbox = (e) => {
    dispatch(checkboxChange(e.target.value));
  };
  const handleAllCheck = (e) => {
    dispatch(checkboxAll(e.target.checked));
  };

  const checkboxes = checkboxList.map(({ name, checked, value }) => {
    return (
      <label key={name} className="check">
        <input value={value} type="checkbox" className="check__input" onChange={handleCheckbox} checked={checked} />
        <span className="check__box" />
        {name}
      </label>
    );
  });

  return (
    <div className="checkboxlist">
      <span className="checkboxlist__title">Количество пересадок</span>
      <label className="check">
        <input
          value="Все"
          type="checkbox"
          className="check__input"
          onChange={handleAllCheck}
          checked={checkboxList.every((item) => item.checked)}
        />
        <span className="check__box" />
        Все
      </label>
      {checkboxes}
    </div>
  );
};

export default NumberTransfer;
