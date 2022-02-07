import { FC } from "react";
import Link from "next/link";
import Tilt from "react-tilt";
import Tippy from "@tippyjs/react";

export interface IProjectCard {
	href: string;
	name: string;
	avatar: string;
}

const ProjectCard: FC<IProjectCard> = ({ href, name, avatar }) => {
	return (
		<Link href={href}>
			<div className="md:w-1/4 p-2">
				<Tilt
					className="Tilt"
					options={{
						max: 40,
						reverse: false,
						scale: 1.05,
					}}
				>
					<Tippy content={name}>
						<div className="bg-gradient-to-bl from-green-100 to-blue-400 px-6 py-8 rounded-lg shadow-lg text-center cursor-pointer">
							<div className="mb-3">
								<img src={avatar} alt={name} className="w-auto mx-auto rounded-full" />
							</div>
						</div>
					</Tippy>
				</Tilt>
			</div>
		</Link>
	);
};

export default ProjectCard;
