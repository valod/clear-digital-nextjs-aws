import Image from 'next/image';
import styles from './page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import ColTwoSlider from '../components/colTwoSlider';
import HomepageHero
	from '../components/HeroBanner';
import Footercta from '../components/Footercta';
import IntroWithColThree from '../components/introWithColThree'
import Accordian from '../components/accordian'

export default function Home({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="ClearDigital"
				description="ClearDigital "
			/>
			<HomepageHero />
			<ColTwoSlider />
			<IntroWithColThree />
			<Accordian/>
			<Footercta />
		</Layout>
	)
}
