import Link from "next/link";
import { FC } from "react";
import { FiHeart } from "react-icons/fi";

const Footer: FC = () => {
	return (
		<div className="mt-24 text-right font-light antialiased">
			&copy; 2022 All rights reserved. <FiHeart className="text-red-500 inline" />  by{" "}
			<Link href="https://slip.slipyme.xyz">
						<a target="_blank">
						<span className="text-blue-600">Slipyme</span>
						</a>
					</Link>{" "}
					using{" "}
					<Link href="https://nextjs.org/">
					<a target="_blank">
						<span className="text-blue-800">NextJS</span>
						</a>
					</Link>{" "}
					and{" "}
					<Link href="https://tailwindcss.com/">
					<a target="_blank">
						<span className="text-green-400">TailwindCSS</span>
						</a>
					</Link>.
		</div>
	);
};

export default Footer;
