export const REGISTER_TOKEN = 'REGISTER_TOKEN';

export function saveToken(token) {
    return {
      type: REGISTER_TOKEN,
      token,
    };
}

export function registerAuth(token) {
    return (dispatch) => {
      dispatch(saveToken(token));
    };
}
