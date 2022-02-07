import Link from "next/link";
import { FC } from "react";
import Tippy from "@tippyjs/react";
import { CONFIG } from "@libs/config";

const SocialButton: FC = () => {
	return (
		<div className="flex flex-wrap justify-center rounded-md mt-5">
		{CONFIG.CONTACT.map((social, idx) => (
			<Tippy content={social.name} placement="top" key={idx}>
			<div className="text-center mr-3">
				<Link href={social.href}>
					<a target="_blank">
					<span className={`cursor-pointer font-bold rounded-full border-2 shadow-md py-2 px-6 inline-flex items-center hover:border-sky-500`}>
					<social.icon className={`inline-block w-6 h-6 ${social.color}`} />
					</span>
					</a>
				</Link>
			</div>
		</Tippy>
			))}
			</div>
	);
};

export default SocialButton;
