import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Styled from './Index.styles';

function Index() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/demo');
  };

  return (
    <Styled.Container>
      <Styled.Card>
        <span>Welcome to the home page</span>
        <Button onClick={onClick}>To the demo</Button>
      </Styled.Card>
    </Styled.Container>
  );
}

export default Index;
