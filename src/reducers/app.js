const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'RESET_APP':
      return defaultState;
    default:
      return state;
  }
};
