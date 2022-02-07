import SocialButton from "@components/SocialButton";
import { CONFIG } from "@libs/config";
import { FC } from "react";

const Hero: FC = () => {
	return (
		<div className="text-left lg:w-2/6 xl:w-2/4 lg:mt-20 lg:ml-16">
			<div className="text-4xl font-semibold text-gray-900 leading-none">{CONFIG.NAME} {CONFIG.SURNAME}</div>
			<div className="mt-6 text-xl font-light text-gray-500 antialiased">
			{CONFIG.DESC} <span className="border-2 border-solid border-b-sky-500 ">{CONFIG.DESC_BORDER}</span>.
			</div>
			<SocialButton />
		</div>
	);
};

export default Hero;
