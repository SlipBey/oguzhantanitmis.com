/* eslint-disable @typescript-eslint/no-var-requires */

const withImages = require("next-images");

/**
 * @type {import("next").NextConfig}
 */

module.exports = () => {
	const plugins = [withImages];
	return plugins.reduce((acc, next) => next(acc), {
		reactStrictMode: true,
		poweredByHeader: false,
		trailingSlash: false,
		swcMinify: true,
		i18n: {
			locales: ["tr"],
			defaultLocale: "tr",
		},
		async redirects() {
			return [
				{
					source: "/github",
					destination: "https://github.com/oguzhantanitmis",
					permanent: true,
				},
				{
					source: "/instagram",
					destination: "https://www.instagram.com/oguzhantanitmis/",
					permanent: true,
				},
				{
					source: "/discord",
					destination: "https://lydoria.net/discord",
					permanent: true,
				},
			];
		},
		images: {
			domains: [],
		},
	});
};
