import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Sticky from '../../components/sticky'
// import CardGrid from "../../components/cardGrid"
// import Cta from '../../components/ctaoverlay';
// import Accordian from '../../components/accordianServiceOverview'

export default function serviceOverview({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Services"
				description="ClearDigital"
			/>
			<BannerSecond content='serviceOverview' />
			<Sticky />
			{/* <CardGrid />
			<Cta />
			<Accordian /> */}

		</Layout>
	)
}
