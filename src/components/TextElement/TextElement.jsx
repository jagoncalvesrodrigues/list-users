import { Styledbox, StyledInput } from './textElement.styles';

const TextElement = ({ textF, text }) => {
	return (
		<Styledbox>
			<StyledInput value={text} onInput={textF}></StyledInput>
		</Styledbox>
	);
};

export default TextElement;
