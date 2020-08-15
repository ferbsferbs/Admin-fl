import React, {Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import Tabs from 'react-responsive-tabs';
import Alumnos from './component/sponsor';
import Sponsors from './component/sponsor';



const tabsContent = [
    {
        title: 'Sponsors',
        content: <Sponsors/>
    }
];



function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class SponsorComponent extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Sponsor: Gerenciar los sponsors"
                    subheading=""
                    icon="pe-7s-id icon-gradient bg-mean-fruit"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
               
            </Fragment>
        );
    }
}