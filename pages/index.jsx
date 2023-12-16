import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import HomepageHero from '../components/HeroBanner';
// import ImageSlider from '@/components/ImageSlider';
// import ContentGrid from '@/components/ContentGrid';
// import TabsContent from '@/components/TabsContent';
// import ColTwoSlider from '@/components/ColTwoSlider';
// import LogoSlider from '@/components/LogoSlider';
// import ColTwoImageSlider from '@/components/ColTwoImageSlider';

export default function Home({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="ClearDigital"
				description="ClearDigital "
			/>
			<HomepageHero />
			{/* <ImageSlider />
			<ContentGrid />
			<TabsContent />
			<ColTwoSlider />
			<LogoSlider />
			<ColTwoImageSlider /> */}

		</Layout>
	)
}
