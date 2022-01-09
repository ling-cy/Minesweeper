import styled from 'styled-components';
import React from 'react';

const Separator = styled.div<{ x?: number; y?: number }>`
  width: ${props => `${props.x || 0}px`};
  height: ${props => `${props.y || 0}px`};
`;

export default Separator;
