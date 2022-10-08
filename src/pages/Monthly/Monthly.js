/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DropBox from './DropBox';
import DailyPay from './DailyPay';
import { useNavigate } from 'react-router-dom';

const LABEL_BORDER_GRAY = '0.1875rem solid #8f90a0';
const LABEL_BORDER_RED = '0.1875rem solid #0076f7';
const LABEL_BORDER_BLUE = '0.1875rem solid #005cc0';

const Monthly = () => {
  const [isValid, setIsValid] = useState(true);
  const [calendarClick, setCalendarClick] = useState(true);
  const [calendarData, setCalendarData] = useState(true);
  const [calendarDataBack, setCalendarDataBack] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [price, setPrice] = useState(0);
  const [priceBack, setPriceBack] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://43.200.182.156:3000/price')
      .then(res => res.json())
      .then(res => setData(res.result));
  }, []);

  useEffect(() => {
    fetch('http://43.200.182.156:3000/price/second')
      .then(res => res.json())
      .then(res => setData2(res.result));
  }, []);

  const focusChange = e => {
    const Cn = e.target.name;
    if (Cn === 'day') {
      setCalendarClick(true);
    } else if (Cn === 'month') {
      setCalendarClick(false);
    }
  };

  const DropDownBox = () => {
    setDropDown(!dropDown);
  };

  const labelColor = () => {
    setIsValid(!isValid);
  };

  const pricePull = e => {
    let dataType = calendarData ? data : data2;
    let days = e.target.innerText;
    for (let i in dataType) {
      for (let j in dataType[i]) {
        if (dataType[i][j].Ddate === Number(days)) {
          setPrice(dataType[i][j].price);
        }
      }
    }
    if (days === 'Previous Month') {
      setCalendarData(true);
    } else if (days === 'Next Month') {
      setCalendarData(false);
    }
  };
  const pricePullBack = e => {
    let dataType = calendarDataBack ? data : data2;
    let days = e.target.innerText;
    for (let i in dataType) {
      for (let j in dataType[i]) {
        if (dataType[i][j].Ddate === Number(days)) {
          setPriceBack(dataType[i][j].price);
        }
      }
    }
    if (days === 'Previous Month') {
      setCalendarDataBack(true);
    } else if (days === 'Next Month') {
      setCalendarDataBack(false);
    }
  };
  const priceResult = [price, priceBack].reduce((a, c) => {
    return a + c;
  });
  const priceResultDot = priceResult
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const move = () => {
    navigate('/filter', {
      state: {
        startDate: startDate,
        endDate: endDate,
        totalPrice: priceResultDot,
      },
    });
  };
  return (
    <MonthlyCss onClick={focusChange}>
      <LeftBar>
        <MagnifierContainer onClick={DropDownBox}>
          <Magnifier>
            <i className="fa-solid fa-magnifying-glass" />
          </Magnifier>
          <MagnifierRight>
            <MagnifierTop>서울(모두)-뉴욕(모두)</MagnifierTop>
            <MagnifierBottom>
              2022년11월-2022년12월 | 1 성인 | 일반석
            </MagnifierBottom>
          </MagnifierRight>
        </MagnifierContainer>
        <DropBox dropDown={dropDown} calendarClick={calendarClick} />
        <MonthlyPay>
          <MonthlyPayText>월별요금</MonthlyPayText>
          <MonthlyPayRow>
            예상 최저 가격일 뿐입니다.최근 4일 내에 검색한 결과입니다.
          </MonthlyPayRow>
        </MonthlyPay>
        <Main>
          <Straight>
            <StraightText>
              <Label
                htmlFor="checkBox"
                border={isValid ? LABEL_BORDER_GRAY : LABEL_BORDER_RED}
                borderBlue={isValid ? LABEL_BORDER_GRAY : LABEL_BORDER_BLUE}
                onClick={labelColor}
              />
              <CheckBox type="checkbox" id="checkBox" />
              직항만
            </StraightText>
            <Calendared>
              <CalendarText>
                <i className="fa-solid fa-calendar-days" />
                달력
              </CalendarText>
              <Calendar>
                <i className="fa-solid fa-chart-simple" />
                차트
              </Calendar>
            </Calendared>
          </Straight>
          <Schedule>
            <GoInput>
              <GoTextInput>
                <GoText>출발</GoText>
              </GoTextInput>
              <MainCalendar>
                <GoMainCalendar>
                  <CalendarCustom onClick={pricePull}>
                    <CalendarPick
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      showMonthDropdown
                      useShortMonthInDropdown
                      inline
                      showDisabledMonthNavigation
                      minDate={new Date()}
                      maxDate={new Date('2022-11-20')}
                      locale={ko}
                    >
                      <DailyPay
                        startDate={startDate}
                        data={calendarData ? data : data2}
                      />
                    </CalendarPick>
                  </CalendarCustom>
                </GoMainCalendar>
              </MainCalendar>
            </GoInput>
            <Goal>
              <GoTextInput>
                <GoalText>도착</GoalText>
              </GoTextInput>
              <MainCalendar>
                <GoalMainCalendar>
                  <CalendarCustom onClick={pricePullBack}>
                    <CalendarPick
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      showMonthDropdown
                      useShortMonthInDropdown
                      inline
                      minDate={new Date()}
                      maxDate={new Date('2022-11-20')}
                      locale={ko}
                    >
                      <DailyPay
                        startDate={startDate}
                        data={calendarDataBack ? data : data2}
                      />
                    </CalendarPick>
                  </CalendarCustom>
                </GoalMainCalendar>
              </MainCalendar>
            </Goal>
          </Schedule>
          <NewYork>
            <NewYorkText>뉴욕</NewYorkText>
            <DayPay>
              11월 12일 (토)-12월 1일 (목). 총 여행 요금
              <Price> ₩500,000 </Price>
              부터
            </DayPay>
          </NewYork>
          <AirlineTicketComponent>
            <AirlineTicket>
              <AirlineTicketImg>
                <i className="fa-solid fa-plane-departure" />
              </AirlineTicketImg>
              <AirlineTicketText>
                <Airline>항공권</Airline>
                <AirlineTrip>왕복편</AirlineTrip>
              </AirlineTicketText>
            </AirlineTicket>
            <AirlineTicketPrice>
              <PriceCriteria>
                <PriceCriteriaText>성인1인 기준</PriceCriteriaText>
                <PriceCriteriaPrice>
                  {price ? `₩` + priceResultDot : ``}
                </PriceCriteriaPrice>
              </PriceCriteria>
              <AirlineTicketFind onClick={move}>항공편 찾기</AirlineTicketFind>
            </AirlineTicketPrice>
          </AirlineTicketComponent>
        </Main>
        <Nike>
          <Promotion
            src={`${process.env.PUBLIC_URL}/images/나이키 로고.png`}
            alt="add"
          />
          <BlackBox>
            <NikeText2>why not?</NikeText2> <NikeText>just do it</NikeText>
          </BlackBox>
        </Nike>
        <PageText>
          이페이지에 문제가 있는 경우 <Host>최주원</Host>님 에게로 슬랙주시기
          바랍니다
        </PageText>
      </LeftBar>
      <RightBar>
        <Melon
          src={`${process.env.PUBLIC_URL}/images/logo(melon).png`}
          alt="add"
        />
        <Melon
          src={`${process.env.PUBLIC_URL}images/cantaloupe-g887f4a6ff_1280.png`}
          alt="add"
        />
        강남의 맛집을 찾으시나요? 멜론플레이트!
        <Hush
          src={`${process.env.PUBLIC_URL}/images/스크린샷 2022-10-05 오후 8.37.48.png`}
          alt="add"
        />
        <Hush
          src={`${process.env.PUBLIC_URL}/images/1624940829950_0.jpeg`}
          alt="add"
        />
        <Hush
          src={`${process.env.PUBLIC_URL}/images/images (1).jpeg`}
          alt="add"
        />
        <Hush
          src={`${process.env.PUBLIC_URL}/images/LOGO_ZINWOOS.png`}
          alt="add"
        />
        <Hush src={`${process.env.PUBLIC_URL}/images/images.jpeg`} alt="add" />
        <Hush src={`${process.env.PUBLIC_URL}/images/IMG_1168.jpg`} alt="add" />
        <HushText>달달한 디저트가 땡길땐?Hush</HushText>
      </RightBar>
    </MonthlyCss>
  );
};

