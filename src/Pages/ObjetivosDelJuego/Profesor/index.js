import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';



const tabsContent = [
    {
        title: 'Docente Free',
        content: <div/>
    },
    {
        title: 'Docente Premium',
        content: <div/>
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
                    heading="Objetivos: Estadísticas de los docentes"
                    subheading="Los stats de los planes de docentes que ofrecemos"
                    icon="pe-7s-users icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}