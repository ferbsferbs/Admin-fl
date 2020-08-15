import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';
import Familia from './component/Familia';
import Alumnos from './component/Alumno';



const tabsContent = [
    
    {
        title: 'Familia',
        content: <Familia/>
    },
    {
        title: 'Alumnos',
        content: <Alumnos/>
    }
];



function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class AlumnosComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Demográfico: Estadísticas de los usuarios"
                    subheading="Estadísticas basadas en la relacion de: Ubicación X Usuarios"
                    icon="lnr-user icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}