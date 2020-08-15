import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';
import DocenteFree from './component/docenteFree';
import DocentePremium from './component/docentePremium';



const tabsContent = [
    {
        title: 'Docente Free',
        content: <DocenteFree></DocenteFree>
    },
    {
        title: 'Docente Premium',
        content: <DocentePremium></DocentePremium>
    }
];



function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class ProfessorComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Demográfico: Estadísticas de los docentes"
                    subheading="Estadísticas basadas en la relacion de: Ubicación X Tipo de Profesor"
                    icon="pe-7s-users icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}