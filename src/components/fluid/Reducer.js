export const myReducer = (state = {weight: 0, dehydration : 'mild'}, action) => {
    switch(action.type){
        case 'GET_INPUT':
            return action.data

        default: 
            return state
    }
}