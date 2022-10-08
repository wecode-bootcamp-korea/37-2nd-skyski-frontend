import React, { useState } from 'react';
import styled from 'styled-components';

function Booking({ location }) {
  const [openedArr, setOpenedArr] = useState([]);

  const openThis = e => {
    if (openedArr.includes(e.currentTarget.id)) {
      const arr = openedArr.filter(el => el !== e.currentTarget.id);
      setOpenedArr(arr);
    } else {
      setOpenedArr([...openedArr, e.currentTarget.id]);
    }
  };
  console.log(location);

  return (
    <BackgroundBox>
      <TicketInfoBox>
        <TicketInfo>
          <Title>
            <div>가는날 출발시간</div>
            <span>2022년 10월 17일 (월)</span>
          </Title>
          <Ticket>
            <TicketSummary id="1" onClick={openThis}>
              <AirPicBox>
                <img src="/images/jinairSample.jpeg" alt="airPic" />
              </AirPicBox>
              <DescBox>
                <Departure>
                  <Time>오후 1:20</Time>
                  <Airport>GMP</Airport>
                </Departure>
                <Duration>
                  <DurationTime>{`${location.product.duration1}분`}</DurationTime>
                  <Line>
                    <div />
                    <img src="/images/airplane.png" alt="airplane" />
                  </Line>
                  <IsDirect>직항</IsDirect>
                </Duration>
                <Arrival>
                  <Time>오후 2:10</Time>
                  <Airport>PUS</Airport>
                </Arrival>
              </DescBox>
              <DetailBtn>
                <img src="/images/arrowDown.png" alt="arrow" />
              </DetailBtn>
            </TicketSummary>
            <TicketDetail id="1" isOpened={openedArr}>
              <DetailTopBox>
                <img src="images/jinairSample.jpeg" alt="airlinepic" />
                <span>제주항공 7C1362</span>
              </DetailTopBox>
              <DetailMiddleBox>
                <MiddleLeft>
                  <div>50분</div>
                </MiddleLeft>
                <MiddleRight>
                  <div>오후 1:20 GMP 김포공항</div>
                  <div>오후 2:10 PUS 김해공항</div>
                </MiddleRight>
              </DetailMiddleBox>
              <DetailBottomBox>
                <div>
                  <span>도착</span>:2022년 10월 17일 (월) |
                  <span>여행 기간</span>:50분
                </div>
              </DetailBottomBox>
            </TicketDetail>
          </Ticket>
        </TicketInfo>
        <TicketInfo>
          <Title>
            <div>오는날 출발시간</div>
            <span>2022년 10월 22일 (토)</span>
          </Title>
          <Ticket>
            <TicketSummary id="2" onClick={openThis}>
              <AirPicBox>
                <img src="/images/jinairSample.jpeg" alt="airPic" />
              </AirPicBox>
              <DescBox>
                <Departure>
                  <Time>오후 6:00</Time>
                  <Airport>PUS</Airport>
                </Departure>
                <Duration>
                  <DurationTime>{`${location.product.duration2}분`}</DurationTime>
                  <Line>
                    <div />
                    <img src="/images/airplane.png" alt="airplane" />
                  </Line>
                  <IsDirect>직항</IsDirect>
                </Duration>
                <Arrival>
                  <Time>오후 6:50</Time>
                  <Airport>GMP</Airport>
                </Arrival>
              </DescBox>
              <DetailBtn>
                <img src="/images/arrowDown.png" alt="arrow" />
              </DetailBtn>
            </TicketSummary>
            <TicketDetail id="2" isOpened={openedArr}>
              <DetailTopBox>
                <img src="images/jinairSample.jpeg" alt="airlinepic" />
                <span>제주항공 7C1362</span>
              </DetailTopBox>
              <DetailMiddleBox>
                <MiddleLeft>
                  <div>50분</div>
                </MiddleLeft>
                <MiddleRight>
                  <div>오후 6:00 PUS 김해공항</div>
                  <div>오후 6:50 GMP 김포공항</div>
                </MiddleRight>
              </DetailMiddleBox>
              <DetailBottomBox>
                <div>
                  <span>도착</span>:2022년 10월 22일 (토) |
                  <span>여행 기간</span>:50분
                </div>
              </DetailBottomBox>
            </TicketDetail>
          </Ticket>
        </TicketInfo>
      </TicketInfoBox>
      <BookingTicket>
        <ThisTitle>티켓 예약하기</ThisTitle>
        <span>일반석, 성인 1명</span>
        <Caution id="3" isOpened={openedArr}>
          <CautionTitle id="3" onClick={openThis}>
            <CautionLogo>i</CautionLogo>
            <div>예약 전 읽어보기</div>
            <img src="/images/arrowDown.png" alt="arrow" />
          </CautionTitle>
          <CautionDetail>
            <CautionDetailTop>
              표시된 요금에는 모든 세금 및 수수료가 포함되어 있으나, 예약 전에
              웹사이트에서 <span>티켓의 세부정보, 최종 가격, 약관</span>을
              반드시 확인하시기 바랍니다.
            </CautionDetailTop>
            <CautionDetailBottom>
              <CautionDetailBottomTop>
                <CDBTitle>· 추가 요금 확인</CDBTitle>
                <CDBDetail>
                  일부 항공사/여행사에서는 <span>수하물, 보험</span> 또는{' '}
                  <span>신용 카드</span> 사용에 별도의 수수료를 부과할 수
                  있으며, 서비스 수수료를 포함합니다.
                  <a href="http://skyscanner.co.kr">항공사 수수료</a> 보기.
                </CDBDetail>
              </CautionDetailBottomTop>
              <CautionDetailBottomBottom>
                <CDBTitle>
                  · 12~16세 승객에 대한 이용 약관을 확인하세요.
                </CDBTitle>
                <CDBDetail>
                  보호자를 동반하지 않고 혼자 여행하는 미성년 승객에게는 제한
                  사항이 적용될 수 있습니다.
                </CDBDetail>
              </CautionDetailBottomBottom>
            </CautionDetailBottom>
          </CautionDetail>
        </Caution>
        <SelectBox>
          <SelectCard>
            <OrderCompany>
              <OrderCompanyName>투어비스</OrderCompanyName>
              <OrderWay>
                <img src="/images/airplaneBlue.png" alt="airplane" />
                <span>즉시 결제 지원</span>
              </OrderWay>
            </OrderCompany>
            <CardRightPart>
              <Price>
                <span>힙계</span>
                <div>{`₩${Number(
                  location?.product?.totalPrice
                ).toLocaleString()}원`}</div>
              </Price>
              <ChooseBtnBox>선택 →</ChooseBtnBox>
            </CardRightPart>
          </SelectCard>
        </SelectBox>
      </BookingTicket>
    </BackgroundBox>
  );
}

