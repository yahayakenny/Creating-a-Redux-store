const initialState = {
    account_name: '',
    account_number: '',
}

const AccountReducer = (state = initialState, action) => {
    switch (action.type){
        case 'POST_ACCOUNT':
            return action.data
        default:
            return state
    }
}

export default AccountReducer;