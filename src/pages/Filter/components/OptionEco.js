import React from 'react';
import styled from 'styled-components';

function OptionEco() {
  return (
    <OuterBoxEco>
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

      <InnerBox>
        <LeftBox>
          <LeftInner>
            <AirPicBox>
              <img src="/images/jinairSample.jpeg" alt="airPic" />
            </AirPicBox>
            <DescBox>
              <Departure>
                <Time>오전 9:15</Time>
                <Airport>ICN</Airport>
              </Departure>
              <Duration>
                <DurationTime>1시간 45분</DurationTime>
                <Line>
                  <div />
                  <img src="/images/airplane.png" alt="airplane" />
                </Line>
                <IsDirect>직항</IsDirect>
              </Duration>
              <Arrival>
                <Time>오전 9:15</Time>
                <Airport>ICN</Airport>
              </Arrival>
            </DescBox>
          </LeftInner>
          <LeftInner>
            <AirPicBox>
              <img src="/images/jinairSample.jpeg" alt="airPic" />
            </AirPicBox>
            <DescBox>
              <Departure>
                <Time>오전 9:15</Time>
                <Airport>ICN</Airport>
              </Departure>
              <Duration>
                <DurationTime>1시간 45분</DurationTime>
                <Line>
                  <div />
                  <img src="/images/airplane.png" alt="airplane" />
                </Line>
                <IsDirect>직항</IsDirect>
              </Duration>
              <Arrival>
                <Time>오전 9:15</Time>
                <Airport>ICN</Airport>
              </Arrival>
            </DescBox>
          </LeftInner>
        </LeftBox>
        <RightBox>
          <TextBox>총 23건 중 최저가</TextBox>
          <PriceInOption>₩561,400</PriceInOption>
          <Choose>선택 →</Choose>
        </RightBox>
      </InnerBox>
    </OuterBoxEco>
  );
}

export default OptionEco;

const OuterBoxEco = styled.div`
  width: 100%;
  height: 240px;
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
