import { FaCalendar, FaCity, FaPeopleGroup, FaPerson } from "react-icons/fa6";
import { Container, CustomInput, Label, LabelWrapper } from "./styles";

const icons = {
	people: <FaPeopleGroup />,
	city: <FaCity />,
	calendar: <FaCalendar />,
	person: <FaPerson />,
	// Add more icons as needed
};

interface Props {
	label: string;
	placeholder: string;
	value?: string;
	onChange?: (value: string) => void;
	isDecimal?: boolean;
	icon?: keyof typeof icons;
}

export default function Input({
	label,
	placeholder,
	value,
	onChange,
	isDecimal,
	icon,
}: Props) {
	return (
		<Container>
			<LabelWrapper>
				{icon && icons[icon]}

				<Label>{label}</Label>
			</LabelWrapper>

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
