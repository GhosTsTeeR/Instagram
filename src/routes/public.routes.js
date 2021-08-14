import { Redirect, Route, Switch } from 'react-router';
import { PublicRoute } from './helperRoutes';
import { isAuthenticated } from '../instagram/servises/auth/authentication';
import SignIn from '../instagram/views/SignIn';
import SignUp from '../instagram/views/SignUp';
const PublicRoutes = () => {
    const { isAuth } = isAuthenticated();
    return (
        
        <Switch>
            <PublicRoute exact path="/signin" component={SignIn}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <Route exact path="*" render={() => {
                return <Redirect  to={isAuth ? '/' : '/signin'}/> 
            }}/>
        </Switch>
    )
}

export default PublicRoutes