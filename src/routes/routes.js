import React from 'react';
import { Switch } from 'react-router-dom'

import { isAuthenticated } from '../instagram/servises/auth/authentication';

import UserRoutes from './user.routes';
import PublicRoutes from './public.routes';




const Routes = () => {
    const { isAuth } = isAuthenticated();
    console.log(isAuth);
    return (
        <Switch>
            <PublicRoutes/>
            <UserRoutes/>
            
        </Switch>

    )
}
export default Routes;