import './globals.css';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return <>
		<Head>
			<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
			<link href='https://fonts.googleapis.com/css?family=Permanent Marker' rel='stylesheet' />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
