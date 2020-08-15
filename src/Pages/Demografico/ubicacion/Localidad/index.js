import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import Localidad from './component/localidad';
import PageTitle from '../../../../Layout/AppMain/PageTitle';




const tabsContent = [
    {
        title: 'Localidad',
        content: <Localidad></Localidad>
    }
];



function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class LocalidadComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Demográfico: Estadísticas por localidad"
                    subheading="Estadísticas basadas en la relacion de: Ubicación X Instituciones"
                    icon="lnr-map icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}