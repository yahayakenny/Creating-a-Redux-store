const initialState = {
    bank_name : '',
    account_name: '',
    account_number: '',
}

const PopulateAccountReducer = (state=initialState, action) => {
    switch (action.type){
        case 'POPULATE_ACCOUNTS':
            return action.data
        default:
            return state
    }
}

export default PopulateAccountReducer;