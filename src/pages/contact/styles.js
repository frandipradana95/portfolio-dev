import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export const Container = styled.div`
	background-color: white;
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	width: 100%;
	& h2 {
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 1rem;
	}
`;
