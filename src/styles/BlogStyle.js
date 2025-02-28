const { default: styled } = require("styled-components");

export const BlogContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	align-items: center;
	height: 100%;

	@media (max-width: 768px) {
		align-items: normal;
		padding-top: 10rem;
		flex-direction: column;
	}
`;
