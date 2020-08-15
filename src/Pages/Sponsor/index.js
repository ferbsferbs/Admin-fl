import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import SponsorComponent from './SponsorC';


const Sponsors = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* sponsor */}

                    <Route path={`${match.url}/`} component={SponsorComponent}/>

       

                    
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Sponsors;