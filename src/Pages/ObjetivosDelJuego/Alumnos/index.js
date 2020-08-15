import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';
import Alumnos from './component/Alumno';



const tabsContent = [
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
                    heading="Objetivos: Estadísticas de los alumnos"
                    subheading="Los stats de todas las cuentas de alumnos"
                    icon="lnr-graduation-hat icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}