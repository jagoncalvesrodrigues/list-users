import { StyledOption, StyledSelectElement } from './selectElement.styles';

const SelectElement = ({ order, changeOrder }) => {
	return (
		<StyledSelectElement onChange={changeOrder} value={order}>
			<StyledOption value='1'>Por Defecto</StyledOption>
			<StyledOption value='2'>Por Nombre</StyledOption>
		</StyledSelectElement>
	);
};

export default SelectElement;