export default Monthly;

const MonthlyPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const MonthlyPayText = styled.div`
  font-size: 23px;
`;

const MonthlyPayRow = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 10px;
`;
const MonthlyCss = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f1f2f8;
`;
const LeftBar = styled.div`
  width: 728px;
`;
const MagnifierContainer = styled.div`
  display: flex;
  height: 72px;
  background-color: #042759;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const Magnifier = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  background-color: #00a799;
  top: 15px;
  left: 15px;

  i {
    position: absolute;
    left: 10px;
  }
`;
const MagnifierRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 25px;
`;
const MagnifierTop = styled.div`
  color: white;
`;

const MagnifierBottom = styled.div`
  color: white;
  font-size: 13px;
`;

const NikeText = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 900;
  bottom: 15px;
  right: 40px;
`;

const NikeText2 = styled.div`
  position: absolute;
  font-size: 40px;
  font-weight: 900;
  top: 20px;
`;

const Straight = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StraightText = styled.div`
  position: relative;
  top: 5px;
`;
const Label = styled.label`
  position: absolute;
  width: 17px;
  height: 17px;
  left: 2px;
  top: 1px;
  border: ${props => props.border};
  border-radius: 0.25rem;
  &:hover {
    border: ${props => props.borderBlue};
    cursor: pointer;
  }
`;
const CheckBox = styled.input`
  margin-right: 10px;
`;
const Calendared = styled.div`
  display: flex;
  margin-right: 10px;
`;
const Main = styled.div`
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

const CalendarCustom = styled.div`
  .react-datepicker__day-name {
    width: 40px;
    height: 60px;
  }
  .react-datepicker__day {
    width: 40px;
    height: 40px;
    margin-bottom: 30px;
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker {
    margin-left: 10px;
    border: none;
  }
`;

const CalendarText = styled.button`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid gainsboro;
  background-color: white;
  padding: 10px 20px;
  i {
    margin-right: 5px;
  }
`;

const CalendarPick = styled(DatePicker)``;

const Calendar = styled.button`
  border: 1px solid gainsboro;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  padding: 10px 20px;
  i {
    margin-right: 5px;
  }
`;
const Schedule = styled.div`
  display: flex;
`;
const GoInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid gainsboro;
`;
const GoText = styled.div`
  position: absolute;
  z-index: 1;
  left: 90px;
  top: 10px;
`;

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const GoTextInput = styled.div`
  display: flex;
  position: relative;
`;

const Nike = styled.div`
  display: flex;
  padding: 10px 0px;
`;
const HushText = styled.div`
  position: absolute;
  top: 280px;
  color: brown;
`;

const MainCalendar = styled.div``;

const GoMainCalendar = styled.div``;
const GoalMainCalendar = styled.div``;
const Host = styled.span`
  color: #0770e3;
`;

const GoalText = styled.div`
  position: absolute;
  z-index: 1;
  left: 90px;
  top: 10px;
`;

const Promotion = styled.img`
  width: 500px;
  height: 100px;
`;
const Melon = styled.img`
  width: 140px;
  padding: 10px 0px;
  border-radius: 5px;
`;
const Hush = styled.img`
  width: 300px;
  padding: 10px 0px;
  border-radius: 15px;
`;

const Price = styled.span`
  font-weight: 900;
  color: #0770e3;
`;

const NewYork = styled.div`
  border-top: 1px solid gainsboro;
  padding: 15px 0px;
`;
const BlackBox = styled.div`
  position: relative;
  width: 228px;
  height: 100px;
  background-color: black;
  color: white;
`;
const NewYorkText = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
`;
const DayPay = styled.div`
  font-weight: 400;
  font-size: 15px;
`;
const AirlineTicketComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: #f1f2f8;
  border-radius: 5px;
`;
const AirlineTicket = styled.div`
  display: flex;
`;
const AirlineTicketImg = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  left: 20px;
  i {
    position: absolute;
    left: 10px;
  }
`;
const AirlineTicketText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 30px;
`;
const Airline = styled.div`
  font-weight: 700;
`;
const AirlineTrip = styled.div`
  font-size: 13px;
`;
const AirlineTicketPrice = styled.div`
  display: flex;
`;
const PriceCriteria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 15px;
`;
const PriceCriteriaText = styled.div`
  font-size: 12px;
`;
const PriceCriteriaPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0770e3;
`;
const AirlineTicketFind = styled.button`
  background-color: #00a799;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 16px;
  font-weight: 900;
  padding: 0px 30px;
`;
const PageText = styled.div`
  margin: 20px 0px;
`;
const RightBar = styled.div`
  position: relative;
  width: 300px;
  padding-left: 10px;
`;
