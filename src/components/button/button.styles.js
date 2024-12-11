import styled from 'styled-components';

const StyledButton = styled.button`
	//interpretar el color que le estamos pasando
	//aqui con un objeto
	/* background-color: ${promp => prompt.color}; */
	background-color: ${({ color }) => color};
	color: white;
	border: none;
	padding: 0.5rem;

	@media screen and (width>768px) {
		display: block;
	}

	@media (hover: hover) {
		//el & hace referencia al componente en el que te encuentras
		&:hover {
			scale: 0.8;
		}
	}
`;

export { StyledButton };
