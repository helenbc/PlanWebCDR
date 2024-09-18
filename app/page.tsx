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
import { PDF_INTRODUCTION_1, PDF_INTRODUCTION_2 } from "@/services/pdf";

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
				<InfoText>{PDF_INTRODUCTION_1}</InfoText>
				<InfoText>{PDF_INTRODUCTION_2}</InfoText>

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
					placeholder="Ex: 11451245"
					value={report.cityPopulation || ""}
					onChange={report.setCityPopulation}
					isDecimal
				/>
				<Input
					icon="person"
					label="Geração de resíduos (Kg) per capita"
					placeholder="Ex: 320"
					value={report.perCapitaWasteGeneration || ""}
					onChange={report.setPerCapitaWasteGeneration}
					isDecimal
				/>

				<InfoText>
					Adicione a quantidade de resíduos por tipo de material.
				</InfoText>

				<Input
					icon="food"
					label="Fração orgânica (restos de alimentos + podas) (O)"
					placeholder="Ex: 1231"
					value={report.fracaoOrganica || ""}
					onChange={report.setFracaoOrganica}
					isDecimal
				/>
				<Input
					icon="sanitizer"
					label="Sanitários (S)"
					placeholder="Ex: 954"
					value={report.sanitarios || ""}
					onChange={report.setSanitarios}
					isDecimal
				/>
				<Input
					icon="plastic"
					label="Plásticos (Pl)"
					placeholder="Ex: 122"
					value={report.plasticos || ""}
					onChange={report.setPlasticos}
					isDecimal
				/>
				<Input
					icon="paper"
					label="Papel e papelão (Pa)"
					placeholder="Ex: 1123"
					value={report.papeis || ""}
					onChange={report.setPapeis}
					isDecimal
				/>
				<Input
					icon="dress"
					label="Têxteis (T)"
					placeholder="Ex: 3002"
					value={report.texteis || ""}
					onChange={report.setTexteis}
					isDecimal
				/>

				<Spacer space={20} />

				<InfoText>
					Adicione a quantidade de resíduos por tipo de coleta.
				</InfoText>

				<Input
					icon="trash"
					label="Quantidade de resíduos (Kg) – COLETA SELETIVA"
					placeholder="Ex: 70334432"
					value={report.coletaSeletiva || ""}
					onChange={report.setColetaSeletiva}
					isDecimal
				/>
				<Input
					icon="money"
					label="Quantidade de resíduos (Kg) - COMERCIALIZADA"
					placeholder="Ex: 300439421"
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
