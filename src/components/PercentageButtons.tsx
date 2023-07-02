import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

interface PercentageButtonsProps {
  onDepositChange: (newDeposit: number) => void;
  balance: any
}

const StyledContainer = styled.div`
  display: grid;
  gap: 1vw;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-auto-flow: column;
  }
`;

const StyledButton = styled(Button)`
  flex: 1;
`;

const PercentageButtons: React.FC<PercentageButtonsProps> = ({ onDepositChange, balance }) => {
  const handleButtonClick = (percentage: number) => {
    const newDeposit = percentage * Number(balance);
    onDepositChange(newDeposit);
  };

  return (
    <StyledContainer>
      <StyledButton variant="contained" size="small" onClick={() => handleButtonClick(0.25)}>
        25%
      </StyledButton>
      <StyledButton variant="contained" size="small" onClick={() => handleButtonClick(0.5)}>
        50%
      </StyledButton>
      <StyledButton variant="contained" size="small" onClick={() => handleButtonClick(0.75)}>
        75%
      </StyledButton>
      <StyledButton variant="contained" size="small" onClick={() => handleButtonClick(1)}>
        100%
      </StyledButton>
    </StyledContainer>
  );
};

export default PercentageButtons;
