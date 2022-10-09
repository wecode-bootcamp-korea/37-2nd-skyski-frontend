import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useNavigate } from 'react-router-dom';

const BLOCK = 'block';
const NONE = 'none';
const BORDER_BOTTOM = '3px solid #0770e3';
const BORDER_BOTTOM2 = '3px solid white';
const FONT_COLOR = '#0770e3';
const FONT_COLOR2 = 'black';

const DropBox = ({ dropDown, calendarClick }) => {
  const [startDateInput, setStartDateInput] = useState(new Date());
  const [endDateInput, setEndDateInput] = useState(new Date());
  const [rowPrice, setRowPrice] = useState(new Date());
  const [radio, setRadio] = useState();
  const [checkClass, setCheckClass] = useState('');
  const [isCheckClass, setIsCheckClass] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    startInput: '',
    endInput: '',
  });
  const { startInput, endInput } = inputValue;

  const onChangeInput = e => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const textChange = () => {
    setInputValue({
      ...inputValue,
      startInput: endInput,
      endInput: startInput,
    });
  };
  const move = () => {
    navigate('/filter', {
      state: {
        start: startInput,
        end: endInput,
        startDate: startDateInput,
        endDate: endDateInput,
        radio: radio,
        seat: checkClass,
      },
    });
  };
  return (
    <DropBoxed display={dropDown ? BLOCK : NONE}>
      <Check type="radio" value="왕복" name="checkButton" onClick={setRadio} />
      왕복
      <Check type="radio" value="편도" name="checkButton" onClick={setRadio} />
      편도
      <GuestTicket>
        <Point>
          <StartPoint>
            출발지
            <StartSet>
              <StartInput
                name="startInput"
                value={startInput}
                onChange={onChangeInput}
                placeholder="국가,도시 또는 공항"
              />
              <StartButton onClick={textChange}>
                <i className="fa-solid fa-right-left" />
              </StartButton>
            </StartSet>
            <CreatCheck>
              <AirPort type="checkbox" />
              주변공항
            </CreatCheck>
            <DayCheck>
              <StartDay>
                가는날
                <CalendarCustom2>
                  {calendarClick ? (
                    <DatePicker
                      selected={startDateInput}
                      onChange={setStartDateInput}
                      dateFormat="yyyy/MM/dd"
                      showMonthDropdown
                      locale={ko}
                    >
                      <DayToMonth>
                        <Day
                          name="day"
                          border={
                            calendarClick ? BORDER_BOTTOM : BORDER_BOTTOM2
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR : FONT_COLOR2}
                        >
                          특정날짜
                        </Day>
                        <Month
                          name="month"
                          border={
                            calendarClick ? BORDER_BOTTOM2 : BORDER_BOTTOM
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR2 : FONT_COLOR}
                        >
                          한달전체
                        </Month>
                      </DayToMonth>
                    </DatePicker>
                  ) : (
                    <DatePicker
                      selected={startDateInput}
                      onChange={setStartDateInput}
                      dateFormat="yyyy/MM/dd"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      minDate={new Date()}
                      maxDate={new Date()}
                      showTwoColumnMonthYearPicker
                      locale={ko}
                    >
                      <DayToMonth>
                        <CheapDay>가장 저렴한 달</CheapDay>
                        <Day
                          name="day"
                          border={
                            calendarClick ? BORDER_BOTTOM : BORDER_BOTTOM2
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR : FONT_COLOR2}
                        >
                          특정날짜
                        </Day>
                        <Month
                          name="month"
                          border={
                            calendarClick ? BORDER_BOTTOM2 : BORDER_BOTTOM
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR2 : FONT_COLOR}
                        >
                          한달전체
                        </Month>
                      </DayToMonth>
                    </DatePicker>
                  )}
                </CalendarCustom2>
              </StartDay>
              <StartDay>
                오는날
                <CalendarCustom2>
                  {calendarClick ? (
                    <DatePicker
                      selected={endDateInput}
                      onChange={setEndDateInput}
                      dateFormat="yyyy/MM/dd"
                      showMonthDropdown
                      locale={ko}
                    >
                      <DayToMonth>
                        <Day
                          name="day"
                          border={
                            calendarClick ? BORDER_BOTTOM : BORDER_BOTTOM2
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR : FONT_COLOR2}
                        >
                          특정날짜
                        </Day>
                        <Month
                          name="month"
                          border={
                            calendarClick ? BORDER_BOTTOM2 : BORDER_BOTTOM
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR2 : FONT_COLOR}
                        >
                          한달전체
                        </Month>
                      </DayToMonth>
                    </DatePicker>
                  ) : (
                    <DatePicker
                      selected={rowPrice}
                      onChange={setRowPrice}
                      dateFormat="yyyy/MM/dd"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      minDate={new Date()}
                      maxDate={new Date()}
                      showTwoColumnMonthYearPicker
                      locale={ko}
                    >
                      <DayToMonth>
                        <CheapDay>가장 저렴한 달</CheapDay>
                        <Day
                          name="day"
                          border={
                            calendarClick ? BORDER_BOTTOM : BORDER_BOTTOM2
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR : FONT_COLOR2}
                        >
                          특정날짜
                        </Day>
                        <Month
                          name="month"
                          border={
                            calendarClick ? BORDER_BOTTOM2 : BORDER_BOTTOM
                          }
                          FONT_COLOR={calendarClick ? FONT_COLOR2 : FONT_COLOR}
                        >
                          한달전체
                        </Month>
                      </DayToMonth>
                    </DatePicker>
                  )}
                </CalendarCustom2>
              </StartDay>
            </DayCheck>
          </StartPoint>
          <EndPoint>
            도착지
            <EndSet>
              <EndInput
                name="endInput"
                value={endInput}
                onChange={onChangeInput}
                placeholder="국가,도시 또는 공항"
              />
              <CreatCheck>
                <AirPort type="checkbox" />
                주변공항
              </CreatCheck>
            </EndSet>
            <Guest>
              좌석및승객
              <Guests
                defaultValue={checkClass}
                onClick={() => setIsCheckClass(!isCheckClass)}
              />
              {/* <CheckClass>
                <CheckClassBtn onClick={() => setCheckClass('일반석 성인 1인')}>
                  일반석
                </CheckClassBtn>
                <CheckClassBtn
                  onClick={() => {
                    setCheckClass('비지니스석 성인 1인');
                  }}
                >
                  비지니스석
                </CheckClassBtn>
                <CheckClassBtn onClick={() => setCheckClass('일등석 성인 1인')}>
                  일등석
                </CheckClassBtn>
              </CheckClass> */}
              {isCheckClass ? (
                <CheckClass
                  onClick={() => {
                    setIsCheckClass(false);
                  }}
                >
                  <CheckClassBtn
                    onClick={() => setCheckClass('일반석 성인 1인')}
                  >
                    일반석
                  </CheckClassBtn>
                  <CheckClassBtn
                    onClick={() => {
                      setCheckClass('비지니스석 성인 1인');
                    }}
                  >
                    비지니스석
                  </CheckClassBtn>
                  <CheckClassBtn
                    onClick={() => setCheckClass('일등석 성인 1인')}
                  >
                    일등석
                  </CheckClassBtn>
                </CheckClass>
              ) : (
                ''
              )}
            </Guest>
          </EndPoint>
        </Point>
        <StraightCheck>
          <StraightChecked>
            <StraightCheckBox type="checkbox" />
            직항만
          </StraightChecked>
          <FlightBtn onClick={move}>
            항공권 검색
            <i className="fa-solid fa-arrow-right" />
          </FlightBtn>
        </StraightCheck>
      </GuestTicket>
    </DropBoxed>
  );
};

