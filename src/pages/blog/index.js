import { useEffect, useState } from "react";
import {
	BlogContainer,
	BlogItem,
	BlogLink,
	BlogList,
	BlogTitle,
	Wraper,
} from "../../styles";

const Blog = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch("/articles.json")
			.then((res) => res.json())
			.then((data) => setArticles(data))
			.catch((e) => console.log(e));
	});
	return (
		<Wraper>
			<BlogContainer>
				<BlogTitle>Welcome To My Blog</BlogTitle>
				<BlogList>
					{articles.map((article) => (
						<BlogItem key={article.id}>
							<BlogLink to={`/blog/${article.id}`}>{article.title}</BlogLink>
						</BlogItem>
					))}
				</BlogList>
			</BlogContainer>
		</Wraper>
	);
};

export default Blog;
