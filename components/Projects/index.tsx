import { FC } from "react";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "@libs/projects";

const Projects: FC = () => {
	return (
		<div className="w-4/5 mx-auto mt-10">
			<div className="flex flex-wrap justify-center">
				{PROJECTS.map((project, i) => (
					<ProjectCard key={i} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
