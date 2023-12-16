import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Footercta from '../../components/Footercta';
import Slider from '../../components/logowithslider';
import Logowithcontent from '../../components/logowithcontent';
import Cta from '../../components/ctaoverlay';
export default function Work({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <BannerSecond content='work' />
            <Logowithcontent />
            <Cta contentName={'work'}/>
            <Slider />
            <Footercta overlay={'semi'} />
        </Layout>
    )
}
