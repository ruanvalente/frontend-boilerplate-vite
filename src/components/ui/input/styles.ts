import styled from 'styled-components';

export const InputStyledWrapper = styled.div`
  input[type='date']:focus {
    outline: none;
  }

  input[type='date']::-webkit-clear-button {
    display: none;
  }

  input[type='date']::-ms-clear {
    display: none;
  }

  input[type='date']::-webkit-inner-spin-button {
    display: none;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
