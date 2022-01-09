import React from 'react';
import styled from 'styled-components';

export const StyledTypography = styled.div<{
  size?: number;
  highlight?: number;
}>`
  font-size: ${props => props.size || 22}px;
  &:first-letter {
    text-decoration: underline;
    margin-right: 0.1rem;
  }
`;

const Typography = ({
  children,
  size,
  className,
}: {
  children: string;
  size?: number;
  className?: string;
}) => {
  return (
    <StyledTypography size={size} className={className}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
