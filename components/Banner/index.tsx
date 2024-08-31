import { Container, GlassBackground, Logo } from "./styles";

export default function Banner() {
	return (
		<Container>
			<GlassBackground>
				<Logo width={300} height={100} alt="PlanWebCDR" src="/logo2.png" />
			</GlassBackground>
		</Container>
	);
}
