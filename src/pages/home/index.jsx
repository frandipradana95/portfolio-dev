import React from "react";
import me from "../../assets/me.jpg";
import {
	Container,
	Content,
	BtnContact,
	ProfiePicture,
	Section,
} from "./styles";

const Home = () => {
	return (
		<Section id="#">
			<Container>
				<Content>
					<h1>Hi, Saya Frandi Pradana👋</h1>
					<p>
						Saya seorang Web Developer yang fokus pada pengembangan aplikasi web
						menggunakan teknologi modern seperti React.js. Saya senang membangun
						website interaktif dan performa tinggi!
					</p>
					<BtnContact href="#contact">Hubungi Saya</BtnContact>
				</Content>

				<ProfiePicture>
					<img src={me} alt="Profile" />
				</ProfiePicture>
			</Container>
		</Section>
	);
};

export default Home;
