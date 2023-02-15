import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "@libs/projects";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
	return (
		<Layout title="Projelerim">
			<div className="mx-auto mt-10 w-4/5">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map((project, i) => (
						<ProjectCard key={i} {...project} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default ProjectsPage;
