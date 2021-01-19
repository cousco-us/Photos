import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  border: 1px solid black;
  flex: 1;
  /* justify-content: flex-end; */
`;

const HomeDetails = ({ tags }) => (
  <Wrapper>
    {tags[0].toUpperCase()}
  </Wrapper>
);

export default HomeDetails;
