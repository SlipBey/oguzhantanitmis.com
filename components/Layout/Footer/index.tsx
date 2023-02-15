import { Link } from "@components/Utils/Link";
import { FC } from "react";
import { FiHeart } from "react-icons/fi";

const Footer: FC = () => {
	return (
		<div className="mt-24 font-light antialiased md:text-right">
			&copy; {new Date().getFullYear()} All rights reserved.{" "}
			<FiHeart className="inline text-red-500" /> by{" "}
			<Link
				underline
				href="https://slip.slipyme.com"
				className="text-blue-600"
			>
				SlipBey
			</Link>{" "}
			using{" "}
			<Link
				underline
				href="https://nextjs.org/"
				className="text-blue-800"
			>
				NextJS
			</Link>{" "}
			and{" "}
			<Link
				underline
				href="https://tailwindcss.com/"
				className="text-green-400"
			>
				TailwindCSS
			</Link>
			.
		</div>
	);
};

export default Footer;
