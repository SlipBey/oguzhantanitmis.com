import Layout from "@components/Layout";
import Hero from "@components/Hero";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
	return (
		<Layout title="Anasayfa">
			<Hero />
		</Layout>
	);
};

export default IndexPage;
