import { Route, Redirect} from 'react-router-dom';
import { isAuthenticated } from '../instagram/servises/auth/authentication';

export const PrivateRoute = ({component, ...options})=> {
    const isAuth = isAuthenticated();
    if (isAuth) return <Route {...options} component={component} />
    return <Redirect to="/signin"/>
    
}

export const PublicRoute = ({component, ...options})=> {
    const isAuth = isAuthenticated();
    if (!isAuth) return <Route {...options} component={component} />
    return <Redirect to="/"/>
    
}