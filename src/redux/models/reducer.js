export const reducerActions = {
  setState(state: Object, payload: Object): Object {
    return {
      ...state,
      ...payload,
      isError: false,
    };
  },
  setError(state: Object, payload: boolean) {
    return {
      ...state,
      isError: payload,
    };
  },
  clear(state: Object, payload = {}) {
    return {
      ...state,
      ...payload,
    };
  },
};
