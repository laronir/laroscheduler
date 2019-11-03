import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  changeRoute: false,
};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.changeRoute = true;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.token = null;
        draft.loading = false;
        break;
      }
      case '@auth/CLEAR_NAVIGATION': {
        draft.changeRoute = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.loading = false;
        draft.signed = false;
        break;
      }
      default:
    }
  });
};

export default auth;
