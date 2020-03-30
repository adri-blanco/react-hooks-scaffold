import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './index-styles';

const Index = ({ classes }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.counter.asyncIncrement();
  }, []);

  const { clickCounter } = useSelector(s => s.counter);

  return (
    <div className={classes.container}>
      <span
        className={classNames(classes.number, {
          [classes.zero]: clickCounter === 0,
        })}
      >
        {clickCounter}
      </span>
    </div>
  );
};

export default withStyles(styles)(Index);
