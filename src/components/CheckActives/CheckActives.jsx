import {
	StyledCheck,
	StyledCheckActives,
	StyledLabel
} from './checkActives.styles';

const CheckActives = ({ change, activo }) => {
	return (
		<StyledCheckActives>
			<StyledLabel>Solo Activos</StyledLabel>
			<StyledCheck
				type='checkbox'
				checked={activo}
				onChange={change}
			></StyledCheck>
		</StyledCheckActives>
	);
};

export default CheckActives;
