import { Link } from "@components/Utils/Link";
import { FC } from "react";

const links = [
	{ name: "Anasayfa", path: "/" },
	{ name: "Blog", path: "/blog" },
	{ name: "Projelerim", path: "/projelerim" },
];

const Navbar: FC = () => {
	return (
		<div className="md:flex md:items-center md:justify-between">
			<div className="flex items-center justify-center">
				<div className="flex flex-col items-center justify-center pt-1 antialiased md:flex-row lg:ml-20">
					{links.map((link, i) => (
						<Link
							underline
							key={i}
							href={link.path}
							className="font-lgt mr-10 flex cursor-pointer items-center justify-center text-lg text-gray-600"
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>

			<div className="my-5 flex flex-col md:my-0 md:flex-row md:items-center md:justify-center">
				<Link
					href="https://github.com/SlipBey/oguzhantanitmis.com"
					className="font-lg bg-transtion mr-5 mb-3 rounded-lg p-3 text-lg text-gray-700 duration-200 hover:bg-gray-300/30 md:mb-0"
				>
					Kaynak Kodları
				</Link>
				<Link
					href="/iletisim"
					className="font-lg rounded-lg bg-blue-600 px-6 py-3 text-lg text-white duration-200 hover:bg-blue-700"
				>
					İletişim
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
