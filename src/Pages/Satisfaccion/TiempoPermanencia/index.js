import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';



const tabsContent = [
    {
        title: 'Informaciones',
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

export default class TiempoPermanenciaComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Satisfacción: Tiempo y Fechas"
                    subheading=""
                    icon="pe-7s-timer icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}