import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import ProfessorComponent from './Profesor';
import AlumnosComponent from './Alumnos';
import EscuelasComponent from './Escuelas';
import LocalidadComponent from './ubicacion/Localidad';
import PaisComponent from './ubicacion/Pais';
import ProvinciaComponent from './ubicacion/Provincia'

const Demografico = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* docentes */}

                    <Route path={`${match.url}/profesor`} component={ProfessorComponent}/>

                    {/* Alumnos */}

                    <Route path={`${match.url}/alumno`} component={AlumnosComponent}/>

                    {/* Escuelas */}

                    <Route path={`${match.url}/escuela`} component={EscuelasComponent}/>

                    {/* Pais */}

                    <Route path={`${match.url}/pais`} component={PaisComponent}/>

                    {/* Provincia */}

                    <Route path={`${match.url}/provincia`} component={ProvinciaComponent}/>

                    {/* Localidad */}

                    <Route path={`${match.url}/localidad`} component={LocalidadComponent}/>


                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Demografico;