import { init } from '@rematch/core';
import CounterModel from '../counter-model';

describe('State -> Counter -> Effects', () => {
  let store;
  beforeEach(() => {
    store = init({
      models: { counter: CounterModel },
    });
  });
  describe('asyncIncrement', () => {
    it('should increment in one step', async () => {
      await store.dispatch.counter.asyncIncrement();
      const state = store.getState().counter;
      expect(state).toHaveProperty('clickCounter');
      expect(state.clickCounter).toBe(1);
    });
  });
});
