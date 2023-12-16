import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Sticky from '../../components/sticky'
import ContentGrid from '../../components/ContentGridserviceDetail';
import ColTwoSlider from '../../components/ColTwoImageSlider'
// import ScrollableContent from '../../components/scrollableContent'
import Logowithcontent from '../../components/logowithcontent';
// import FooterCta from '../../components/Footercta';
// import CardGrid from "../../components/cardGrid"
export default function serviceDetail({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <BannerSecond content='serviceDetail' />
            <Sticky />
            <ContentGrid />
            <Logowithcontent contentName="threecards"/>
            <ColTwoSlider/>
            {/* <ScrollableContent /> */}
            {/* <CardGrid content={'serviceDetail'} /> */}
            {/* <FooterCta /> */}
        </Layout>
    )
}
