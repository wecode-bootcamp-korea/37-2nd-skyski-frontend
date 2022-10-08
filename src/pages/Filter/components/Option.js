import React from 'react';
import styled from 'styled-components';

function Option() {
  return (
    <InnerBox>
      <LeftBox>
        <LeftUpper />
        <LeftLower />
      </LeftBox>
      <RightBox />
    </InnerBox>
  );
}

export default Option;

const InnerBox = styled.div`
  display: flex;
  border: 1px solid black;
`;
const LeftBox = styled.div`
  width: 459px;
  height: 155px;
  border-right: 1px solid black;
`;
const LeftUpper = styled.div``;
const LeftLower = styled.div``;
const RightBox = styled.div``;
