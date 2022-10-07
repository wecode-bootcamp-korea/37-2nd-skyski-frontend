import React, { useEffect, useNavigate } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const RedirectKakao = () => {
  const navigate = useNavigate();
  let validCode = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    fetch(
      `http://10.58.52.85:3000/oauth?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${validCode}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'login success') {
          localStorage.setItem('token', result.accesstoken);
          navigate('/');
        }
      });
  }, [validCode, navigate]);
  return (
    <div>
      <Loading>
        <LoadingImg src="https://images.unsplash.com/photo-1562805612-9c340007e0b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <LoadingBox>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress size={100} />
          </Box>
        </LoadingBox>
      </Loading>
    </div>
  );
};

const Loading = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
`;

const LoadingImg = styled.img`
  position: absolute;
  width: 100%;
  filter: brightness(50%);
`;

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default RedirectKakao;
