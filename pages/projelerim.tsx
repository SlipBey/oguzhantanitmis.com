import Layout from "@components/Layout";
import Projects from "@components/Projects";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
	return (
		<Layout title="Projelerim">
			<Projects />
		</Layout>
	);
};

export default ProjectsPage;
