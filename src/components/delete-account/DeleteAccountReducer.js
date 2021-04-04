const initialState = {
    account_name: '',
    account_number: '',
}

const DeleteAccountReducer = (state=initialState, action) => {
    switch (action.type){
        case 'DELETE_ACCOUNT':
            return action.data
        default:
            return state
    }
}

export default DeleteAccountReducer;