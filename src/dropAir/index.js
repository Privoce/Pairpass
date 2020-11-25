import React, {useState} from 'react';

const DropAir = () => {
  const [num, setInit] = useState('1');

  return (
      <div>
        <div className="test">{num}</div>
      </div>);
};

export default DropAir;
