import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import Styled from './Demo.styles';

function Demo() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch.counter.asyncIncrement();
  }, []);

  const { clickCounter } = useSelector((s) => s.counter);

  const onClick = useCallback(async () => {
    setLoading(true);
    await dispatch.counter.asyncIncrement();
    setLoading(false);
  }, []);

  return (
    <Styled.Container>
      <Styled.Grid>
        <Styled.Number number={clickCounter}>{clickCounter}</Styled.Number>
        <Button onClick={onClick}>More</Button>
        {loading && <Styled.Loading />}
      </Styled.Grid>
    </Styled.Container>
  );
}

Demo.propTypes = {};

export default Demo;
