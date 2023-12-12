import '../components/styles/common/globals.css';
import '../components/styles/common/buttons.css';
import '../components/styles/common/backgrounds.css';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return <>
		{/* <Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
			<link href='https://fonts.googleapis.com/css?family=Permanent Marker' rel='stylesheet' />
		</Head> */}
		<Component {...pageProps} />
	</>;
}

export default MyApp;
