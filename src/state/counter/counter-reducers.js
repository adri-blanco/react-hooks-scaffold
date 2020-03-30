export default {
  increment(state, payload) {
    return {
      ...state,
      clickCounter: state.clickCounter + payload,
    };
  },
};
