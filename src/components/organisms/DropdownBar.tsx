import React from 'react';
import TextButton from '@components/molecules/TextButton';
import styled from 'styled-components';
import Dropdown, { DropdownButton } from './Dropdown';

const StyledDropdownWrapper = styled.div``;

const DropdownBar = ({
  className,
  onClick,
  pressedButton,
  buttons,
  closeDrowdownFn,
}: {
  className: string;
  onClick: (buttonName: string | null) => void;
  pressedButton: string | null;
  buttons: { buttonName: string; dropdownButtons: DropdownButton[][] }[];
  closeDrowdownFn: () => void;
}) => {
  return (
    <>
      {buttons.map(({ buttonName, dropdownButtons }, id) => (
        <StyledDropdownWrapper key={`dropdown_${id}`} className={className}>
          <TextButton
            className={className}
            text={buttonName}
            pressdownable
            pressed={pressedButton === buttonName}
            onClick={() => onClick(buttonName)}
          />
          {pressedButton === buttonName && (
            <Dropdown
              className={className}
              dropdownButtons={dropdownButtons}
              closeDrowdownFn={closeDrowdownFn}
            />
          )}
        </StyledDropdownWrapper>
      ))}
    </>
  );
};

export default DropdownBar;
