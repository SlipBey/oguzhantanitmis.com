import { CONTACT } from "@libs/social";
import { PROJECTS } from "@libs/projects";
export interface IFramework {
	name: string;
	color: string;
	experience: number;
	icon: string;
}

export const CONFIG = {
	NAME: "Oğuzhan",
	SURNAME: "TANITMIŞ",
	DESC: "Öğrenciyim ve birkaç projeyle uğraşıyorum",
	DESC_BORDER: "girişimciyim",
	CONTACT,
	PROJECTS,
	DEV: process.env.NODE_ENV != "production",
};
