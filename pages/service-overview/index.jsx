import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/bannerSecond';
import Sticky from '../../components/sticky2'
// import CardGrid from "../../components/CardGrid"
import Cta from '../../components/ctaoverlay';
import FooterCta from '../../components/Footercta';
import Accordian from '../../components/accordianServiceOverview'
import LogoSlider from '../../components/LogoSlider'
import ColTwoSlider from '../../components/colTwoSlider'
import Grid from '../../components/Grids'

export default function serviceOverview({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Services"
				description="ClearDigital"
			/>
			<BannerSecond content='serviceOverview' />
			<Sticky />
			<Grid />
			<Cta />
			<ColTwoSlider/>
			<LogoSlider/>
			<Accordian />
			<FooterCta/>

		</Layout>
	)
}
