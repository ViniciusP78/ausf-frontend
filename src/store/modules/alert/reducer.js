const INITIAL_STATE = {
  message: '',
  severity: 'error',
  open: false,
  duration: 4000
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@alert/OPEN_ALERT':
      return { ...state, ...action.payload, open: true };
    case '@alert/CLOSE_ALERT':
      return { ...state, open: false };
    default:
      return { ...state };
  }
}