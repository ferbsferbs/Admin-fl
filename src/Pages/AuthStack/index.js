import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import Login from './Login';


const Auth = ({match}) => (
    <Fragment>
        
        <div className="app-main">
          
                

                    {/* login */}

                    <Route path={`${match.url}/login`} component={Login}/>

                    {/* register */}

                    <Route path={`${match.url}/register`} component={null}/>

                    {/* pass */}

                    <Route path={`${match.url}/reset-password`} component={null}/>



               
        </div>
    </Fragment>
);

export default Auth;