const INITIAL_STATE = {
  open: false,
  title: null,
  content: null,
  onYes: () => {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@confirmation/OPEN_CONFIRMATION':
      return { ...action.payload, open: true };
    case '@confirmation/CLOSE_CONFIRMATION':
      return { ...state, open: false };
    default:
      return { ...state };
  }
};
