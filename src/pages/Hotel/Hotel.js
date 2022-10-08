import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Booking from './components/Booking';
import HotelInfo from './components/HotelInfo';
import { useNavigate, useLocation } from 'react-router-dom';

function Hotel(props) {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('rate');

  console.log(location);

  const centerLat = (() => {
    if (location.arrival === '김해') return 35.17667;
    if (location.arrival === '김포') return 37.3325;
    if (location.arrival === '제주') return 33.3044;
  })();

  const centerLng = (() => {
    if (location.arrival === '김해') return 128.9425;
    if (location.arrival === '김포') return 126.4751;
    if (location.arrival === '제주') return 126.2934;
  })();

  useEffect(() => {
    fetch(
      `http://43.200.182.156:3000/hotel?flightFirst=${location.flightId}&filter=${filter}&limit=5`,
      {
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(json => setData(json));
  }, [filter]);

  console.log(data);

  const goBack = () => {
    navigate('/flight');
  };

  return (
    <BackgroundBox>
      <BookingNav>
        <GoBack onClick={goBack}>
          <img src="/images/leftBlue.png" alt="leftDirection" />
          <p>결과로 돌아가기</p>
        </GoBack>
        <LogoBox>
          <img src="/images/airplaneBlue.png" alt="logoImage" />
          <p>Skyski</p>
        </LogoBox>
      </BookingNav>
      <TopBox>
        <ArrivalCity>{location.arrival}</ArrivalCity>
        <TicketInfo>
          성인1명 · {location.location.radio} · {location.location.seat}
        </TicketInfo>
      </TopBox>
      <Contents>
        <Booking location={location} />
        <HotelInfo
          setFilter={setFilter}
          filter={filter}
          centerLat={centerLat}
          centerLng={centerLng}
          data={data}
        />
      </Contents>
    </BackgroundBox>
  );
}

const BackgroundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.style.backgroundWhite};
`;
const BookingNav = styled.div`
  background-color: white;
  width: 1280px;
  position: fixed;
  display: flex;
  height: 56px;
`;

const GoBack = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  color: #0770e3;

  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const LogoBox = styled.div`
  width: 105px;
  display: flex;
  color: #0770e3;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 24px;
    height: 24px;
    margin: 5px;
  }
`;
const TopBox = styled.div`
  ${props => props.theme.variables.flex()}
  margin-top:56px;
  flex-direction: column;
  width: 100%;
  height: 182px;
  background-color: #042759;
  color: white;
`;

const ArrivalCity = styled.div`
  font-size: 48px;
  font-weight: bold;
`;
const TicketInfo = styled.div`
  font-size: 12px;
  margin: 10px;
`;
const Contents = styled.div`
  margin-top: 40px;
  display: flex;
`;

export default Hotel;
