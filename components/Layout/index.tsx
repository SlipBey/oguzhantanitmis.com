import { FC } from "react";
import Navbar from "@components/Navbar";
import { NextSeo } from "next-seo";
import styles from "./index.module.scss";
import Footer from "@components/Footer";

export interface ILayout {
	title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<>
			<NextSeo title={title} />
			<div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
				<div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
					<div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-blue-200 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl" />
					<div className="relative bg-white shadow-lg sm:rounded-3xl">
						<div className={styles.btns}>
							<span />
							<span />
							<span />
						</div>
						<div className="px-20 py-6">
							<Navbar />
							{children}
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
