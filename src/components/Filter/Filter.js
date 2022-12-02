import { Radio } from 'antd';
import { useDispatch } from 'react-redux';

import { filterChange } from '../../redux/actions';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <Radio.Group defaultValue="cheapest" buttonStyle="solid" onChange={handleFilter}>
      <Radio.Button value="cheapest">Самый дешевый</Radio.Button>
      <Radio.Button value="quickest">Самый быстрый</Radio.Button>
      <Radio.Button value="c">Оптимальный</Radio.Button>
    </Radio.Group>
  );
};

export default Filter;
