import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { CONFIG } from "@libs/index";
import { pageview } from "@libs/ga";
import Script from "next/script";
import Head from "next/head";
import Favicon from "@assets/icon.svg";

import "@styles/tailwind.css";
import "@styles/index.scss";

const App = ({ Component, pageProps }) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () =>
			router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	return (
		<>
			<Head>
				<title>{CONFIG.SEO.title}</title>
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href={Favicon} />
				<link rel="canonical" href={CONFIG.SEO.publishDomain} />
				<meta charSet="utf-8" />
				<meta name="HandheldFriendly" content="true" />
				<meta
					name="copyright"
					content="Berkant GÜNAYDIN, berkant@slipyme.com"
				/>
				<meta name="theme-color" content={CONFIG.SEO.themeColor} />
				<meta
					name="author"
					content="Berkant GÜNAYDIN, berkant@slipyme.com"
				/>
				<meta name="keywords" content={CONFIG.SEO.keywords.join(",")} />
				<meta name="description" content={CONFIG.SEO.description} />
				<meta property="og:title" content={CONFIG.SEO.title} />
				<meta
					property="og:description"
					content={CONFIG.SEO.description}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content={CONFIG.SEO.publishDomain} />
				<meta property="og:site_name" content={CONFIG.SEO.title} />
				<meta property="og:image" content={Favicon} />
				<meta property="og:locale" content="tr_TR" />
				<meta property="og:locale:alternate" content="tr_TR" />
				<meta
					property="twitter:url"
					content={CONFIG.SEO.publishDomain}
				/>
				<meta property="twitter:title" content={CONFIG.SEO.title} />
				<meta
					property="twitter:description"
					content={CONFIG.SEO.description}
				/>
				<meta property="twitter:image" content={Favicon} />

				<meta property="twitter:card" content={Favicon} />
			</Head>
			<Script
				strategy="afterInteractive"
				data-domain={CONFIG.SEO.domain}
				src="https://plausible.io/js/plausible.js"
			/>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag("js", new Date());
							gtag("config", "${CONFIG.GA_TRACKING_ID}", {
								page_path: window.location.pathname,
							});
						`,
				}}
			/>
			<Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
			<DefaultSeo titleTemplate={CONFIG.SEO.layoutTitle} />
			<Component {...pageProps} />
			<ToastContainer theme="dark" position="bottom-right" />
		</>
	);
};

export default App;
