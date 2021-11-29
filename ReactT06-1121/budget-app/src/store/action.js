//Action bao gồm: Action Type, Action Creator
import { ACT_ADD_INCOME } from './actionType'

export function actAddIncome(){
    return{
        type: ACT_ADD_INCOME,
        payload: null
    }
}
