import type { FC, ReactNode } from "react";
import Navbar from "@components/Layout/Navbar";
import { NextSeo } from "next-seo";
import Footer from "@components/Layout/Footer";

export interface ILayout {
	children: ReactNode;
	title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<>
			<NextSeo title={title} />
			<div className="flex min-h-screen min-w-full flex-col justify-center bg-gray-100 p-10">
				<div className="relative mx-auto w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl">
					<div className="absolute inset-0 -mr-3.5 -skew-y-6 transform bg-gradient-to-r from-blue-200 to-green-500 shadow-lg sm:rotate-3 sm:skew-y-0 sm:rounded-3xl" />
					<div className="relative bg-white shadow-lg sm:rounded-3xl">
						<div className="flex items-center justify-start pt-6 pl-6">
							<span className="mr-2 h-3 w-3 rounded-full bg-red-400" />
							<span className="mr-2 h-3 w-3 rounded-full bg-yellow-400" />
							<span className="mr-2 h-3 w-3 rounded-full bg-green-400" />
						</div>
						<div className="px-10 py-3 md:px-20 md:py-6">
							<Navbar />
							<div className="mt-5 lg:mt-20 lg:ml-16">
								{children}
							</div>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
