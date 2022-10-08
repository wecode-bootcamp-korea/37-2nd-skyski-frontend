import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import moment from 'moment';

function FilterTap(props) {
  const [opendArr, setOpendArr] = useState(['1', '2', '3', '4', '5']);
  const [selectedBtn, setSelectedBtn] = useState();
  const [firstBtnIndex, setFirstBtnIndex] = useState(0);
  const [secondBtnIndex, setSecondBtnIndex] = useState(48);
  const [thirdBtnIndex, setThirdBtnIndex] = useState(0);
  const [fourthBtnIndex, setFourthBtnIndex] = useState(48);
  const [fifthBtnIndex, setFifthBtnIndex] = useState(48);
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const [dragPosition, setDragPosition] = useState(0);
  const [exceptAirline, setExceptAirline] = useState([]);
  const roundTrip = (location => {
    if (location?.radio === '왕복') return 'T';
    if (location?.radio === '편도') return 'F';
  })(props.location);
  console.log(exceptAirline);
  const departure = (location => {
    if (location?.start === '김포') return 'GMP';
    if (location?.start === '김해') return 'PUS';
    if (location?.start === '제주') return 'CJU';
  })(props.location);

  const arrival = (location => {
    if (location?.end === '김포') return '&arrival=GMP';
    if (location?.end === '김해') return '&arrival=PUS';
    if (location?.end === '제주') return '&arrival=CJU';
  })(props.location);

  const seatClass = (location => {
    if (location?.seat === '일반석') return '이코노미';
    if (location?.seat === '비지니스') return '비즈니스';
    if (location?.seat === '일등석') return '퍼스트';
  })(props.location);

  const departDate = (location => {
    const string = moment(location?.startDate).format('YYYY-MM-DD');
    return string;
  })(props.location);

  const endDate = (location => {
    if (location?.radio === '편도') return '';
    const string = moment(location?.endDate).format('YYYY-MM-DD');
    return `&arrivalDate=${string}`;
  })(props.location);

  const setThisPosition = e => {
    setSelectedBtn(e.target.id);

    setDragStartPosition(e.clientX);
    window.addEventListener('mousemove', setMovingPosition);
    window.addEventListener('mouseup', outThisButton);
  };

  const setMovingPosition = useCallback(e => {
    setDragPosition(e.clientX);
  }, []);

  const exceptAirlineFetch = (() => {
    return `&exceptAirline=${exceptAirline.join('&exceptAirline=')}`;
  })();

  useEffect(() => {
    fetch(
      `http://10.58.52.147:3000/flight?roundTrip=${roundTrip}&departure=${departure}${arrival}&departureDate=${departDate}${endDate}&flightSeatClass=${seatClass}&sort=minPrice&departureTime=${firstBtnHourFetch}${secondBtnHourFetch}&arrivalTime=${thirdBtnHourFetch}${fourthBtnHourFetch}${exceptAirlineFetch}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(json => props.setData(json));
  }, [exceptAirline]);

  console.log(exceptAirline);
  const outThisButton = e => {
    window.removeEventListener('mousemove', setMovingPosition);
    window.removeEventListener('mouseup', outThisButton);

    fetch(
      `http://10.58.52.147:3000/flight?roundTrip=${roundTrip}&departure=${departure}${arrival}&departureDate=${departDate}${endDate}&flightSeatClass=${seatClass}&sort=minPrice&departureTime=${firstBtnHourFetch}${secondBtnHourFetch}&arrivalTime=${thirdBtnHourFetch}${fourthBtnHourFetch}${exceptAirlineFetch}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(json => props.setData(json));
  };

  useEffect(() => {
    if (dragPosition - dragStartPosition >= 4.0) {
      if (selectedBtn === '1' && firstBtnIndex < secondBtnIndex - 1) {
        setFirstBtnIndex(current => current + 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '2' && secondBtnIndex < 48) {
        setSecondBtnIndex(current => current + 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '3' && thirdBtnIndex < fourthBtnIndex - 1) {
        setThirdBtnIndex(current => current + 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '4' && fourthBtnIndex < 48) {
        setFourthBtnIndex(current => current + 1);
        setDragStartPosition(dragPosition);
      }

      if (selectedBtn === '5' && fifthBtnIndex < 48) {
        setFifthBtnIndex(current => current + 1);
        setDragStartPosition(dragPosition);
      }
    }

    if (dragPosition - dragStartPosition <= -4.0) {
      if (selectedBtn === '1' && firstBtnIndex > 0) {
        setFirstBtnIndex(current => current - 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '2' && secondBtnIndex > firstBtnIndex + 1) {
        setSecondBtnIndex(current => current - 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '3' && thirdBtnIndex > 0) {
        setThirdBtnIndex(current => current - 1);
        setDragStartPosition(dragPosition);
      }
      if (selectedBtn === '4' && fourthBtnIndex > thirdBtnIndex + 1) {
        setFourthBtnIndex(current => current - 1);
        setDragStartPosition(dragPosition);
      }

      if (selectedBtn === '5' && fifthBtnIndex > 0) {
        setFifthBtnIndex(current => current - 1);
        setDragStartPosition(dragPosition);
      }
    }
  }, [dragPosition]);

  const firstBtnMin = firstBtnIndex * 30;
  const secondBtnMin = secondBtnIndex * 30;
  const thirdBtnMin = thirdBtnIndex * 30;
  const fourthBtnMin = fourthBtnIndex * 30;
  const fifthBtnMin = fifthBtnIndex * 10;

  const firstPosition = firstBtnIndex * 4.5;
  const secondPosition = secondBtnIndex * 4.5;
  const thirdPosition = thirdBtnIndex * 4.5;
  const fourthPosition = fourthBtnIndex * 4.5;
  const fifthPosition = fifthBtnIndex * 4.5;

  const firstBtnHour = (function () {
    let english = moment(`${departDate} 00:00`)
      .add(firstBtnMin, 'm')
      .format('LT');
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const firstBtnHourFetch = (() => {
    let english = moment(`${departDate} 00:00`).add(firstBtnMin, 'm').format();
    let time =
      english.slice(english.indexOf(':') - 2, english.indexOf(':')) +
      english.slice(english.indexOf(':') + 1, english.indexOf(':') + 3);
    return time;
  })();

  console.log(firstBtnHourFetch);
  const secondBtnHour = (function () {
    let english = moment(`${departDate} 00:00`)
      .add(secondBtnMin, 'm')
      .format('LT');
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const secondBtnHourFetch = (() => {
    let english = moment(`${departDate} 00:00`).add(secondBtnMin, 'm').format();
    let time =
      english.slice(english.indexOf(':') - 2, english.indexOf(':')) +
      english.slice(english.indexOf(':') + 1, english.indexOf(':') + 3);
    return time;
  })();

  const thirdBtnHour = (function () {
    let english = moment(`${endDate} 00:00`).add(thirdBtnMin, 'm').format('LT');
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const thirdBtnHourFetch = (() => {
    let english = moment(`${endDate} 00:00`).add(thirdBtnMin, 'm').format();
    let time =
      english.slice(english.indexOf(':') - 2, english.indexOf(':')) +
      english.slice(english.indexOf(':') + 1, english.indexOf(':') + 3);
    return time;
  })();

  const fourthBtnHour = (function () {
    let english = moment(`${endDate} 00:00`)
      .add(fourthBtnMin, 'm')
      .format('LT');
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const fourthBtnHourFetch = (() => {
    let english = moment(`${endDate} 00:00`).add(fourthBtnMin, 'm').format();
    let time =
      english.slice(english.indexOf(':') - 2, english.indexOf(':')) +
      english.slice(english.indexOf(':') + 1, english.indexOf(':') + 3);
    return time;
  })();

  const openMenu = e => {
    if (opendArr.includes(e.target.id)) {
      const arr = opendArr.filter(el => el !== e.target.id);
      setOpendArr(arr);
    } else {
      setOpendArr([...opendArr, e.target.id]);
    }
  };
  const moveBtnByKey = e => {
    if (selectedBtn === '1') {
      if (e.code === 'ArrowRight' && firstBtnIndex < secondBtnIndex - 1) {
        setFirstBtnIndex(current => current + 1);
      }
      if (e.code === 'ArrowLeft' && firstBtnIndex > 0) {
        setFirstBtnIndex(current => current - 1);
      }
    }

    if (selectedBtn === '2') {
      if (e.code === 'ArrowRight' && secondBtnIndex < 48) {
        setSecondBtnIndex(current => current + 1);
      }
      if (e.code === 'ArrowLeft' && secondBtnIndex > firstBtnIndex + 1) {
        setSecondBtnIndex(current => current - 1);
      }
    }

    if (selectedBtn === '3') {
      if (e.code === 'ArrowRight' && thirdBtnIndex < fourthBtnIndex - 1) {
        setThirdBtnIndex(current => current + 1);
      }
      if (e.code === 'ArrowLeft' && thirdBtnIndex > 0) {
        setThirdBtnIndex(current => current - 1);
      }
    }

    if (selectedBtn === '4') {
      if (e.code === 'ArrowRight' && fourthBtnIndex < 48) {
        setFourthBtnIndex(current => current + 1);
      }
      if (e.code === 'ArrowLeft' && fourthBtnIndex > thirdBtnIndex + 1) {
        setFourthBtnIndex(current => current - 1);
      }
    }

    if (selectedBtn === '5') {
      if (e.code === 'ArrowRight' && fifthBtnIndex < 48) {
        setFifthBtnIndex(current => current + 1);
      }
      if (e.code === 'ArrowLeft' && fifthBtnIndex > 0) {
        setFifthBtnIndex(current => current - 1);
      }
    }
  };

  const pickThis = e => {
    if (exceptAirline.includes(e.target.name)) {
      let test = exceptAirline.filter(el => el !== e.target.name);
      setExceptAirline(test);
    } else {
      setExceptAirline([...exceptAirline, e.target.name]);
    }
  };

  const showEco = () => {
    props.setEco(current => !current);
  };

  return (
    <OuterBox>
      <NotiBox>
        <img src="/images/bell.png" alt="bell" />
        <span>가격 변동 알림 받기</span>
      </NotiBox>
      <DepartTimeBox>
        <FilterNameTap id="1" onClick={openMenu}>
          <span id="1">출발 시간대 설정</span>
          <img id="1" src="/images/arrowDown.png" alt="arrow" />
        </FilterNameTap>
        <DepartureFilterBox id="1" isOpened={opendArr} howMany={props.location}>
          <FilterText>
            <div>가는날 출발시간</div>
            <span>
              {firstBtnHour} - {secondBtnHour}
            </span>
          </FilterText>

          <DragFilter>
            <DragButton1
              name="button"
              id="1"
              selectedBtn={selectedBtn}
              onKeyDown={moveBtnByKey}
              tabIndex="-1"
              position={firstPosition}
              onMouseDown={setThisPosition}
              onMouseUp={outThisButton}
            >
              <div name="button" id="1" />
            </DragButton1>
            <DragLine />
            <DragButton2
              name="button"
              id="2"
              selectedBtn={selectedBtn}
              onKeyDown={moveBtnByKey}
              tabIndex="-1"
              position={secondPosition}
              onMouseDown={setThisPosition}
              onMouseUp={outThisButton}
            >
              <div name="button" id="2" />
            </DragButton2>
          </DragFilter>

          {props.location.radio === '왕복' ? (
            <>
              <FilterText>
                <div>오는날 출발시간</div>
                <span>
                  {thirdBtnHour} - {fourthBtnHour}
                </span>
              </FilterText>

              <DragFilter>
                <DragButton3
                  name="button"
                  id="3"
                  selectedBtn={selectedBtn}
                  onKeyDown={moveBtnByKey}
                  tabIndex="-1"
                  position={thirdPosition}
                  onMouseDown={setThisPosition}
                  onMouseUp={outThisButton}
                >
                  <div id="3" name="button" />
                </DragButton3>
                <DragLine />
                <DragButton4
                  id="4"
                  name="button"
                  selectedBtn={selectedBtn}
                  onKeyDown={moveBtnByKey}
                  tabIndex="-1"
                  position={fourthPosition}
                  onMouseDown={setThisPosition}
                  onMouseUp={outThisButton}
                >
                  <div id="4" name="button" />
                </DragButton4>
              </DragFilter>
            </>
          ) : null}
        </DepartureFilterBox>
      </DepartTimeBox>
      <DurationTimeBox>
        <FilterNameTap id="2" onClick={openMenu}>
          <span id="2">총 소요시간</span>
          <img id="2" src="/images/arrowDown.png" alt="arrow" />
        </FilterNameTap>
        <DurationFilterBox id="2" isOpened={opendArr}>
          <FilterText>
            <span>2시간 - 34.5시간</span>
          </FilterText>
          <DragFilter>
            <DragLine />
            <DragButton5
              id="5"
              name="button"
              selectedBtn={selectedBtn}
              onKeyDown={moveBtnByKey}
              tabIndex="-1"
              position={fifthPosition}
              onMouseDown={setThisPosition}
              onMouseUp={outThisButton}
            >
              <div id="5" name="button" />
            </DragButton5>
          </DragFilter>
        </DurationFilterBox>
      </DurationTimeBox>
      <AirlineBox>
        <FilterNameTap id="3" onClick={openMenu}>
          <span id="3">항공사</span>
          <img id="3" src="/images/arrowDown.png" alt="arrow" />
        </FilterNameTap>
        <AirlineCheckBoxList
          id="3"
          isOpened={opendArr}
          airLineLength={props.airLineList.length}
        >
          <CheckBox>
            <input
              type="checkbox"
              checked={!exceptAirline.includes('KE')}
              name="KE"
              onClick={pickThis}
            />
            <CheckBoxText>
              <div>KOREAN AIR</div>
              <span>₩690,093부터</span>
            </CheckBoxText>
          </CheckBox>
          <CheckBox>
            <input
              type="checkbox"
              checked={!exceptAirline.includes('OZ')}
              name="OZ"
              onClick={pickThis}
            />
            <CheckBoxText>
              <div>ASIANA AIRLINES</div>
              <span>₩690,093부터</span>
            </CheckBoxText>
          </CheckBox>
          <CheckBox>
            <input
              type="checkbox"
              checked={!exceptAirline.includes('7C')}
              name="7C"
              onClick={pickThis}
            />
            <CheckBoxText>
              <div>JEJUair</div>
              <span>₩690,093부터</span>
            </CheckBoxText>
          </CheckBox>
        </AirlineCheckBoxList>
      </AirlineBox>
      <AirportBox>
        <FilterNameTap id="4" onClick={openMenu}>
          <span id="4">공항</span>
          <img id="4" src="/images/arrowDown.png" alt="arrow" />
        </FilterNameTap>
        <AirportCheckBoxList
          id="4"
          isOpened={opendArr}
          airportLength={
            props.arrivalAirports.length + props.departAirports.length
          }
        >
          <AirportDeparture>
            <WhichWay>출발지</WhichWay>
            {props.departAirports.map((el, i) => (
              <CheckBox key={i}>
                <input type="checkbox" checked />
                <CheckBoxText>
                  <div>{el} 공항</div>
                </CheckBoxText>
              </CheckBox>
            ))}
          </AirportDeparture>
          <AirportArrival>
            <WhichWay>도착지</WhichWay>
            {props.arrivalAirports.map((el, i) => (
              <CheckBox key={i}>
                <input type="checkbox" checked />
                <CheckBoxText>
                  <div>{el} 공항</div>
                </CheckBoxText>
              </CheckBox>
            ))}
          </AirportArrival>
        </AirportCheckBoxList>
      </AirportBox>
      <EcoFilterBox>
        <FilterNameTap id="5" onClick={openMenu}>
          <span id="5">친환경 항공편</span>
          <img id="5" src="/images/arrowDown.png" alt="arrow" />
        </FilterNameTap>
        <EcoCheckBoxList id="5" isOpened={opendArr}>
          <CheckBox>
            <input type="checkbox" onChange={showEco} checked={props.eco} />
            <CheckBoxText>
              <div>이산화탄소 배출량이 낮은 항공편만 보기</div>
            </CheckBoxText>
          </CheckBox>
        </EcoCheckBoxList>
      </EcoFilterBox>
    </OuterBox>
  );
}

export default FilterTap;

const OuterBox = styled.div`
  width: 250px;
  height: 2000px;
`;

const NotiBox = styled.div`
  ${props => props.theme.variables.flex()}

  width: 100%;
  height: 36px;
  color: #084eb2;
  background-color: #dbdbdb;
  border-radius: 6px;
  font-weight: bold;
  font-size: 19px;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    cursor: pointer;
    background-color: #cdcdd7;
  }
`;
const DepartTimeBox = styled.div`
  width: 100%;
`;

const FilterNameTap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
  font-size: 16px;
  padding-right: 10px;
  border-bottom: 1px solid #dadae1;

  img {
    width: 11px;
    height: 11px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DepartureFilterBox = styled.div`
  width: 100%;
  height: ${props =>
    props.isOpened.includes(props.id)
      ? props.howMany.radio === '왕복'
        ? '207px'
        : '103.5px'
      : 0};
  overflow: ${props =>
    props.isOpened.includes(props.id) ? 'visible' : 'hidden'};
  transition: height 0.3s ease-in-out;
`;

const FilterText = styled.div`
  margin: 15px 0 10px 0;
  div {
    font-size: 14px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    color: #9192a3;
  }
`;
const DragFilter = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
`;

const DragButton1 = styled.div`
  ${props => props.theme.variables.flex()}
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: white;
  z-index: ${props => (props.id === props.selectedBtn ? 1 : 0)};
  left: ${props => `${props.position}px`};
  border: ${props =>
    props.id === props.selectedBtn ? '2px solid #0B72E3' : 'none'};
  border-radius: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    border: 1px solid #bbbcc6;
    width: 21px;
    height: 21px;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DragLine = styled.div`
  width: 95%;
  height: 5px;
  border: 1px solid black;
  background-color: black;
  border-radius: 5px;
`;

const DragButton2 = styled.div`
  ${props => props.theme.variables.flex()}
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: white;
  z-index: ${props => (props.id === props.selectedBtn ? 1 : 0)};
  left: ${props => `${props.position}px`};
  border: ${props =>
    props.id === props.selectedBtn ? '2px solid #0B72E3' : 'none'};
  border-radius: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    border: 1px solid #bbbcc6;
    width: 21px;
    height: 21px;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DurationTimeBox = styled.div`
  width: 100%;
`;

const DurationFilterBox = styled.div`
  width: 100%;
  overflow: ${props =>
    props.isOpened.includes(props.id) ? 'visible' : 'hidden'};
  height: ${props => (props.isOpened.includes(props.id) ? '97px' : 0)};
  transition: all 0.3s ease-in-out;
`;

const DragButton3 = styled.div`
  ${props => props.theme.variables.flex()}
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: white;
  z-index: ${props => (props.id === props.selectedBtn ? 1 : 0)};
  left: ${props => `${props.position}px`};
  border: ${props =>
    props.id === props.selectedBtn ? '2px solid #0B72E3' : 'none'};
  border-radius: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    border: 1px solid #bbbcc6;
    width: 21px;
    height: 21px;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DragButton4 = styled.div`
  ${props => props.theme.variables.flex()}
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: white;
  z-index: ${props => (props.id === props.selectedBtn ? 1 : 0)};
  left: ${props => `${props.position}px`};
  border: ${props =>
    props.id === props.selectedBtn ? '2px solid #0B72E3' : 'none'};
  border-radius: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    border: 1px solid #bbbcc6;
    width: 21px;
    height: 21px;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DragButton5 = styled.div`
  ${props => props.theme.variables.flex()}
  width: 32px;
  height: 32px;
  position: absolute;
  background-color: white;
  left: ${props => `${props.position}px`};
  border: ${props =>
    props.id === props.selectedBtn ? '2px solid #0B72E3' : 'none'};
  border-radius: 100%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  div {
    border: 1px solid #bbbcc6;
    width: 21px;
    height: 21px;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const AirlineBox = styled.div`
  width: 100%;
`;

const AirlineCheckBoxList = styled.div`
  overflow: hidden;
  height: ${props => (props.isOpened.includes(props.id) ? `180px` : 0)};
  transition: all 0.3s ease-in-out;
`;

const CheckAllBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px;

  input {
    width: 20px;
    height: 20px;
  }
`;
const CheckAllBoxText = styled.div`
  padding: 5px;
  color: #3b8de7;
`;

const AirportCheckBoxList = styled.div`
  overflow: hidden;
  height: ${props =>
    props.isOpened.includes(props.id)
      ? `${props.airportLength * 60 + 100}px`
      : 0};
  transition: all 0.3s ease-in-out;
`;

const EcoCheckBoxList = styled.div`
  overflow: hidden;
  height: ${props => (props.isOpened.includes(props.id) ? '60px' : 0)};
  transition: all 0.3s ease-in-out;
`;

const CheckBox = styled.div`
  display: flex;
  font-size: 12px;
  padding: 10px;

  input {
    width: 20px;
    height: 20px;
  }

  input:hover {
    cursor: pointer;
  }

  &:hover {
    color: #3b8de7;
  }
`;
const CheckBoxText = styled.div`
  padding: 5px;
  div {
    margin-bottom: 6px;
  }
  span {
    color: #9091a3;
  }
`;

const AirportBox = styled.div`
  width: 100%;
`;

const EcoFilterBox = styled.div`
  width: 100%;
`;

const AirportDeparture = styled.div``;
const AirportArrival = styled.div``;
const WhichWay = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
