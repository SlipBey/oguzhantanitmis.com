import { FC } from "react";
import Link from "next/link";

export interface IButton {
	from: string;
	to: string;
	href: string;
}

const Button: FC<IButton> = ({ children, from, to, href }) => {
	return (
		<Link href={href}>
			<div
				className={`cursor-pointer inline-block mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b text-white outline-none focus:outline-none hover:shadow-lg transition duration-200 ease-in-out from-${from}-400 to-${to}-600 hover:from-${from}-500 hover:to-${to}-700`}
			>
				{children}
			</div>
		</Link>
	);
};

export default Button;
