import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';

function DateTap({ basicInfo }) {
  const engAirport = basicInfo => {
    if (basicInfo === '김해') return 'PUS';
    if (basicInfo === '제주') return 'CJU';
    if (basicInfo === '김포') return 'GMP';
  };

  console.log(moment(basicInfo.startDate).format('LT'));

  const day = time => {
    let result = moment(time).format('dddd');
    result = result.slice(0, 1);
    return result;
  };

  const monthDate = time => {
    let result = moment(time).format('MMM Do YY');
    result = result.slice(0, result.indexOf('일') + 1);
    return result;
  };

  console.log(basicInfo);

  return (
    <OuterBox>
      <SearchingBox>
        <SearchImgBox>
          <img src="/images/search.png" alt="search" />
        </SearchImgBox>
        <SearchDescBox>
          <Direction>
            {basicInfo.start} ({engAirport(basicInfo.start)}) - {basicInfo.end}{' '}
            ({engAirport(basicInfo.end)})
          </Direction>
          <SeatInfo>
            <span>성인 </span>
            {basicInfo.seat}
          </SeatInfo>
        </SearchDescBox>
      </SearchingBox>
      <DateFilterBox>
        <Departure>
          <img src="/images/leftArrow.png" alt="arrow" />
          <span>
            {monthDate(basicInfo.startDate)} ({day(basicInfo.startDate)})
          </span>
          <img src="/images/rightArrow.png" alt="arrow" />
        </Departure>
        {basicInfo.radio === '왕복' ? (
          <Arrival>
            <img src="/images/leftArrow.png" alt="arrow" />
            <span>
              {monthDate(basicInfo.endDate)} ({day(basicInfo.endDate)})
            </span>
            <img src="/images/rightArrow.png" alt="arrow" />
          </Arrival>
        ) : null}
      </DateFilterBox>
    </OuterBox>
  );
}

export default DateTap;

const OuterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #042759;

  &:hover {
    cursor: pointer;
  }
`;

const SearchingBox = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
`;

const SearchImgBox = styled.div`
  ${props => props.theme.variables.flex()};

  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => props.theme.style.green};
  margin: 11px;

  img {
    width: 18px;
    height: 18px;
  }
  &:hover {
    cursor: pointer;
    background-color: #00887d;
  }
`;
const SearchDescBox = styled.div`
  color: white;
`;
const Direction = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
const SeatInfo = styled.div`
  font-size: 14px;
  margin-top: 5px;

  span {
    border-right: 1px solid white;
    margin-right: 5px;
  }
`;

const DateFilterBox = styled.div`
  display: flex;
`;

const Departure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;

  img {
    width: 11px;
    height: 11px;
  }

  span {
    color: white;
    font-size: 14px;
    margin: 0px 30px;
  }
`;

const Arrival = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;

  img {
    width: 11px;
    height: 11px;
  }

  span {
    color: white;
    font-size: 14px;
    margin: 0px 30px;
  }
`;
