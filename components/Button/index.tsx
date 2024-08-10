import { CustomButton } from "./styles";

interface Props {
	title: string;
	onClick?: () => void;
}

export default function Button({ title, onClick }: Props) {
	return (
		<CustomButton type="button" onClick={onClick}>
			{title}
		</CustomButton>
	);
}
