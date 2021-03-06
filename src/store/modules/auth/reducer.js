
const INITIAL_STATE = {
  token: null,
  user: null,
  loading: false,
  logged: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_REQUEST':
      return { ...state, loading: true };

    case '@auth/SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        logged: true,
      };

    case '@auth/SIGNIN_ERROR':
      return { ...state, loading: false, error: true };

    case '@auth/CLEAR_ERROR':
      return { ...state, error: false };

    case '@auth/SIGNOUT_REQUEST':
      return { ...INITIAL_STATE };

    case '@auth/UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return { ...state };
  }
}
