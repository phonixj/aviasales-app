import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import './Loader.scss';

const Loader = () => {
  const isLoading = useSelector(({ appReducer }) => {
    return appReducer.loading;
  });

  return (
    <div className="container">
      <Spin spinning={isLoading} size="small" />
    </div>
  );
};

export default Loader;
