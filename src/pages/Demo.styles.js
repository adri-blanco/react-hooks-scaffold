import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  gap: 12px;
  justify-items: center;
  padding: 24px 32px;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-radius: 8px;
`;

const Number = styled.span`
  font-size: 30px;
  color: ${({ number }) => (number === 0 ? 'red' : 'green')};
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #c1c1c1;
  height: 30px;
  width: 30px;
  animation: ${rotate} 0.8s linear infinite;
`;

export default {
  Container,
  Number,
  Loading,
  Grid,
};
