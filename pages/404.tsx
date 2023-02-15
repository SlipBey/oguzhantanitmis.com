import Layout from "@components/Layout";
import { Link } from "@components/Utils/Link";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
	return (
		<Layout title="404">
			<div className="mt-10 flex items-center">
				<div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
					<div className="max-w-md">
						<div className="text-5xl font-bold">404</div>
						<p className="text-2xl font-light leading-normal md:text-3xl">
							Böyle Bir Sayfa Bulamadım.
						</p>
						<p className="mb-8">
							Aradığınız sayfa taşınmış veya silinmiş olabilir.
						</p>
						<Link
							href="/"
							className="font-lg mb-3 w-full rounded-l-xl rounded-t-xl bg-blue-600 py-4 px-6 text-lg leading-loose text-white transition duration-200 hover:bg-blue-700 lg:mb-0 lg:mr-3 lg:w-auto"
						>
							Ana Sayfa
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
