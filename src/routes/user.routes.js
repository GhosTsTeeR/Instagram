import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { PrivateRoute } from './helperRoutes';


import { isAuthenticated } from '../instagram/servises/auth/authentication';
import Home from '../instagram/views/usuario/Home';
import Messages from '../instagram/views/usuario/Messages';
import Explore from '../instagram/views/usuario/Explore';
import Saved from '../instagram/views/usuario/Saved';
import Settings from '../instagram/views/usuario/Settings';



const UserRoutes = () => {
    const {path} =useRouteMatch();
    const { isAuth } = isAuthenticated();
    return (
        <Switch>
            <PrivateRoute exact path={`${path}/`} component={Home}/>
            <PrivateRoute exact path={`${path}/messages`} component={Messages}/>
            <PrivateRoute exact path={`${path}/explore`} component={Explore}/>
            <PrivateRoute exact path={`${path}/saved`} component={Saved}/>
            <PrivateRoute exact path={`${path}/settings`} component={Settings}/>
            <Route exact path="*" render={() => {
                return <Redirect  to={isAuth ? '/' : '/signin'}/> 
            }}/>
        </Switch>
    )
}

export default UserRoutes