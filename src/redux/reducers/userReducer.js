const initialState = {
    usersArray: [],
    errors: []
}

const UserActionType = {
    SET_USERS: 'SET_USERS',
    SET_ERRORS: 'SET_ERRORS',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionType.SET_USERS:
            return {
                ...state,
                results: action.payload.users
            }
        case UserActionType.SET_ERRORS:
            return {
                ...state,
                errors: action.payload.errors
            }
        default :
            return state
    }
}

export {userReducer, UserActionType}