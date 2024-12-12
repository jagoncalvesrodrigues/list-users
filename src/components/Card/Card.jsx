import { act } from 'react';
import {
	StyledActive,
	StyledButton,
	StyledCardDiv,
	StyledImage,
	StyledName,
	StyledProfileInfo,
	StyledUser
} from './card.styles';

const Card = ({
	title,
	name,
	age,
	username,
	email,
	profileImage,
	job,
	active
}) => {
	return (
		<StyledCardDiv>
			<StyledImage src={profileImage}></StyledImage>
			<StyledProfileInfo>
				<StyledName>{name}</StyledName>
				<StyledUser>{username}</StyledUser>
			</StyledProfileInfo>
			<StyledActive color={active === true ? 'green' : 'red'}>
				{active === true ? 'Activo' : 'Inactivo'}
			</StyledActive>
			<StyledButton>Ver Detalles</StyledButton>
		</StyledCardDiv>
	);
};

export default Card;
