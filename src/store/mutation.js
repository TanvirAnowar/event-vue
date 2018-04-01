import * as types from './mutaionType'

export const mutations = {
    [types.SIGN_IN] (state,user_payload){
        state.user = user_payload
    },
    [types.SIGN_OUT] (state){
        state.user = {}
    },
    [types.EVENT_LIST] (state,user_payload){
        state.events = user_payload
    }

}
