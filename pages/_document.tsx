import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="HandheldFriendly" content="true" />
					<meta name="robots" content="INDEX, FOLLOW" />
					<meta name="copyright" content="Oğuzhan Tanıtmış" />
					<meta name="theme-color" content="#ffa33b" />
					<meta
						name="author"
						content="Slipbey, slip.slipyme.xyz"
					/>
					<meta
						name="description"
						content="Oğuzhan Tanıtmış'ın Portfolyosu"
					/>
					<meta name="og:title" content="Oğuzhan Tanıtmış" />
					<meta
						name="og:site_name"
						content="Oğuzhan Tanıtmış"
						title="title"
					/>
					<meta name="og:url" content="https://oguzhantanitmis.com" />
				</Head>
				<body>
					<Main />
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
