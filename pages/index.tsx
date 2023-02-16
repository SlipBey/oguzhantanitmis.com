import Layout from "@components/Layout";
import { NextPage } from "next";
import SocialButton from "@components/Utils/SocialButton";

const IndexPage: NextPage = () => {
	return (
		<Layout title="Anasayfa">
			<div className="flex flex-col justify-center text-center md:justify-start md:text-left lg:w-2/6 xl:w-2/4">
				<div className="text-4xl font-semibold leading-none text-gray-900">
					Oğuzhan TANITMIŞ
				</div>
				<div className="mt-6 text-xl font-light text-gray-500 antialiased">
					Hosting Provider & Game Developer
				</div>
				<SocialButton />
			</div>
		</Layout>
	);
};

export default IndexPage;
