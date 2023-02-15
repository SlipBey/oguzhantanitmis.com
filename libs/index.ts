import { CONTACT } from "./social";

const domain = "oguzhantanitmis.com";

const SEO = {
	layoutTitle: "%s - Oğuzhan Tnaıtmış",
	title: "Anasayfa - Oğuzhan Tanıtmış",
	domain,
	publishDomain: `https://${domain}`,
	themeColor: "#03ADFC",
	keywords: [
		"slipyme",
		"ender",
		"enderbot",
		"enderrise",
		"discord",
		"bot",
		"discord-bot",
		"blog",
		"react",
		"next",
		"reactjs",
		"nextjs",
		"slipbey",
		"slipy",
		"personalpage",
		"personal",
		"webpage",
		"websource",
		"tailwindcss",
		"sass",
		"scss",
		"portfolyo",
		"portfolio",
	],
	description: "Oğuzhan Tanıtmış Portfolyo!",
};

export const CONFIG = {
	EMAIL: `mail@${SEO.domain}`,
	GA_TRACKING_ID: "G-14SS6XWKC1",
	DEV: process.env.NODE_ENV != "production",
	REVALIDATION: 60 * 5,
	SEO,
	CONTACT,
};
