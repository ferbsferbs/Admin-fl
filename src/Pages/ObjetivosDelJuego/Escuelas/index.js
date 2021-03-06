import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';
import Escuelas from './component/escuela';



const tabsContent = [
    {
        title: 'Escuelas',
        content: <Escuelas></Escuelas>
    }
];



function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
       
    }));
}

export default class EscuelasComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Objetivos: Estadísticas de las Escuelas"
                    subheading="Los stats de todas las escuelas"
                    icon="lnr-book icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}