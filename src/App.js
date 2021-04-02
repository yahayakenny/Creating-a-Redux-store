import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountForm from './components/add-account/AccountForm';
import AccountDisplay from './components/get-accounts/AccountDisplay';
import PostForm from './components/post-form/PostForm'
import UpdateAccountForm from './components/update-account/UpdateAccountForm';
import Navigation from './Nav';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Navigation />
                <Switch>
                    <Route path="/" component={PostForm} exact/>
                    <Route path="/add-accounts" component={AccountForm} exact/>
                    <Route path="/display-accounts" component={AccountDisplay} exact/>
                    <Route 
                    path="/update-accounts/:id/edit"
                    component={UpdateAccountForm}
                    />
                </Switch>
                </div> 
            </BrowserRouter>
        </div>
    )
}

export default App;