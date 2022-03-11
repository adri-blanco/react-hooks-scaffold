import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from './Index.styles';

function Index() {
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
        <Styled.Button onClick={onClick}>More</Styled.Button>
        {loading && <Styled.Loading />}
      </Styled.Grid>
    </Styled.Container>
  );
}

Index.propTypes = {};

export default Index;
