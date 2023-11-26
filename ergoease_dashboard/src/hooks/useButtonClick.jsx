import { useState } from 'react';

const useButtonClick = () => {
  const [buttonClickData, setButtonClickData] = useState(null);

  const handleButtonClick = (data) => {
    setButtonClickData(data);
  };

  return {
    buttonClickData,
    handleButtonClick,
  };
};

export default useButtonClick;