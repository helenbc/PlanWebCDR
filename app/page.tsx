"use client";
import { useState } from "react";
import Button from "@/components/Button";
import { Container, InfoText, Title } from "@/components/home/styles";
import Input from "@/components/Input";
import Spacer from "@/components/Spacer";
import NavBar from "@/components/NavBar"; // Importando a NavBar

import * as mathService from "@/services/math";

export default function Page() {
	const [cityName, setCityName] = useState("");
	const [cityPopulation, setCityPopulation] = useState("");
	const [annualGeneratedWaste, setAnnualGeneratedWaste] = useState("");
	const [perCapitaWasteGeneration, setPerCapitaWasteGeneration] = useState("");

	const [fracaoOrganica, setFracaoOrganica] = useState("");
	const [sanitarios, setSanitarios] = useState("");
	const [plasticos, setPlasticos] = useState("");
	const [papeis, setPapeis] = useState("");
	const [texteis, setTexteis] = useState("");

	const [formula1Result, setFormula1Result] = useState(
		"Por favor, preencha as entradas!",
	);

	const [coletaSeletiva, setColetaSeletiva] = useState("");
	const [comercializada, setComercializada] = useState("");

	const [formula2Result, setFormula2Result] = useState(
		"Por favor, preencha as entradas!",
	);

	function calculateFormula1() {
		const result = mathService.getFormula1({
			o: Number(fracaoOrganica),
			s: Number(sanitarios),
			pl: Number(plasticos),
			pa: Number(papeis),
			t: Number(texteis),
		});
		console.log(result);

		setFormula1Result(result.toString());
	}

	function calculateFormula2() {
		const result = mathService.getFormula2({
			coletaSeletiva: Number(coletaSeletiva),
			comercializada: Number(comercializada),
		});

		setFormula2Result(result.toString());
	}

	return (
		<>
			<NavBar /> {/* Adicionando a NavBar */}
			<Container>
				<Title>PlanWebCDR</Title>

				<InfoText>
					Esta aplicação visa analisar o potencial energético dos resíduos sólidos
					domiciliares (RSD) de uma determinada localidade brasileira, com o
					objetivo de desenvolver um plano de gestão estratégico. O estudo
					considera a composição dos resíduos, focando nas frações combustíveis,
					para avaliar seu potencial como fonte de energia alternativa. A
					aplicação busca oferecer uma solução sustentável para o desafio da
					disposição de resíduos, alinhada com a Política Nacional de Resíduos
					Sólidos (PNRS), propondo a utilização de Combustível Derivado de
					Resíduos (CDR) como uma alternativa energética e ambiental.
				</InfoText>

				<Input
					label="Nome do Município"
					placeholder="Ex: São Paulo"
					value={cityName}
					onChange={setCityName}
				/>
				<Input
					label="Número de habitantes"
					placeholder="Ex: 73044304"
					value={cityPopulation}
					onChange={setCityPopulation}
				/>
				<Input
					label="Quantidade de resíduos gerados anualmente"
					placeholder="10000"
					value={annualGeneratedWaste}
					onChange={setAnnualGeneratedWaste}
				/>
				<Input
					label="Geração de resíduos per capita"
					placeholder="12000"
					value={perCapitaWasteGeneration}
					onChange={setPerCapitaWasteGeneration}
				/>

				<InfoText>
					A Política Nacional de Resíduos Sólidos (PNRS) do Brasil objetiva
					promover a gestão integrada e o gerenciamento dos resíduos sólidos, de
					modo a assegurar um destino final ambientalmente adequado. A disposição
					dos resíduos sólidos domiciliares (RSD) é um desafio na maior parte dos
					municípios brasileiros, muitas vezes efetuada sem tratamento prévio, com
					inúmeros impactos ambientais negativos. Nesse contexto, o objetivo deste
					estudo foi analisar o potencial energético dos RSD do ENTRADA 1, que
					conta com uma população de ENTRADA 2 habitantes que geram anualmente
					cerca de ENTRADA 3 resíduos, a partir do atual cenário do gerenciamento
					desses resíduos, como plano de gestão estratégico. O estudo foi feito a
					partir da estimativa do potencial energético das principais frações
					combustíveis que compõem os RSD brasileiros, combinando-se informações
					obtidas da literatura. A fração mais significativa é de matéria
					orgânica, seguida de recicláveis e por fim rejeitos. Com intuito de
					mostrar os benefícios econômicos e ambientais que esse tipo de resíduo
					apresenta como recurso, assim como uma alternativa para a demanda de
					energia que a cada dia aumenta, como solução já que os recursos naturais
					tendem a esgotar, apresentamos passos estratégicos para um plano de
					gestão afim de colocar em prática a inserção do CDR.
				</InfoText>

				<Input
					label="(O) Fração orgânica (restos de alimentos + podas)"
					placeholder="12"
					value={fracaoOrganica}
					onChange={setFracaoOrganica}
				/>
				<Input
					label="(S) Sanitários"
					placeholder="12"
					value={sanitarios}
					onChange={setSanitarios}
				/>
				<Input
					label="(Pl) Plásticos"
					placeholder="12"
					value={plasticos}
					onChange={setPlasticos}
				/>
				<Input
					label="(Pa) Papel e papelão"
					placeholder="12"
					value={papeis}
					onChange={setPapeis}
				/>
				<Input
					label="(T) têxteis"
					placeholder="12"
					value={texteis}
					onChange={setTexteis}
				/>

				<Spacer space={20} />

				<Button title="Calcular fórmula" onClick={calculateFormula1} />

				<Title>{formula1Result}</Title>

				<InfoText>
					Para atingir a meta da PNRS de enviar apenas rejeitos aos aterros
					sanitários, a eficiência da coleta seletiva é fundamental e quanto
					melhor a separação na fonte e na operação de triagem, menor a geração de
					rejeito. Nesse caso Besen et al., (2017), define que a Taxa de Rejeito
					(TR) mede a eficiência da separação dos resíduos na fonte geradora e na
					triagem. Logo, a taxa de rejeitos é representada partir da equação 2. De
					acordo com Besen et al., (2016) o resultado do índice dos rejeitos
					quando é superior a 30% é considerado com baixa tendência à
					sustentabilidade, ou seja, um cenário inadequado (ALCANTARA, 2022).
				</InfoText>

				<Input
					label="QUANTIDADE DE RESÍDUOS – COLETA SELETIVA"
					placeholder="12"
					value={coletaSeletiva}
					onChange={setColetaSeletiva}
				/>
				<Input
					label="QUANTIDADE DE RESÍDUOS COMERCIALIZADA"
					placeholder="12"
					value={comercializada}
					onChange={setComercializada}
				/>

				<Spacer space={20} />

				<Button title="Calcular fórmula" onClick={calculateFormula2} />

				<Title>{formula2Result}</Title>
			</Container>
		</>
	);
}
