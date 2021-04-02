import store from '../Store';

const myAction = (weight, dehydration) => {
   store.dispatch({
       type: 'GET_INPUT',
       data: {
           weight,
           dehydration
       }
   })
}

export default myAction;