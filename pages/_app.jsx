import '../components/styles/common/globals.css';
import '../components/styles/common/buttons.css';
import '../components/styles/common/backgrounds.css';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return <>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
