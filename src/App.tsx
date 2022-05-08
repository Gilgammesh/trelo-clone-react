import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { AppContainer } from './styles';

export const App = () => {
	return (
		<AppContainer>
			<Column text="Todo:"></Column>
			<AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
		</AppContainer>
	);
};
