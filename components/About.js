import {Mail } from "react-feather"
import { GitHub } from "react-feather";
import { Linkedin } from "react-feather";
import { Download } from "react-feather";
import avatar from "../public/avatar.jpg"
import Image from "next/image";
import Link from "next/link";


function About() {
	let workStatus = false;
	return (
		<div className="flex flex-row">
			<div className="flex h-screen">
				<div className="m-auto">
					<div><Image src={avatar} className="w-64 h-64 rounded-lg"></Image></div>
					<div className="text-3xl mb-4 font-bold">Sadman Bhuiyan</div>

					{workStatus && <div>Company name</div>}
					<div flex flex-row-reverse>

						<Link href="mailto:bhuiyansad@gmail.com"><Mail className="mr-4" strokeWidth="1" color="#eb5e28" size="32" /></Link>
						<Link href="https://www.linkedin.com/in/sadmanbz/"><Linkedin className="mr-4" strokeWidth="1" color="#eb5e28" size="32" /></Link>
						<Link href="https://github.com/sadman-bhuiyan"><GitHub className="mr-4" strokeWidth="1" color="#eb5e28" size="32" /></Link>

					</div>
				</div>
			</div>
			<div className="text-justify text-xl w-[900px] m-auto">
				<div className="text-center text-4xl font-bold mb-8 text-hyper-orange">About me</div>
				<div>
					I am a Master's student at the Free University of Bozen/Bolzano, in Software Engineering for Information Systems. Passionate about software
					engineering and with more than two years of experience specialising in python development and full-stack web development.</div>
				<div> 
					I am mainly looking for Backend and Software Engineering roles
				</div>
				<Link href="/cv.pdf"><button className="mt-4 btn btn-md"><Download className="mr-2"></Download> Download CV</button></Link>
			</div>
		</div>
	)
}

export default About;
