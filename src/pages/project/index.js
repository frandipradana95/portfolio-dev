import React from "react";
import { ProjectContainer, ProjectGrid, Wraper } from "../../styles";
import Chard from "../../components/chard";

// dumy
const projects = [
	{
		key: 0,
		title: "Project 1",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 1.",
		github: "https://github.com/user/project1",
		youtube: "https://youtube.com/project1",
	},
	{
		key: 2,
		title: "Project 2",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 2.",
		github: "https://github.com/user/project2",
		youtube: "https://youtube.com/project2",
	},
	{
		key: 3,
		title: "Project 3",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 3.",
		github: "https://github.com/user/project3",
		youtube: "https://youtube.com/project3",
	},
	{
		key: 4,
		title: "Project 4",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 4.",
		github: "https://github.com/user/project4",
		youtube: "https://youtube.com/project4",
	},
	{
		key: 5,
		title: "Project 5",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 5.",
		github: "https://github.com/user/project5",
		youtube: "https://youtube.com/project5",
	},
	{
		key: 6,
		title: "Project 6",
		image: "https://placehold.co/300",
		description: "Deskripsi singkat tentang project 6.",
		github: "https://github.com/user/project6",
		youtube: "https://youtube.com/project6",
	},
];

// lop data project

const Project = () => {
	return (
		<Wraper>
			<ProjectContainer>
				<h1>MY PROJECT</h1>
				<ProjectGrid>
					{projects.map((project, id) => (
						<Chard
							key={id}
							title={project.title}
							image={project.image}
							description={project.description}
							link={{
								github: project.github,
								youtube: project.youtube,
							}}
						/>
					))}
				</ProjectGrid>
			</ProjectContainer>
		</Wraper>
	);
};

export default Project;
