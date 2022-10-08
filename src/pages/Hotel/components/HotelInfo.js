import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';

function HotelInfo({ filter, setFilter, centerLat, centerLng, data }) {
  const [whichFilter, setWitchFilter] = useState('1');

  const filterThis = e => {
    setWitchFilter(e.target.id);
  };

  useEffect(() => {
    if (whichFilter === '1') setFilter('rate');
    if (whichFilter === '2') setFilter('distance');
  }, [whichFilter]);
  return (
    <HotelBackgroundBox>
      <TitleForHotel>
        머물곳을 찾으세요?
        <div>공항 근처 호텔찾기</div>
      </TitleForHotel>
      <HotelFilter>
        <FilterForRate id="1" onClick={filterThis} filtered={whichFilter}>
          추천순
        </FilterForRate>
        <FilterForDistance id="2" onClick={filterThis} filtered={whichFilter}>
          거리순
        </FilterForDistance>
      </HotelFilter>
      <Map centerLat={centerLat} centerLng={centerLng} data={data} />
    </HotelBackgroundBox>
  );
}

export default HotelInfo;

const HotelBackgroundBox = styled.div`
  width: 550px;
  position: relative;
`;

const TitleForHotel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;

  div {
    font-size: 14px;
    font-weight: normal;
    margin: 10px 0;
    display: flex;
  }
`;

const HotelFilter = styled.div`
  display: flex;
  position: absolute;
  top: 32px;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const FilterForRate = styled.div`
  margin-right: 10px;
  text-decoration: ${props => (props.filtered === '1' ? 'underline' : 'none')};
  color: ${props => (props.filtered === '1' ? '#0770e3;' : 'black')};
`;
const FilterForDistance = styled.div`
  text-decoration: ${props => (props.filtered === '2' ? 'underline' : 'none')};
  color: ${props => (props.filtered === '2' ? '#0770e3;' : 'black')};
`;
