import { StyledOption, StyledSelectElement } from './selectElement.styles';

const SelectElement = ({ order, changeOrder }) => {
	return (
		<StyledSelectElement onChange={changeOrder} value={order}>
			<StyledOption value='default'>Por Defecto</StyledOption>
			<StyledOption value='name'>Por Nombre</StyledOption>
		</StyledSelectElement>
	);
};

export default SelectElement;
