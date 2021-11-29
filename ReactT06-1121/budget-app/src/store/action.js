//Action bao gồm: Action Type, Action Creator

const ACT_ADD_INCOME = 'ACT_ADD_INCOME'


export function actAddIncome(){
    return{
        type: ACT_ADD_INCOME,
        payload: null
    }
}
