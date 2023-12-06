import styles from './layout.module.css';
import Header from './header/header';
import Footer from './footer/footer';
export default function Layout({ children, footerMenu, preview }) {
	const navItems = [
		{
			linkText: '🏠 Home',
			href: '/',
		},
		{
			linkText: '📰 Posts',
			href: '/posts',
		},
		{
			linkText: '📑 Pages',
			href: '/pages',
		},
		{
			linkText: '⚛️ Examples',
			href: '/examples',
		},
	];

	const footerMenuItems = footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));

	return (
		<div className={`${styles.layout} flex flex-col`}>
			<Header navItems={navItems} />
			<main className="mb-auto">{children}</main>
			<Footer footerMenuItems={footerMenuItems}>
				<span className="my-0 mx-auto">
					© {new Date().getFullYear()}{' '}Sift All Right Reserved
				</span>
			</Footer>
		</div>
	);
}
