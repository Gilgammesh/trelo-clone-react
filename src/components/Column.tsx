import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

type ColumnProps = {
	text: string;
};

export const Column = ({ text }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			<Card text="Generate app scaffold" />
			<Card text="Learn typescript" />
			<Card text="Begin to use static typing" />
			<AddNewItem toggleButtonText="+ Add another card" onAdd={() => console.log('New item created')} dark />
		</ColumnContainer>
	);
};
