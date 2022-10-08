import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../Login/LoginForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('token');

  const openLoginForm = () => {
    setOpen(!open);
  };
  const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  return (
    <Container>
      <Link to="/">
        <Logo>
          <i className="fa-solid fa-plane" />
          <h1>Skyski</h1>
        </Logo>
      </Link>
      <Buttons>
        <span>도움말</span>
        <Country>
          <span>한국어 </span>
          <span>🇰🇷 대한민국</span>
          <span> ₩KRW</span>
        </Country>
        {!token ? (
          <Login onClick={openLoginForm}>로그인</Login>
        ) : (
          <Login onClick={logout}>로그아웃</Login>
        )}
        <LoginForm open={open} openLoginForm={openLoginForm} />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between')}
  padding: 0 200px;
  /* width: 100%; */
  height: 78px;
  background-color: ${({ theme }) => theme.style.white};

  a {
    text-decoration: none;
  }
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
  width: 340px;
  color: ${({ theme }) => theme.style.lightBlue};
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const Country = styled.button`
  ${({ theme }) => theme.variables.flex('', 'flex-start')}
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