export default DropBox;

const DropBoxed = styled.div`
  display: ${props => props.display};
  background-color: #042759;
  color: white;
  padding: 10px;
  margin-top: -10px;
`;

const Check = styled.input``;

const GuestTicket = styled.div``;

const Point = styled.div`
  display: flex;
`;

const StartPoint = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 10px;
`;

const StartSet = styled.div`
  position: relative;
  margin: 10px 0px;
`;

const EndSet = styled.div`
  position: relative;
  width: 50%;
  margin: 0px;
`;

const StartInput = styled.input`
  height: 40px;
  width: 90%;
  font-size: 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
`;

const StartButton = styled.button`
  position: absolute;
  width: 10%;
  height: 40px;
  background-color: white;
  border: none;
`;

const CreatCheck = styled.div`
  margin-bottom: 10px;
`;

const AirPort = styled.input`
  margin: 10px 0px;
`;

const DayCheck = styled.div`
  display: flex;
`;

const StartDay = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 5px;
  margin-top: 10px;
`;

const CalendarCustom2 = styled.div`
  position: relative;
  z-index: 2;
  input {
    height: 40px;
    border-radius: 5px;
  }
  .react-datepicker__month-container {
    border: 1px solid gainsboro;
    border-radius: 5px;
  }

  .react-datepicker__day-name {
    width: 40px;
    height: 40px;
  }
  .react-datepicker__day {
    width: 40px;
    height: 40px;
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker {
    margin-left: 10px;
    border: none;
  }
  .react-datepicker__navigation {
    margin-top: 60px;
  }
  .react-datepicker__navigation {
    margin-top: 60px;
  }
  .react-datepicker__header {
    margin-top: 60px;
  }
  .react-datepicker__header {
    width: 331px;
  }
  .react-datepicker__month-text {
    height: 50px;
    margin: 2px 20px;
  }
  .react-datepicker__header {
    margin-bottom: 60px;
  }
`;

