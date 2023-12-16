import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import ColTwoSlider from '../../components/ColTwoImageSlider'
import Introduction from '../../components/introduction';
import Logowithcontent from '../../components/logowithcontent';
import Cta from '../../components/ctaoverlay';
import FooterCta from '../../components/Footercta';

export default function Work({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />

            <BannerSecond content='work' />
            <Introduction />
            <Logowithcontent contentName='data' />
            <Cta contentName={'work'} />
            <ColTwoSlider />
            <FooterCta />
        </Layout>
    )
}
