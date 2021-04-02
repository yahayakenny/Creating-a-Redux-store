

const GetAccountReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_ACCOUNTS':
            return action.data
        default:
            return state
    }

}

export default GetAccountReducer;