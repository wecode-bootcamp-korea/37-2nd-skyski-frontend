import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Logo>
        <i class="fa-solid fa-plane" />
        <h1>Skyski</h1>
      </Logo>
      <Buttons>
        <span>도움말</span>
        <Country>
          <span>한국어 </span>
          <span>🇰🇷 대한민국</span>
          <span> ₩KRW</span>
        </Country>
        <Login>로그인</Login>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between')}
  padding: 0 200px;
  width: 100%;
  height: 78px;
  background-color: ${({ theme }) => theme.style.white}; ;
`;

const Logo = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between')}
  width: 130px;
  color: ${({ theme }) => theme.style.lightBlue};
  font-size: 30px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between')}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  color: ${({ theme }) => theme.style.lightBlue};
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const Country = styled.button`
  ${({ theme }) => theme.variables.flex('', 'flex-start')}
  display: flex;
  align-items: center;
  height: 40px;
  padding: 6px 16px;
  border-style: none;
  border-radius: 0.5rem;
  font-size: 12px;

  span {
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.style.grey};
  }
`;

const Login = styled(Country)`
  color: ${({ theme }) => theme.style.lightBlue};
  font-size: 19px;
  font-weight: 800;
`;

export default Header;
