import { REGISTER_TOKEN } from './AuthActions';

const initialState = {
    token: '',
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
}

export default AuthReducer;

