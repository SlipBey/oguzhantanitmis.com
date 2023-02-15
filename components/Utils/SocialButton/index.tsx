import { FC } from "react";
import Tippy from "@tippyjs/react";
import { CONFIG } from "@libs/index";
import { Link } from "../Link";

const SocialButton: FC = () => {
	return (
		<div className="mt-5 flex flex-wrap rounded-md">
			{CONFIG.CONTACT.map((social, idx) => (
				<Tippy content={social.name} placement="top" key={idx}>
					<div className="mr-3 text-center">
						<Link
							href={social.href}
							className={`inline-flex cursor-pointer items-center rounded-full border-2 py-2 px-6 font-bold shadow-md hover:border-sky-500`}
						>
							<social.icon
								className={`inline-block h-6 w-6 ${social.color}`}
							/>
						</Link>
					</div>
				</Tippy>
			))}
		</div>
	);
};

export default SocialButton;
