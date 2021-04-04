const postReducer = (state = {email: 'kenny@gmail.com', password: 'kenny'}, action) => {
    switch (action.type){
        case 'VALIDATE_DETAILS': 
            return action.data

        default: 
            return state
    }
}

export default postReducer;