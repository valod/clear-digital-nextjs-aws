import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Sticky from '../../components/sticky'
import ContentGrid from '../../components/ContentGridserviceDetail';
import ScrollableContent from '../../components/scrollableContent'
import Logowithcontent from '../../components/logowithcontent';
import FooterCta from '../../components/Footercta';
import IntroWithCards from "../../components/introWithCards"
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
            <ScrollableContent />
            <Logowithcontent contentName="threecards"/>
            <IntroWithCards content={'serviceDetail'} />
            <FooterCta />
        </Layout>
    )
}
