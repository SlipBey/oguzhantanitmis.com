/* eslint-disable */
module.exports = {
	cssModules: true,
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
};
