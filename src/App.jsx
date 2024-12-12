import { useState } from 'react';
import Button from './components/button/Button';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import { GlobalStyles } from './styles/GlobalStyles';
import SelectElement from './components/SelectElement/SelectElement';
import CheckActives from './components/CheckActives/CheckActives';
import TextElement from './components/TextElement/TextElement';
import { USERS } from './constants/users';

const App = () => {
	const [text, setText] = useState('');
	const [active, setActive] = useState(false);
	const [alphaOrder, setAlphaOrder] = useState('1');

	const GlobalFilter = active ? USERS.filter(usuario => usuario.active) : USERS;

	// const OrderUsers = GlobalFilter.sort((a, b) => {
	// 	if (orden === 1) {
	// 		return a.nombre.localeCompare(b.nombre);
	// 	}
	// 	return 0; // Sin orden, por defecto
	// });

	return (
		<Container>
			<GlobalStyles />
			<h1>Listado de Usuarios</h1>
			<Filter>
				<TextElement />
				<CheckActives
					activo={active}
					change={() => FilterActive(setActive, active)}
				/>
				<SelectElement
					changeOrder={() => FilterOrder(event, setAlphaOrder)}
					order={alphaOrder}
				/>
			</Filter>
			{GlobalFilter.map(user => (
				<Card key={user.userId} {...user} />
			))}
		</Container>
	);
};
//Recoger la info del filtro y adjuntarla para hacer el filtro
// const GlobalFilter = USERS.filter;

const FilterActive = (setActive, active) => {
	setActive(!active);
	console.log(active);
};

const FilterOrder = (event, setAlphaOrder) => {
	setAlphaOrder(event.target.value);
	console.log(event);
};
const FilterText = () => {};

export default App;
