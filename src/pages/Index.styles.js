import styled from 'styled-components';

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 24px 32px;
  background-color: white;
  border-radius: 8px;
  display: grid;
  gap: 24px;
`;

export default {
  Container,
  Card,
};
