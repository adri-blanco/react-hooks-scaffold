import reducers from './counter-reducers';
import effects from './counter-effects';

export default {
  state: {
    clickCounter: 0,
  },
  effects,
  reducers,
};
