import { Container, GlassBackground, Logo } from "./styles";

export default function Banner() {
	return (
		<Container>
			<GlassBackground>
				<Logo width={100} height={100} alt="PlanWebCDR" src="/logo1.png" />
			</GlassBackground>
		</Container>
	);
}
