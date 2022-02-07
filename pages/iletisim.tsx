import Contact from "@components/Contact";
import Layout from "@components/Layout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
	return (
		<Layout title="İletişim">
			<Contact />
		</Layout>
	);
};

export default ContactPage;
