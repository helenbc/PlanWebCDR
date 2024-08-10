interface Props {
	space?: number;
}

export default function Spacer({ space = 50 }: Props) {
	return <div style={{ height: space }} />;
}
