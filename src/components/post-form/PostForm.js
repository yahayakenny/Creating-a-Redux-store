import React, {useState}from 'react';
import postAction from './PostAction';
import {useSelector} from 'react-redux'

export const PostForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const getToken = useSelector((state => state));
    // console.log(getToken);

    const handleEmail = (e) => {
        setEmail(e.target.value)
     }
 
     const handlePassword = (e) => {
        setPassword(e.target.value)
     }
 
     const handleSubmit = (e) => {
        e.preventDefault()
        // In order to retrieve the data gotten from this component or any other component, you pass it to the action creator
        postAction(email, password)
     }

    return (
        <form onSubmit = {handleSubmit}>
            <div>Post form to API</div>
            <label>Email:
                <input type = 'email' onChange = {handleEmail} value = {email}/>
            </label>
           
            <label>Password:
                <input type = 'password' onChange = {handlePassword} value = {password}/>
            </label> 
            <button>Submit</button>
        </form>
    )
}

export default PostForm;