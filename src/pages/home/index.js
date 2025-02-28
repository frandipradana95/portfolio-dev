import { Hiro, HiroImage, HomeContainer, Intro, Wraper } from "../../styles";

const Home = () => {
	return (
		<Wraper>
			<HomeContainer>
				<Intro>
					<h1>Hi I`am</h1>
					<h1>
						<span>Frandi Pradana</span>
					</h1>
					<p>I am a content creator & Web Developer</p>
				</Intro>
				<Hiro>
					<HiroImage src="assets/frandy.jpg" />
				</Hiro>
			</HomeContainer>
		</Wraper>
	);
};

export default Home;
