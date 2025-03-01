import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";
export * from "./NavbarStyle";
export * from "./HomeStyle";
export * from "./ContactStyle";
export * from "./ProjectStyle";
export * from "./PopupStyle";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
     
    }

	
    
`;

export const Wraper = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 0;
	height: 100%;
	background-color: white;
	scrollbar-width: thin;
	scrollbar-color: ${Colors.primary} #f9f9f9;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #f9f9f9;
	}

	&::-webkit-scrollbar-thumb {
		background: ${Colors.primary};
		border-radius: 4px;
	}
`;
