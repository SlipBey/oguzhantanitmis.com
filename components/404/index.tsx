import Link from "next/link";
import { FC } from "react";
import { m } from "framer-motion";

const NotFound: FC = () => {
	return (
		<div className="mt-10 flex items-center">
			<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
				<div className="max-w-md">
					<div className="text-5xl font-bold">404</div>
					<p className="text-2xl md:text-3xl font-light leading-normal">Böyle Bir Sayfa Bulamadım.</p>
					<p className="mb-8">
						Aradığınız sayfa taşınmış veya silinmiş olabilir.
					</p>
					<Link href="/">
					<m.span
							whileHover={{
								scale: 1.05,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
						>
							Ana Sayfa
						</m.span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