export default Booking;

const BackgroundBox = styled.div`
  width: 740px;
  border-right: 1px solid #dddde5;
  margin-right: 30px; ;
`;

const TicketInfoBox = styled.div``;
const TicketInfo = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 10px 0;

  div {
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }

  span {
    font-size: 16px;
    color: #68697f;
  }
`;

const Ticket = styled.div``;
const BookingTicket = styled.div`
  margin-top: 30px;

  span {
    font-size: 14px;
    color: #68697f;
  }
`;

const ThisTitle = styled.div`
  font-size: 20px;
  margin-bottom: 5px; ;
`;

const Caution = styled.div`
  width: 688px;
  height: ${props => (props.isOpened.includes(props.id) ? '170px' : '14px')};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
  padding: 17px 10px;
  overflow: hidden;
  margin-top: 5px;
`;

const CautionTitle = styled.div`
  display: flex;
  height: 35px;
  position: relative;
  div {
    font-size: 16px;
  }

  img {
    width: 17px;
    height: 17px;
    position: absolute;
    right: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CautionLogo = styled.div`
  ${props => props.theme.variables.flex()}
  width: 15px;
  height: 15px;
  font-size: 10px;
  border-radius: 100%;
  background-color: #68697f;
  color: white;
  margin-right: 10px;
`;
const CautionDetail = styled.div``;
const CautionDetailTop = styled.div`
  font-size: 14px;
  padding: 0px 24px;
  color: #68697f;

  span {
    font-weight: bold;
  }
`;
const CautionDetailBottom = styled.div`
  padding: 18px 40px;
`;
const CautionDetailBottomTop = styled.div`
  font-size: 14px;
`;
const CautionDetailBottomBottom = styled.div`
  margin-top: 15px;
  font-size: 14px;
`;

const CDBTitle = styled.div`
  font-weight: bold;
  color: #68697f;
`;
const CDBDetail = styled.div`
  color: #68697f;
  span {
    font-weight: bold;
  }
`;

const TicketSummary = styled.div`
  display: flex;
  width: 708px;
  height: 67px;
  background-color: white;
  border: 1px solid #dddde5;
  border-radius: 5px;
  padding: 12px 0;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const AirPicBox = styled.div`
  img {
    width: 60px;
    height: 30px;
    object-fit: cover;
    margin: 5px 15px;
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
  width: 145px;
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
  width: 163px;
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
    width: 136px;
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
  width: 145px;
  height: 100%;
`;

const DetailBtn = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
    margin-right: 17px;
  }
`;

const TicketDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 708px;
  height: ${props => (props.isOpened.includes(props.id) ? '161px' : 0)};
  overflow: hidden;
  background-color: white;
  border: 1px solid #dddde5;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: height 0.2s ease-in-out;
`;
const DetailTopBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7a7b8e;
  margin: 20px 0px 0px 12px;
  img {
    width: 36px;
    height: 24px;
  }
`;
const DetailMiddleBox = styled.div`
  display: flex;
  height: 60px;
  margin: 10px 0 20px 12px;
`;

const MiddleLeft = styled.div`
  ${props => props.theme.variables.flex()}

  width: 66px;
  font-size: 12px;
`;
const MiddleRight = styled.div`
  margin-left: 30px;
  div {
    display: flex;
    align-items: center;
    height: 35px;
  }
`;
const DetailBottomBox = styled.div`
  font-size: 12px;
  margin: 0 0 10px 20px;
  span {
    font-weight: bold;
  }
`;

const SelectBox = styled.div``;
const SelectCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 708px;
  height: 110px;
  border-bottom: 1px solid #dddde5;
`;
const OrderCompany = styled.div``;

const OrderCompanyName = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 20px 0 5px 0;
`;
const OrderWay = styled.div`
  img {
    width: 18px;
    height: 18px;
  }

  span {
    font-size: 12px;
    color: #707186;
  }
`;

const CardRightPart = styled.div`
  width: 560px;
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;
const Price = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  span {
    font-size: 12px;
  }
  div {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 20px;
  }
`;
const ChooseBtnBox = styled.div`
  ${props => props.theme.variables.flex()}

  width: 86px;
  height: 36px;
  background-color: #01a699;
  border-radius: 7px;
  color: white;
  font-size: 19px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #00887d;
  }
`;
