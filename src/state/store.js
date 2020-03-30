import { init } from '@rematch/core';
import Counter from './counter/counter-model';

const models = {
  counter: Counter,
};

const store = init({
  models,
});

export const { dispatch } = store;
export default store;
