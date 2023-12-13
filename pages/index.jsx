// import Image from 'next/image';
// import styles from './page.module.css';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
// import ColTwoSlider from '../components/colTwoSlider';
import HomepageHero from '../components/HeroBanner';
import Footercta from '../components/FooterCta';
import IntroWithColThree from '../components/introWithColThree';
import Accordian from '../components/accordian';
import Tabwithslider from '../components/tabwithslider';
import Logowithslider from '../components/logowithslider';
import Halfslider from '../components/halfslider';
import ContentGrid from '@/components/ContentGrid';
import ColTwoSlider from '@/components/colTwoSlider';
import SpaceFiller from '@/components/SpaceFiller';
import FooterCta from '../components/FooterCta';

export default function Home({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="ClearDigital"
				description="ClearDigital "
			/>
			<HomepageHero />
			<SpaceFiller className={"bg-black"} />
			<ContentGrid />
			<SpaceFiller className={"bg-[#e5e4e7]"} />
			<ColTwoSlider />
			<Logowithslider />
			<SpaceFiller className={"bg-[#e5e4e7]"} />
			<FooterCta />
			{/* <ColTwoSlider /> */}
			{/* <IntroWithColThree /> */}
			<Accordian />
			{/* <Tabwithslider /> */}
			{/* <Halfslider /> */}
			{/* <Footercta /> */}
		</Layout>
	)
}
