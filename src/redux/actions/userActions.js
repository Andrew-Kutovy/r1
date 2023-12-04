import {UserActionType} from "../reducers/userReducer";

export const userActions = {
    setUsers: (data) => ({type: UserActionType.SET_USERS, payload: data})
}