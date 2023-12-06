import Image from 'next/image';
import styles from './page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

export default function Home({menuItems}) {
  return (
    <Layout footerMenu={menuItems}>
			<NextSeo
				title="ClearDigital"
				description="ClearDigital"
			/>
				<h1>Components asd asd as </h1>

		</Layout>
  )
}
