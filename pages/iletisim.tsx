import Layout from "@components/Layout";
import { Link } from "@components/Utils/Link";
import SocialButton from "@components/Utils/SocialButton";
import { NextPage } from "next";
import { FiMail } from "react-icons/fi";

const ContactPage: NextPage = () => {
	return (
		<Layout title="İletişim">
			<div className="relative justify-center bg-gray-100 text-center sm:rounded-lg">
				<div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
					<div className="mt-8 overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="mr-2 p-6">
								<h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
									Benimle İletişime Geç
								</h1>
								<div className="mt-4 flex items-center text-gray-600">
									<FiMail />
									<div className="ml-4 w-40 font-semibold tracking-wide">
										<Link href="mailto:contact@oguzhantanitmis.com">
											mail@oguzhantanitmis.com
										</Link>
									</div>
								</div>
								<SocialButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
