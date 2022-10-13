import React from 'react';
import styled from 'styled-components';
const Maping = ({ data, startDate, day }) => {
  let price = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div>
      <Days id={day} key={day}>
        {price.length > 0 ? '₩' : ''}
        {price}
      </Days>
    </div>
  );
};

export default Maping;

const Days = styled.div`
  word-break: break-all;
  width: 40px;
  text-align: center;
  font-size: 12px;
  color: #00a799;
`;
