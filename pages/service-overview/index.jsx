import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Sticky from '../../components/sticky'
import IntroWithCards from "../../components/introWithCards"
import Cta from '../../components/ctaoverlay';
import Footercta from '../../components/Footercta';
import Accordian from '../../components/accordianServiceOverview'
export default function serviceOverview({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Services"
				description="ClearDigital"
			/>
			<BannerSecond content='serviceOverview' />
			<Sticky />
			<IntroWithCards />
			<Cta />
			<Accordian />
			<Footercta />
		</Layout>
	)
}
