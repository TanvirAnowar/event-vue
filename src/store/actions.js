import * as types from './mutaionType'

export const signIn = ({commit},user_payload)=>{
    commit(types.SIGN_IN,user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const eventList = ({commit},events_payload)=>{
    commit(types.EVENT_LIST,events_payload)
}