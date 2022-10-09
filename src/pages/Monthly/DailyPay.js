import React from 'react';
import styled from 'styled-components';
import Maping from './Maping';

const DailyPay = ({ startDate, data }) => {
  return (
    <BaseBox>
      <One>
        {data[0]?.map(item => {
          return (
            <Maping
              data={item.price}
              day={item.day}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </One>
      <Two>
        {data[1]?.map(item => {
          return (
            <Maping
              data={item.price}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </Two>
      <Three>
        {data[2]?.map(item => {
          return (
            <Maping
              data={item.price}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </Three>
      <Four>
        {data[3]?.map(item => {
          return (
            <Maping
              data={item.price}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </Four>
      <Five>
        {data[4]?.map(item => {
          return (
            <Maping
              data={item.price}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </Five>
      <Six>
        {data[5]?.map(item => {
          return (
            <Maping
              data={item.price}
              startDate={startDate}
              key={Math.random()}
            />
          );
        })}
      </Six>
    </BaseBox>
  );
};

export default DailyPay;

const BaseBox = styled.div`
  position: relative;
`;
const One = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 150px;
  left: 5px;
`;
const Two = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 225px;
  left: 5px;
`;
const Three = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 295px;
  left: 5px;
`;
const Four = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 370px;
  left: 5px;
`;
const Five = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 440px;
  left: 5px;
`;
const Six = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 96%;
  top: 515px;
  left: 5px;
`;
