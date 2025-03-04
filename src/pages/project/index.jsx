import React from "react";
import { Container, ProjectCard, ProjectGrid, Section } from "./styles";

// Data project (bisa diubah sesuai proyek kamu)
const projects = [
	{
		id: 1,
		title: "Website E-Commerce",
		description: "Platform e-commerce modern dengan React & Firebase.",
		image: "https://source.unsplash.com/400x300/?technology,website",
	},
	{
		id: 2,
		title: "Dashboard Admin",
		description: "Dashboard interaktif untuk manajemen data.",
		image: "https://source.unsplash.com/400x300/?dashboard,app",
	},
	{
		id: 3,
		title: "Chatbot AI",
		description: "Chatbot berbasis AI menggunakan OpenAI API.",
		image: "https://source.unsplash.com/400x300/?chatbot,ai",
	},
];

const Project = () => {
	return (
		<Section id="project">
			<Container>
				<h2>Proyek Saya</h2>
				<ProjectGrid>
					{projects.map((project) => (
						<ProjectCard key={project.id}>
							<img src={project.image} alt={project.title} />
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</ProjectCard>
					))}
				</ProjectGrid>
			</Container>
		</Section>
	);
};

export default Project;
