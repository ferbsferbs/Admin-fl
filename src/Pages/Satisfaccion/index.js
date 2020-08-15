import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import InfoNivelesComponent from './InfoNiveles';
import TiempoPermanenciaComponent from './TiempoPermanencia';


const SatisfaccionComponent = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* niveles */}

                    <Route path={`${match.url}/info-niveles`} component={InfoNivelesComponent}/>

                    {/* permanencia */}

                    <Route path={`${match.url}/tiempo-permanencia`} component={TiempoPermanenciaComponent}/>

             
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default SatisfaccionComponent;