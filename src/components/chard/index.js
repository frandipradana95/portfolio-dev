import { Github, Youtube } from "lucide-react";
import {
	IconProjectLink,
	ProjectCard,
	ProjectDescription,
	ProjectImage,
	ProjectLinks,
	ProjectTitle,
	ShowProjectFull,
} from "../../styles";

const Chard = ({ title, image, description, link }) => {
	return (
		<ProjectCard>
			<ShowProjectFull>
				<ProjectImage src={image} alt={title} />
				<ProjectTitle>{title}</ProjectTitle>
			</ShowProjectFull>
			<ProjectLinks>
				<IconProjectLink href={link.github} target="_blank">
					<Github size={24} />
				</IconProjectLink>
				<IconProjectLink href={link.youtube} target="_blank">
					<Youtube size={24} />
				</IconProjectLink>
			</ProjectLinks>
			<ShowProjectFull>
				<ProjectDescription>{description}</ProjectDescription>
			</ShowProjectFull>
		</ProjectCard>
	);
};

export default Chard;
