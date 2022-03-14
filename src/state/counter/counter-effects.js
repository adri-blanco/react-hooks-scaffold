export default (dispatch) => ({
  async asyncIncrement() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    dispatch.counter.increment(1);
  },
});
