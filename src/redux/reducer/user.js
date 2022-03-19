import { LOGIN } from "../actionName";

const initialState = {
    token: '',
    isLogin: false,
}

const reducer = (state = initialState, action) => {
    const newState = {...state }
    const payload = action.payload
    switch (action.type) {
        case LOGIN:
            newState.token = payload.token
            newState.isLogin = true
            console.log(payload.token);
            return newState
        default:
            return {...state, ...payload }
    }
}   

export default reducer