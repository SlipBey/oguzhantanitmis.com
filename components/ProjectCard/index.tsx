import { FC } from "react";
import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";

export interface IProjectCard {
	href: string;
	name: string;
	avatar: string;
	desc: string;
}

const ProjectCard: FC<IProjectCard> = ({ href, name, avatar, desc }) => {
	return (
		<Link href={href}>
			<div className="group p-2">
				<div className="cursor-pointer rounded-lg bg-gradient-to-bl from-green-100 to-blue-400 px-6 py-8 text-center shadow-lg">
					<div className="mb-3">
						<div className="hidden text-center group-hover:block">
							<h1 className="text-2xl font-semibold">{name}</h1>
							<p className="text-md font-md">{desc}</p>
						</div>
						<CustomImage
							src={avatar}
							alt={name}
							className="w-18 mx-auto rounded-full group-hover:hidden"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
