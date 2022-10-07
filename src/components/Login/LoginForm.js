import React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const LoginForm = ({ open, openLoginForm }) => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <Dialog open={open}>
        <Wraper>
          <LoginImg src="images/travel.png" alt="travel" />
          <ContentContainer>
            <DialogTitle>
              <Title>모든 여행 준비를 한번에</Title>
              <IconButton
                aria-label="close"
                onClick={openLoginForm}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}
              >
                <i className="fa-solid fa-xmark" />
              </IconButton>
            </DialogTitle>
            <ContentTextWrap>
              <DialogContentText>
                가격 추이를 살펴보고, 빠르고 간편한 예약으로 여행을 손쉽게
                계획하세요.
              </DialogContentText>
            </ContentTextWrap>
            <LoginButtons>
              <li>
                <button>이메일로 로그인하기</button>
              </li>
              <li>
                <button>
                  <i className="fa-brands fa-google" />
                  <span> Google</span>
                </button>
              </li>
              <li>
                <button>
                  <a href={KAKAO_AUTH_URL}>
                    <i className="fa-solid fa-comment" />
                    <span> Login with Kakao</span>
                  </a>
                </button>
              </li>
            </LoginButtons>
            <FormControlLabel control={<Checkbox />} label="로그인 상태 유지" />
          </ContentContainer>
          <LoginFooter>
            계속 진행하시면 스카이스키의 <span>서비스 약관</span>과
            <span> 개인정보처리방침</span>에 동의하시게 됩니다.
          </LoginFooter>
        </Wraper>
      </Dialog>
    </div>
  );
};

const Wraper = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  width: 420px;
`;

const LoginImg = styled.img`
  width: 420px;
`;

const ContentContainer = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  padding: 0 32px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ContentTextWrap = styled.div`
  margin-bottom: 18px;
`;

const LoginButtons = styled.ul`
  ${({ theme }) => theme.variables.flex('column')}
  width: 100%;

  li {
    display: flex;
    margin-bottom: 18px;
    width: 100%;

    button {
      padding: 6px 16px;
      width: 100%;
      height: 48px;
      border-style: none;
      border-radius: 12px;
      color: #000000;
      font-size: 20px;

      a {
        text-decoration: none;
        color: #000000;
      }

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.style.grey};
      }
    }
  }
`;

const LoginFooter = styled.div`
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.style.grey};
  font-size: 12px;

  span {
    color: ${({ theme }) => theme.style.lightBlue};
  }
`;

export default LoginForm;
