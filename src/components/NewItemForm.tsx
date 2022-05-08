import { useState } from 'react';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles';
import { useFocus } from '../hooks/useFocus';

type NewItemProps = {
	onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemProps) => {
	const [text, setText] = useState<string>('');
	const inputRef = useFocus();

	const handleAddText = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === 'Enter') {
			onAdd(text);
		}
	};

	return (
		<NewItemFormContainer>
			<NewItemInput
				ref={inputRef}
				value={text}
				onChange={evt => setText(evt.target.value)}
				onKeyPress={handleAddText}
			/>
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
		</NewItemFormContainer>
	);
};
