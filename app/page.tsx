"use client";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Spacer from "@/components/Spacer";
import {
	Container,
	InfoText,
	LogoContainer,
	PageContainer,
} from "@/components/home/styles";
import { useReport } from "@/hooks/report";

import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
	const report = useReport();

	return (
		<PageContainer>
			<Banner />
			<LogoContainer>
				<Image src="/logo2.png" width={300} height={100} alt="PlanWebCDR" />
			</LogoContainer>

			<Container>
				<InfoText>
					Esta aplicação visa analisar o potencial energético dos resíduos
					sólidos domiciliares (RSD) de uma determinada localidade brasileira,
					com o objetivo de desenvolver um plano de gestão estratégico. O estudo
					considera a composição dos resíduos, focando nas frações combustíveis,
					para avaliar seu potencial como fonte de energia alternativa. A
					aplicação busca oferecer uma solução sustentável para o desafio da
					disposição de resíduos, alinhada com a Política Nacional de Resíduos
					Sólidos (PNRS), propondo a utilização de Combustível Derivado de
					Resíduos (CDR) como uma alternativa energética e ambiental.
				</InfoText>

				<Input
					icon="city"
					label="Nome do Município"
					placeholder="Ex: São Paulo"
					value={report.cityName || ""}
					onChange={report.setCityName}
				/>
				<Input
					icon="people"
					label="Número de habitantes"
					placeholder="Ex: 73044304"
					value={report.cityPopulation || ""}
					onChange={report.setCityPopulation}
					isDecimal
				/>
				<Input
					icon="calendar"
					label="Quantidade de resíduos gerados anualmente"
					placeholder="10000"
					value={report.annualGeneratedWaste || ""}
					onChange={report.setAnnualGeneratedWaste}
					isDecimal
				/>
				<Input
					icon="person"
					label="Geração de resíduos per capita"
					placeholder="12000"
					value={report.perCapitaWasteGeneration || ""}
					onChange={report.setPerCapitaWasteGeneration}
					isDecimal
				/>

				<InfoText>
					A Política Nacional de Resíduos Sólidos (PNRS) do Brasil objetiva
					promover a gestão integrada e o gerenciamento dos resíduos sólidos, de
					modo a assegurar um destino final ambientalmente adequado. A
					disposição dos resíduos sólidos domiciliares (RSD) é um desafio na
					maior parte dos municípios brasileiros, muitas vezes efetuada sem
					tratamento prévio, com inúmeros impactos ambientais negativos. Nesse
					contexto, o objetivo deste estudo foi analisar o potencial energético
					dos RSD do ENTRADA 1, que conta com uma população de ENTRADA 2
					habitantes que geram anualmente cerca de ENTRADA 3 resíduos, a partir
					do atual cenário do gerenciamento desses resíduos, como plano de
					gestão estratégico. O estudo foi feito a partir da estimativa do
					potencial energético das principais frações combustíveis que compõem
					os RSD brasileiros, combinando-se informações obtidas da literatura. A
					fração mais significativa é de matéria orgânica, seguida de
					recicláveis e por fim rejeitos. Com intuito de mostrar os benefícios
					econômicos e ambientais que esse tipo de resíduo apresenta como
					recurso, assim como uma alternativa para a demanda de energia que a
					cada dia aumenta, como solução já que os recursos naturais tendem a
					esgotar, apresentamos passos estratégicos para um plano de gestão afim
					de colocar em prática a inserção do CDR.
				</InfoText>

				<Input
					icon="food"
					label="Fração orgânica (restos de alimentos + podas) (O)"
					placeholder="12"
					value={report.fracaoOrganica || ""}
					onChange={report.setFracaoOrganica}
					isDecimal
				/>
				<Input
					icon="sanitizer"
					label="Sanitários (S)"
					placeholder="12"
					value={report.sanitarios || ""}
					onChange={report.setSanitarios}
					isDecimal
				/>
				<Input
					icon="plastic"
					label="Plásticos (Pl)"
					placeholder="12"
					value={report.plasticos || ""}
					onChange={report.setPlasticos}
					isDecimal
				/>
				<Input
					icon="paper"
					label="Papel e papelão (Pa)"
					placeholder="12"
					value={report.papeis || ""}
					onChange={report.setPapeis}
					isDecimal
				/>
				<Input
					icon="dress"
					label="Têxteis (T)"
					placeholder="12"
					value={report.texteis || ""}
					onChange={report.setTexteis}
					isDecimal
				/>

				<Spacer space={20} />

				<InfoText>
					Para atingir a meta da PNRS de enviar apenas rejeitos aos aterros
					sanitários, a eficiência da coleta seletiva é fundamental e quanto
					melhor a separação na fonte e na operação de triagem, menor a geração
					de rejeito. Nesse caso Besen et al., (2017), define que a Taxa de
					Rejeito (TR) mede a eficiência da separação dos resíduos na fonte
					geradora e na triagem. Logo, a taxa de rejeitos é representada partir
					da equação 2. De acordo com Besen et al., (2016) o resultado do índice
					dos rejeitos quando é superior a 30% é considerado com baixa tendência
					à sustentabilidade, ou seja, um cenário inadequado (ALCANTARA, 2022).
				</InfoText>

				<Input
					icon="trash"
					label="Quantidade de resíduos – COLETA SELETIVA"
					placeholder="12"
					value={report.coletaSeletiva || ""}
					onChange={report.setColetaSeletiva}
					isDecimal
				/>
				<Input
					icon="money"
					label="Quantidade de resíduos - COMERCIALIZADA"
					placeholder="12"
					value={report.comercializada || ""}
					onChange={report.setComercializada}
					isDecimal
				/>

				<Spacer space={20} />

				<Button title="Obter relatório" onClick={report.generatePDF} />

				<Spacer space={50} />
			</Container>
		</PageContainer>
	);
}
