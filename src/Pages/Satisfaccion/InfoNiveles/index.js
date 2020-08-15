import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';



const tabsContent = [
    {
        title: 'Niveles',
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

export default class InfoNivelesComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Satisfacción: Información acerca de los niveles"
                    subheading=""
                    icon="pe-7s-info icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}