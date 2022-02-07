import { FC } from "react";
import SocialButton from "@components/SocialButton";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Contact: FC = () => {
	return (
		<div className="relative text-center justify-center bg-gray-100 sm:rounded-lg">
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="mt-8 overflow-hidden">
					<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="p-6 mr-2">
			<h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">Benimle İletişime Geç</h1>
			<div className="flex items-center mt-4 text-gray-600">
				<FiMail />
				<div className="ml-4 tracking-wide font-semibold w-40">
					<Link href="mailto:contact@oguzhantanitmis.com">
					contact@oguzhantanitmis.com
					</Link>
				</div>
			</div>
			<SocialButton />
		</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
