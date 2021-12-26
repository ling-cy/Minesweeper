import React from 'react';
import styled from 'styled-components';

const StyledTypography = styled.div`
  &:first-letter {
    text-decoration: underline;
    margin-right: 0.1rem;
  }
`;

const Typography = ({ children }: { children: string }) => {
  return <StyledTypography>{children}</StyledTypography>;
};

export default Typography;
