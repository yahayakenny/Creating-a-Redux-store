const initialState = {
    bank_name : '',
    account_name: '',
    account_number: '',
}

const UpdateAccountReducer = (state=initialState, action) => {
    switch (action.type){
        case 'UPDATE_ACCOUNTS':
            return action.data
        default:
            return state
    }
}

export default UpdateAccountReducer;