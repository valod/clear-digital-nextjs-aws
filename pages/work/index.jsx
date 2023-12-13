import Image from 'next/image';
import styles from '../page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import HomepageHero
    from '../../components/HeroBanner';
export default function Work({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <HomepageHero />
        </Layout>
    )
}
