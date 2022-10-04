import React from 'react';
import styled from 'styled-components';
import { TEXT_ONE } from './TEXT_ONE';
import { TEXT_TWO } from './TEXT_TWO';
import { TEXT_THREE } from './TEXT_THREE';
import { TEXT_FOUR } from './TEXT_FOUR';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Title>탐색</Title>
        {TEXT_ONE.map(e => {
          return <Text key={e.id}>{e.text}</Text>;
        })}
      </Wrap>
      <Wrap>
        <Title>파트너</Title>
        {TEXT_TWO.map(e => {
          return <Text key={e.id}>{e.text}</Text>;
        })}
      </Wrap>
      <Wrap>
        <Title>회사</Title>
        {TEXT_THREE.map(e => {
          return <Text key={e.id}>{e.text}</Text>;
        })}
      </Wrap>
      <Wrap>
        <Title>도움말</Title>
        {TEXT_FOUR.map(e => {
          return <Text key={e.id}>{e.text}</Text>;
        })}
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  ${props => props.theme.variables.flex()}

  height: 570px;
  background-color: rgb(2, 18, 44);
`;

const Wrap = styled.div`
  height: 400px;
  width: 200px;
  margin-right: 40px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  color: rgb(255, 123, 89);
  font-size: 25px;
  font-weight: bolder;
`;

const Text = styled.p`
  margin-top: 12px;
  color: white;
  font-weight: 500;
`;
