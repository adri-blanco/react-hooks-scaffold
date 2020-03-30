import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.counter.asyncIncrement();
  }, []);

  const { clickCounter } = useSelector(s => s.counter);

  return <div>{clickCounter}</div>;
};

export default Index;
