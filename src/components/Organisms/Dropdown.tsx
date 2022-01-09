import React from 'react';
import TextButton from '@components/molecules/TextButton';
import styled from 'styled-components';
import { BG_GREY, BLACK, SHADOW_GREY, WHITE } from '@styles/palette';

const StyledMarginWrapper = styled.div<{ topLeft?: boolean; color?: string }>`
  border-width: ${props =>
    props.topLeft ? '2px 0px 0px 2px' : '0px 2px 2px 0px'};
  border-color: ${props => props.color || BG_GREY};
  border-style: solid;
`;

const StyledContentWrapper = styled.div`
  background-color: ${BG_GREY};
  min-width: 100px;
`;

const StyledDropdownWrapper = styled.div`
  display: block;
  position: absolute;
  overflow: auto;
  z-index: 1;
`;

const StyledSeparator = styled.div`
  height: 2px;
  background-color: ${SHADOW_GREY};
  border-bottom: 2px ${WHITE} solid;
  margin: 7px 4px;
`;

export type DropdownButton = {
  text: string;
  selectable?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

const Dropdown = ({
  className,
  dropdownButtons,
  closeDrowdownFn,
}: {
  className?: string;
  dropdownButtons: DropdownButton[][];
  closeDrowdownFn: () => void;
}) => {
  return (
    <StyledDropdownWrapper className={className}>
      <StyledMarginWrapper color={BLACK} className={className}>
        <StyledMarginWrapper topLeft className={className}>
          <StyledMarginWrapper color={SHADOW_GREY} className={className}>
            <StyledMarginWrapper topLeft color={WHITE} className={className}>
              <StyledContentWrapper className={className}>
                {dropdownButtons.map((section, id) => (
                  <React.Fragment key={`dropdown-section-${id}`}>
                    {id !== 0 && <StyledSeparator />}
                    {section.map(({ text, selectable, selected, onClick }) => (
                      <TextButton
                        key={`dropdown-section-${id}-btn-${text}`}
                        text={text}
                        menu
                        className={className}
                        onClick={() => {
                          !!onClick && onClick();
                          closeDrowdownFn();
                        }}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </StyledContentWrapper>
            </StyledMarginWrapper>
          </StyledMarginWrapper>
        </StyledMarginWrapper>
      </StyledMarginWrapper>
    </StyledDropdownWrapper>
  );
};

export default Dropdown;
