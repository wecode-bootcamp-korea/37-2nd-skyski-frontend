import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DateTap from './components/DateTap';
import FilterTap from './components/FilterTap';
import OptionList from './components/OptionList';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const Flight = () => {
  const [data, setData] = useState([]);
  const location = useLocation().state;
  const [sorter, setSorter] = useState('minPrice');
  const [eco, setEco] = useState(false);
  console.log(location);
  const roundTrip = (location => {
    if (location.radio === '왕복') return 'T';
    if (location.radio === '편도') return 'F';
  })(location);

  const departure = (location => {
    if (location.start === '김포') return 'GMP';
    if (location.start === '김해') return 'PUS';
    if (location.start === '제주') return 'CJU';
  })(location);

  const arrival = (location => {
    if (location.end === '김포') return '&arrival=GMP';
    if (location.end === '김해') return '&arrival=PUS';
    if (location.end === '제주') return '&arrival=CJU';
  })(location);

  const seatClass = (location => {
    if (location.seat === '일반석') return '이코노미';
    if (location.seat === '비지니스') return '비즈니스';
    if (location.seat === '일등석') return '퍼스트';
  })(location);

  const departDate = (location => {
    const string = moment(location.startDate).format('YYYY-MM-DD');
    return string;
  })(location);

  const endDate = (location => {
    if (location.radio === '편도') return '';
    const string = moment(location.endDate).format('YYYY-MM-DD');
    return `&arrivalDate=${string}`;
  })(location);

  useEffect(() => {
    fetch(
      `http://10.58.52.147:3000/flight?roundTrip=${roundTrip}&departure=${departure}${arrival}&departureDate=${departDate}${endDate}&flightSeatClass=${seatClass}&sort=${sorter}&departureTime=00000000&arrivalTime=00000000&eco=${eco}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(json => setData(json));
  }, [sorter, eco]);

  const minDuration = (() => {
    const result = [];
    data.forEach(el => {
      result.push(el.duration1, el.duration2);
    });
    return Math.min(...result);
  })();

  const maxDuration = (() => {
    const result = [];
    data.forEach(el => {
      result.push(el.duration1, el.duration2);
    });
    return Math.max(...result);
  })();

  const airLineList = (() => {
    const result = [];
    data.forEach(el => {
      result.push(el.airlineName1, el.airlineName2);
    });
    const deleteDup = new Set(result);
    const result2 = [...deleteDup];
    return result2;
  })();

  const departAirports = (() => {
    const result = [];
    data.forEach(el => {
      result.push(el.departure1, el.departure2);
    });
    const deleteDup = new Set(result);
    const result2 = [...deleteDup];
    return result2;
  })();

  const arrivalAirports = (() => {
    const result = [];
    data.forEach(el => {
      result.push(el.arrival1, el.arrival2);
    });
    const deleteDup = new Set(result);
    const result2 = [...deleteDup];
    return result2;
  })();

  const minPrice = (() => {
    let min = [];
    let result = {};
    for (let i in data) {
      min.push(Number(data[i].totalPrice));
    }
    for (let i in data) {
      if (Number(data[i].totalPrice) === Math.min(...min)) {
        result.price = Math.min(...min);
        result.duration = data[i].totalDuration;
      }
    }
    return result;
  })();

  const minDurationObj = (() => {
    let min = [];
    let result = {};
    for (let i in data) {
      min.push(Number(data[i].totalDuration));
    }
    for (let i in data) {
      if (Number(data[i].totalDuration) === Math.min(...min)) {
        result.price = Number(data[i].totalPrice);
        result.duration = Math.min(...min);
      }
    }
    return result;
  })();

  return (
    <Background>
      <OuterBox>
        <DateTap basicInfo={location} />
        <SecondBox>
          <div>달력/차트 보기</div>
          <div>추가 수하물 요금이 부과될 수 있습니다</div>
        </SecondBox>
        <ContentsBox>
          <FilterTap
            minDuration={minDuration}
            maxDuration={maxDuration}
            airLineList={airLineList}
            departAirports={departAirports}
            arrivalAirports={arrivalAirports}
            location={location}
            setData={setData}
            setEco={setEco}
            eco={eco}
          />
          <OptionList
            products={data}
            minDuration={minDurationObj}
            minPrice={minPrice}
            location={location}
            setData={setData}
            setSorter={setSorter}
          />
        </ContentsBox>
      </OuterBox>
    </Background>
  );
};

export default Flight;

const Background = styled.div`
  width: 1000px;
  margin-left: 6.5%;
  margin-right: 6.5%;
`;

const OuterBox = styled.div`
  width: 944px;
`;

const SecondBox = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  color: #3b8de7;

  div:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #084eb2;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
