import Link from "next/link";
import { FC } from "react";

const links = [
	{ name: "Anasayfa", path: "/" },
	{ name: "Blog", path: "/blog" },
	{ name: "Projelerim", path: "/projelerim" },
];

const Navbar: FC = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center justify-center">
				<div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
					{links.map((link, i) => (
						<Link key={i} href={link.path}>
							<span className="flex items-center cursor-pointer justify-center mr-10 text-base text-gray-600 text-opacity-90 font-medium tracking-tight hover:text-gray-700 transition duration-150 ease-in-out">{link.name}</span>
						</Link>
					))}
				</div>
			</div>

			<div className="hidden md:flex items-center justify-center">
				<Link href="https://github.com/SlipBey/oguzhantanitmis.com">
					<a target="_blank">
					<span className="mr-5 text-lg font-medium cursor-pointer text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out">Kaynak Kodları</span>
					</a>
				</Link>
				<Link href="/iletisim">
					<span className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none cursor-pointer focus:outline-none hover:shadow-md hover:from-gray-900 transition duration-200 ease-in-out">İletişim</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
