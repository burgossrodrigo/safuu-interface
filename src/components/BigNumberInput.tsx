import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

interface BigNumberInputProps {
  balance: number; // The balance to compare against
  onDepositChange: (newDeposit: number) => void; // Event handler for value change
}

const BigNumberInput: React.FC<BigNumberInputProps> = ({ balance, onDepositChange }) => {
  const [inputValue, setInputValue] = useState<string>(''); // State to hold the input value
  const [error, setError] = useState<string>(''); // State to hold the error message

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Check if the input value is a valid number
    const parsedValue = parseFloat(newValue);
    if (!isNaN(parsedValue)) {
      // Check if the parsed value is greater than or equal to the balance
      if (parsedValue <= balance) {
        // Call the onDepositChange event handler with the parsed value
        onDepositChange(parsedValue);
        setError('');
      } else {
        // Display an error if the parsed value is greater than the balance
        onDepositChange(0); // Reset the value
        setError('Input value exceeds balance');
      }
    } else {
      // Display an error if the input value is not a valid number
      onDepositChange(0); // Reset the value
      setError('Invalid input value');
    }
  };

  return (
    <div>
      <TextField
        type="number"
        label="Enter a value"
        value={inputValue}
        onChange={handleInputChange}
        inputProps={{
          step: '0.000000000000000001', // Set step to allow 18 decimal places
          min: '0', // Set minimum value
        }}
        error={!!error}
        helperText={error}
      />
      <Typography variant='subtitle2'>{inputValue}</Typography>
    </div>
  );
};

export default BigNumberInput;
