import React, { useState } from 'react';
import styled from 'styled-components';

function DateTap() {
  return (
    <OuterBox>
      <SearchingBox>
        <SearchImgBox>
          <img src="/images/search.png" alt="search" />
        </SearchImgBox>
        <SearchDescBox>
          <Direction>서울 (ICN) - 오사카 (모두)</Direction>
          <SeatInfo>
            <span>성인 </span>일반석
          </SeatInfo>
        </SearchDescBox>
      </SearchingBox>
      <DateFilterBox>
        <Departure>
          <img src="/images/leftArrow.png" alt="arrow" />
          <span>10월 9일 (일)</span>
          <img src="/images/rightArrow.png" alt="arrow" />
        </Departure>
        <Arrival>
          <img src="/images/leftArrow.png" alt="arrow" />
          <span>10월 9일 (일)</span>
          <img src="/images/rightArrow.png" alt="arrow" />
        </Arrival>
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
