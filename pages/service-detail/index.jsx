import Image from 'next/image';
import styles from '../page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond
    from '../../components/bannerSecond';
export default function serviceDetail({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <BannerSecond content='serviceDetail' />
        </Layout>
    )
}
