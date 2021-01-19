import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  flex: 1;
  justify-content: flex-end;
`;

const GallerySize = ({ size }) => (
  <Wrapper>
    {/* mountain logo */}
    [^`^] {size}
  </Wrapper>
);

export default GallerySize;
