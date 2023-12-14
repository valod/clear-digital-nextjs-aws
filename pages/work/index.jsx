import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Footercta from '../../components/Footercta';
// import Coltwoslider from '../../components/Coltwoslider'; 
import Slider from '../../components/logowithslider';
// import Halfslider from '../../components/halfslider';
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
            <Cta />
            {/* <Coltwoslider/> */}
            <Slider />
            {/* <Halfslider/> */}
            <Footercta overlay={'semi'}/>
        </Layout>
    )
}
