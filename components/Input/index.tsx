import { Container, CustomInput, Label } from "./styles";

interface Props {
	label: string;
	placeholder: string;
	value?: string;
	onChange?: (value: string) => void;
	isDecimal?: boolean;
}

export default function Input({
	label,
	placeholder,
	value,
	onChange,
	isDecimal,
}: Props) {
	return (
		<Container>
			<Label>{label}</Label>
			<CustomInput
				type="text"
				placeholder={placeholder}
				inputMode={isDecimal ? "decimal" : "text"}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</Container>
	);
}
