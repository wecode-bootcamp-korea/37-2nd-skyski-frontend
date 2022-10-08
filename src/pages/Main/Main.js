import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const Main = () => {
  //출발지, 도착지, 가는날, 오는날, 좌석 등급 값 state, navgate로 state값 넘겨주기
  const navigate = useNavigate();

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [seat, setSeat] = useState('일반석');
  const [radio, setRadio] = useState('왕복');

  const saveStart = e => {
    setStart(e.target.value);
  };

  const saveEnd = e => {
    setEnd(e.target.value);
  };

  const saveSeat = e => {
    setSeat(e.target.value);
  };

  const saveRadio = e => {
    setRadio(e.target.value);
  };

  const move = () => {
    navigate('/flight', {
      state: {
        start: start,
        end: end,
        startDate: startDate,
        endDate: endDate,
        radio: radio,
        seat: seat,
      },
    });
  };

  const chage = () => {
    const startLocation = start;
    const endLocation = end;
    setStart(endLocation);
    setEnd(startLocation);
  };

  return (
    <Container>
      <Title>이제 여행을 시작하세요.</Title>
      <Box>
        <Radio
          type="radio"
          name="route"
          value="왕복"
          onChange={saveRadio}
          checked
        />
        <RouteText>왕복</RouteText>
        <Radio type="radio" name="route" value="편도" onChange={saveRadio} />
        <RouteText>편도</RouteText>
        <InputBox>
          <InputBoxOne>
            <Text>출발지</Text>
            <StartPlace
              placeholder="김포(모두)"
              onChange={saveStart}
              value={start}
            />
            <Change onClick={chage}>
              <i className="fa-solid fa-right-left" />
            </Change>
          </InputBoxOne>
          <InputBoxTwo>
            <Text>도착지</Text>
            <EndPlace placeholder="김해(모두)" onChange={saveEnd} value={end} />
          </InputBoxTwo>
          <InputBoxThree>
            <Text>가는날</Text>
            <Wrapper>
              <StartPicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
                locale={ko}
              />
            </Wrapper>
          </InputBoxThree>
          <InputBoxFour>
            <Wrapper>
              <Text>오는날</Text>
              <EndPicker
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                onChange={date => setEndDate(date)}
                locale={ko}
              />
            </Wrapper>
          </InputBoxFour>
          <InputBoxFive>
            <Text>좌석 등급</Text>
            <Selection onChange={saveSeat} value={seat}>
              <Option value="일반석">일반석</Option>
              <Option value="비지니스">비지니스석</Option>
              <Option value="일등석">일등석</Option>
            </Selection>
          </InputBoxFive>
        </InputBox>
        <Search onClick={move}>항공권 검색</Search>
      </Box>
      <Video muted autoPlay loop>
        <source
          src={`/video/${randomVideo}`}
          type="video/mp4"
          alt="background"
        />
      </Video>
    </Container>
  );
};

export default Main;

const backgroundVideo = ['video.mp4', 'video2.mp4', 'video3.mp4'];

const randomVideo =
  backgroundVideo[Math.floor(Math.random() * backgroundVideo.length)];

const Video = styled.video`
  position: absolute;
  top: 0;
  z-index: -1;
`;
const Wrapper = styled.div`
  .react-datepicker {
    font-size: 1.4em;
  }
  .react-datepicker__header {
    padding-top: 0.8em;
  }
  .react-datepicker__month {
    margin: 0.4em 1em;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 1.9em;
    line-height: 1.9em;
    margin: 0.166em;
  }
  .react-datepicker__current-month {
    font-size: 1.1em;
  }
  .react-datepicker__navigation {
    top: 1em;
    line-height: 1.7em;
    border: 0.45em solid transparent;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #ccc;
    left: 1em;
  }
  .react-datepicker__navigation--next {
    border-left-color: #ccc;
    right: 1em;
  }
`;

const StartPicker = styled(ReactDatePicker)`
  width: 100%;
  height: 47px;
  box-sizing: border-box;
  padding: 8px 20px;
  font-size: 15px;
  border: none;
  border-right: 1px solid black;
  &:hover {
    cursor: pointer;
  }
`;
const EndPicker = styled(ReactDatePicker)`
  width: 100%;
  height: 47px;
  box-sizing: border-box;
  padding: 8px 20px;
  font-size: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 810px;
  margin-top: 78px;
`;

const Title = styled.p`
  margin-left: 15%;
  padding-top: 100px;
  color: white;
  font-size: 60px;
  font-weight: 600;
`;

const Box = styled.div`
  height: 215px;
  width: 70%;
  margin-left: 15%;
  background-color: rgb(2, 18, 44);
  border-radius: 8px;
  margin-top: 50px;
  padding-left: 20px;
`;

const Radio = styled.input`
  margin-top: 25px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const RouteText = styled.label`
  color: white;
  margin-right: 35px;
`;

const InputBox = styled.div`
  display: flex;
  height: 80px;
  color: white;
`;

const InputBoxOne = styled.div`
  width: 25%;
  height: 100%;
`;

const StartPlace = styled.input`
  width: 80%;
  height: 47px;
  padding-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid lightgray;
  border-right: none;
`;
const InputBoxTwo = styled.div`
  width: 20%;
  height: 100%;
`;

const EndPlace = styled.input`
  width: 100%;
  height: 47px;
  padding-left: 10px;
  border: 1px solid lightgray;
`;

const InputBoxThree = styled.div`
  width: 15%;
  height: 100%;
`;

const InputBoxFour = styled.div`
  width: 15%;
  height: 100%;
`;
const InputBoxFive = styled.div`
  width: 25%;
  height: 100%;
`;

const Text = styled.p`
  color: white;
  margin-bottom: 10px;
`;

const Search = styled.button`
  width: 180px;
  height: 45px;
  float: right;
  margin-right: 30px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: rgb(0, 166, 152);
  color: white;
  font-size: 23px;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Change = styled.button`
  width: 20%;
  height: 47px;
  background-color: white;
  border: 1px solid black;
  border: none;

  &:hover {
    i {
      color: red;
    }
    opacity: 0.9;
  }
`;

const Selection = styled.select`
  width: 80%;
  height: 47px;
  padding-left: 10px;
  border: none;
  border-left: 1px solid black;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Option = styled.option`
  height: 60px;
  font-size: 16px;
`;
