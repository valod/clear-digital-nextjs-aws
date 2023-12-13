import Image from 'next/image';
import styles from '../page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import HomepageHero
    from '../../components/HeroBanner';
import Footercta from '../../components/Footercta';   
import Coltwoslider from '../../components/Coltwoslider'; 
import Slider from '../../components/logowithslider';
import Halfslider from '../../components/halfslider';
import Logowithcontent from '../../components/logowithcontent';
export default function Work({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <HomepageHero />
            <Logowithcontent/>
            <Coltwoslider/>
            <Slider/>
            <Halfslider/>
            <Footercta/>
        </Layout>
    )
}