const DayToMonth = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 5px;
  z-index: 2;
  border-bottom: 1px solid gainsboro;
`;

const Day = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 99%;
  padding: 0px;
  margin: 0px;
  background-color: white;
  border: none;
  border-bottom: ${props => props.border};
  color: ${props => props.FONT_COLOR};
  &:hover {
    border-bottom: 3px solid gainsboro;
  }
`;

const Month = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: white;
  border: none;
  border-bottom: ${props => props.border};
  color: ${props => props.FONT_COLOR};
  &:hover {
    border-bottom: 3px solid gainsboro;
  }
`;

const CheapDay = styled.button`
  position: absolute;
  top: 90px;
  width: 300px;
  height: 40px;
  background-color: white;
  border: 3px solid gainsboro;
  border-radius: 5px;
  color: #0770e3;
  font-weight: 700;
  font-size: 20px;
`;

const EndPoint = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 10px;
`;

const EndInput = styled.input`
  height: 40px;
  border-top-right-radius: 5px;
  font-size: 14px;
  border-bottom-right-radius: 5px;
  border: none;
  border-left: 1px solid gainsboro;
  margin-top: 10px;
  width: 350px;
`;

const Guest = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 20px;
`;
const CheckClass = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 70px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid gainsboro;
`;

const Guests = styled.input`
  height: 40px;
  border-radius: 5px;

  /* &:focus + ${CheckClass} {
    display: flex;
    flex-direction: column;
  } */
`;

const StraightCheck = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const StraightChecked = styled.div``;

const CheckClassBtn = styled.button`
  height: 40px;
  background-color: white;
  border: none;
  border-bottom: 1px solid gainsboro;
  border-radius: 5px;
`;

const StraightCheckBox = styled.input`
  margin: 10px 0px;
`;

const FlightBtn = styled.button`
  background-color: #00a799;
  border: none;
  border-radius: 7px;
  padding: 10px 30px;
  margin: 5px 0px;
  color: white;
  font-size: 16px;
  font-weight: 900;
`;
