import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import OptionEco from './OptionEco';
import Option from './Option';
import { useState } from 'react';

function OptionList() {
  const [isEco, SetIsEco] = useState(true);
  const [filtered, setFiltered] = useState('1');
  const isFiltered = e => {
    setFiltered(e.target.id);
  };
  return (
    <OuterBox>
      <FirstBox>
        <ResultNumber>599개의 결과</ResultNumber>
        <SortingModalBox>
          <div>정렬 기준</div>
          <select id="sorter">
            {/* {filtered === 1 ? (
              <option selected>추천순</option>
            ) */}
            <option>추천순</option>
            <option>최저가순</option>
            <option>최단여행시간순</option>
          </select>
        </SortingModalBox>
      </FirstBox>
      <SecondBox>
        <FilterNameBox1 id="1" onClick={isFiltered} filtered={filtered}>
          <FilterName id="1" filtered={filtered}>
            추천순
          </FilterName>
          <FilterLowPrice id="1" filtered={filtered}>
            ₩561,400
          </FilterLowPrice>
          <FilterShortest id="1" filtered={filtered}>
            1시간 48분 (평균)
          </FilterShortest>
        </FilterNameBox1>
        <FilterNameBox2 id="2" onClick={isFiltered} filtered={filtered}>
          <FilterName id="2" filtered={filtered}>
            최저가
          </FilterName>
          <FilterLowPrice id="2" filtered={filtered}>
            ₩561,400
          </FilterLowPrice>
          <FilterShortest id="2" filtered={filtered}>
            1시간 48분 (평균)
          </FilterShortest>
        </FilterNameBox2>
        <FilterNameBox3 id="3" onClick={isFiltered} filtered={filtered}>
          <FilterName id="3" filtered={filtered}>
            최단여행시간
          </FilterName>
          <FilterLowPrice id="3" filtered={filtered}>
            ₩561,400
          </FilterLowPrice>
          <FilterShortest id="3" filtered={filtered}>
            1시간 48분 (평균)
          </FilterShortest>
        </FilterNameBox3>
      </SecondBox>
      <ThirdBox>
        {isEco ? <OptionEco /> : <Option />}
        {isEco ? <OptionEco /> : <Option />}
        {isEco ? <OptionEco /> : <Option />}
      </ThirdBox>
    </OuterBox>
  );
}

export default OptionList;

const OuterBox = styled.div`
  width: 679px;
`;
const FirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
`;

const ResultNumber = styled.div`
  margin: 8px 3px;
  font-size: 12px;
`;
const SortingModalBox = styled.div`
  display: flex;

  div {
    font-weight: bold;
    font-size: 12px;
    height: 36px;
    display: flex;
    align-items: center;
  }

  select {
    font-size: 16px;
    width: 140px;
    height: 36px;
    border: 1px solid #b2b3bf;
    border-radius: 4px;
    margin-left: 2px;
  }
`;

const SecondBox = styled.div`
  display: flex;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const FilterNameBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 19px;
  border-radius: 5px;
  width: 100%;
  height: 104px;
  background-color: ${props =>
    props.id === props.filtered ? '#042759' : '#FFFFFF'};
  color: ${props => (props.id === props.filtered ? '#FFFFFF' : '#444560')};
`;

const FilterNameBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 19px;
  border-radius: 5px;
  width: 100%;
  height: 104px;
  background-color: ${props =>
    props.id === props.filtered ? '#042759' : '#FFFFFF'};
  color: ${props => (props.id === props.filtered ? '#FFFFFF' : '#444560')};
`;

const FilterNameBox3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 19px;
  border-radius: 5px;
  width: 100%;
  height: 104px;
  background-color: ${props =>
    props.id === props.filtered ? '#042759' : '#FFFFFF'};
  color: ${props => (props.id === props.filtered ? '#FFFFFF' : '#444560')};
`;

const FilterName = styled.div`
  font-size: 14px;
`;
const FilterLowPrice = styled.div`
  font-size: 20px;
  margin: 13px 0;
  color: ${props => (props.id === props.filtered ? '#ffffff' : '#0B72E3')};
`;
const FilterShortest = styled.div`
  font-size: 12px;
`;

const ThirdBox = styled.div`
  width: 100%;
`;
