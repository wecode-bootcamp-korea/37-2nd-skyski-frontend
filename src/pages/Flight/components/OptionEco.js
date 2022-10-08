import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Navigate, useNavigate } from 'react-router-dom';

function OptionEco(props) {
  const navigate = useNavigate();
  const departTime1 = (function () {
    let english = moment(`2022-10-07 ${props.product.departureTime1}`).format(
      'LT'
    );
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const departTime2 = (function () {
    let english = moment(`2022-10-07 ${props.product.departureTime2}`).format(
      'LT'
    );
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const arrivalTime1 = (function () {
    let english = moment(`2022-10-07 ${props.product.arrivalTime1}`).format(
      'LT'
    );
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const arrivalTime2 = (function () {
    let english = moment(`2022-10-07 ${props.product.arrivalTime2}`).format(
      'LT'
    );
    if (english.includes('AM')) {
      english = english.slice(0, 5);
      english = `오전 ${english}`;
    } else if (english.includes('PM')) {
      english = english.slice(0, 5);
      english = `오후 ${english}`;
    }
    return english;
  })();

  const goHotel = () => {
    navigate('/hotel', {
      state: {
        flightId: props.id,
        arrival: props.product.arrival1,
      },
    });
  };

  return (
    <OuterBoxEco isRound={props.location.radio}>
      <EcoBox>
        <EcoImgBox>
          <img src="/images/eco.png" alt="eco" />
        </EcoImgBox>
        <EcoDescBox>
          <EcoTitle>친환경 옵션</EcoTitle>
          <EcoDescription>
            이 항공편은 검색한 항공편의 평균보다 <span>8% 더 적은 CO₂</span>를
            배출합니다.
          </EcoDescription>
        </EcoDescBox>
      </EcoBox>

      <InnerBox onClick={goHotel}>
        <LeftBox>
          <LeftInner>
            <AirPicBox>
              <img src={props.product.airlineImage1} alt="airPic" />
            </AirPicBox>
            <DescBox>
              <Departure>
                <Time>{departTime1}</Time>
                <Airport>
                  {props.product.departure1 === '김해' ? 'PUS' : null}
                  {props.product.departure1 === '김포' ? 'KMP' : null}
                  {props.product.departure1 === '제주' ? 'CJU' : null}
                </Airport>
              </Departure>
              <Duration>
                <DurationTime>{props.product.duration1}분</DurationTime>
                <Line>
                  <div />
                  <img src="/images/airplane.png" alt="airplane" />
                </Line>
                <IsDirect>직항</IsDirect>
              </Duration>
              <Arrival>
                <Time>{arrivalTime1}</Time>
                <Airport>
                  {props.product.arrival1 === '김해' ? 'PUS' : null}
                  {props.product.arrival1 === '김포' ? 'KMP' : null}
                  {props.product.arrival1 === '제주' ? 'CJU' : null}
                </Airport>
              </Arrival>
            </DescBox>
          </LeftInner>
          {props.location.radio === '왕복' ? (
            <LeftInner>
              <AirPicBox>
                <img src={props.product.airlineImage2} alt="airPic" />
              </AirPicBox>
              <DescBox>
                <Departure>
                  <Time>{departTime2}</Time>
                  <Airport>
                    {props.product.departure2 === '김해' ? 'PUS' : null}
                    {props.product.departure2 === '김포' ? 'KMP' : null}
                    {props.product.departure2 === '제주' ? 'CJU' : null}
                  </Airport>
                </Departure>
                <Duration>
                  <DurationTime>{props.product.duration2}분</DurationTime>
                  <Line>
                    <div />
                    <img src="/images/airplane.png" alt="airplane" />
                  </Line>
                  <IsDirect>직항</IsDirect>
                </Duration>
                <Arrival>
                  <Time>{arrivalTime2}</Time>
                  <Airport>
                    {props.product.arrival2 === '김해' ? 'PUS' : null}
                    {props.product.arrival2 === '김포' ? 'KMP' : null}
                    {props.product.arrival2 === '제주' ? 'CJU' : null}
                  </Airport>
                </Arrival>
              </DescBox>
            </LeftInner>
          ) : null}
        </LeftBox>
        <RightBox>
          <TextBox>총 23건 중 최저가</TextBox>
          <PriceInOption>
            ₩{Number(props.product.totalPrice)?.toLocaleString()}
          </PriceInOption>
          <Choose>선택 →</Choose>
        </RightBox>
      </InnerBox>
    </OuterBoxEco>
  );
}

export default OptionEco;

const OuterBoxEco = styled.div`
  width: 100%;
  height: ${props => (props.isRound === '왕복' ? '240px' : '163px')};
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 12px 0;
  background-color: #d0eeec;
`;

const EcoBox = styled.div`
  display: flex;
  margin: 4px;
  margin-bottom: 6px;
`;

const EcoImgBox = styled.div`
  ${props => props.theme.variables.flex()}

  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => props.theme.style.green};
  margin: 7px;

  img {
    width: 30px;
    height: 30px;
  }
`;

const EcoDescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const EcoTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin: 7px 0px;
`;
const EcoDescription = styled.div`
  span {
    font-weight: bold;
  }
  font-size: 13px;
`;

const InnerBox = styled.div`
  display: flex;
  border-radius: 9px;
  margin: 1.5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const LeftBox = styled.div`
  ${props => props.theme.variables.flex()}
  flex-direction: column;
  width: 459px;
  padding-top: 13px;
  border-right: 1px solid #cdcdd7;
`;

const LeftInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 427px;
  margin: 15px 0;
`;

const AirPicBox = styled.div`
  img {
    width: 60px;
    height: 30px;
    object-fit: cover;
  }
`;
const DescBox = styled.div`
  display: flex;
  height: 100%;
`;

const Departure = styled.div`
  ${props => props.theme.variables.flex()}
  align-items: end;
  flex-direction: column;
  width: 106px;
  height: 100%;
`;

const Time = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const Airport = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const Duration = styled.div`
  ${props => props.theme.variables.flex()}

  flex-direction: column;
  width: 120px;
  height: 100%;
`;

const DurationTime = styled.div`
  font-size: 14px;
`;
const Line = styled.div`
  display: flex;
  margin: 3px 0;

  div {
    border: 1px solid #68697f;
    margin-right: 3px;
    margin-top: 7px;
    width: 90px;
    height: 0;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;
const IsDirect = styled.div`
  color: #01a699;
  font-size: 14px;
`;

const Arrival = styled.div`
  ${props => props.theme.variables.flex()}
  align-items: start;
  flex-direction: column;
  width: 106px;
  height: 100%;
`;

const RightBox = styled.div`
  ${props => props.theme.variables.flex()};

  flex-direction: column;
  margin-left: 65px;
`;
const TextBox = styled.div`
  color: #9597a4;
  font-size: 12px;
`;
const PriceInOption = styled.div`
  font-size: 20px;
  margin: 10px 0% 10px 0;
`;
const Choose = styled.div`
  ${props => props.theme.variables.flex()}
  background-color: #01A699;
  border-radius: 7px;
  color: white;
  width: 87px;
  height: 36px;
  font-size: 19px;

  &:hover {
    cursor: pointer;
    background-color: #00887d;
  }
`;
