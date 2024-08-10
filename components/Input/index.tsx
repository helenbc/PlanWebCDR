import { Container, CustomInput, Label } from "./styles";

interface Props {
	label: string;
	placeholder: string;
	value?: string;
	onChange?: (value: string) => void;
}

export default function Input({ label, placeholder, value, onChange }: Props) {
	return (
		<Container>
			<Label>{label}</Label>
			<CustomInput
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</Container>
	);
}
