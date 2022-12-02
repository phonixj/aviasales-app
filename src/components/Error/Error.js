import { Alert } from 'antd';
import { useSelector } from 'react-redux';

import './Error.scss';

const Error = () => {
  const error = useSelector(({ appReducer }) => {
    return appReducer.error;
  });
  if (error) {
    return (
      <div className="error-message">
        <Alert message={error} type="error" />
      </div>
    );
  }
  return null;
};

export default Error;
