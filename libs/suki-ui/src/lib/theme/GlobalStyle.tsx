import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	${reset}

	body {
		font-size: 16px;

		* {
			font-family: 'Open Sans', sans-serif;
      scrollbar-color: ${({ theme }) => theme.components.scrollbar.thumbColor} ${({ theme }) =>
  theme.components.scrollbar.scrollTrack};
		}
	}

	strong {
		font-weight: bold;
	}

	em {
      font-style: italic;
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.components.scrollbar.thumbColor};
		border: 4px solid transparent;
		border-radius: 8px;
		background-clip: padding-box;
	}

	*::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => theme.components.scrollbar.thumbHoveredColor};
	}

	*::-webkit-scrollbar {
		border-radius: 8px;
	}
`;

export { GlobalStyle };
