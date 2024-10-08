import { jsPDF } from "jspdf";

interface PDFOptions {
	cityName: string;
	cityPopulation: number;
	annualWasteGeneration: number;
	perCapitaWasteGeneration: number;
	formula1: number;
	formula2: number;
}

function replaceDotByComma(text: number | string) {
	return String(text).replace(".", ",");
}

export const PDF_INTRODUCTION_1 =
	"A produção de resíduos sólidos é uma consequência natural da vida em comunidade desde os primórdios, e com o crescimento acelerado dessas comunidades a geração de resíduos tem aumentado desproporcionalmente ao longo dos anos. Contudo, ter estratégia é fundamental para controle e gestão eficiente de uma cidade. Este website gera um plano estratégico, com uma abordagem sustentável para o gerenciamento de resíduos sólidos urbanos reduzindo a dependência de aterros sanitários, promovendo a economia circular e contribuindo para a mitigação dos impactos ambientais através da produção e uso eficiente do Combustível Derivado de Resíduos (CDR), tendo como objetivo geral nortear o gestor do município para a produção e utilização de CDR como parte integrante do gerenciamento de resíduos sólidos urbanos. Este plano estratégico é um guia inicial, a sua implementação eficaz dependerá da colaboração entre governo, empresas, comunidade acadêmica e local.";

export const PDF_INTRODUCTION_2 =
	"Sua cidade está a um Pequeno Passo para uma melhor Gestão dos Resíduos Sólidos Urbanos (RSU), seu Plano Municipal e os Serviços Implantados o considera Apto para colocar em prática através do nosso Plano De Gestão Estratégica a Inserção do CDR na Recuperação dos Resíduos Sólidos Urbanos, contribuir para o desenvolvimento da sua cidade e do Meio Ambiente.";

class PlanWebCDRPDF {
	private doc: jsPDF;
	private readonly leftMargin = 20;
	private readonly maxWidth: number;

	constructor() {
		this.doc = new jsPDF();
		this.maxWidth = this.doc.internal.pageSize.width - this.leftMargin * 2;
	}

	generatePDF(options: PDFOptions): void {
		this.addIntroduction();
		this.addMunicipalData(options);
		this.addMathData(options);
		this.addPhases();
		this.addPhaseDetails();
		this.doc.save("PlanWebCDR.pdf");
	}

	private addIntroduction(): void {
		const logoWidth = 50;
		const logoHeight = 50;
		const pageWidth = this.doc.internal.pageSize.width;

		this.doc.addImage(
			"/logo1.png",
			"PNG",
			pageWidth / 2 - logoWidth / 2,
			10,
			logoWidth,
			logoHeight,
		);
		this.addText("Bem vindo ao PlanWebCDR", 18, { align: "center", y: 70 });
		this.addText(PDF_INTRODUCTION_1, 12, { align: "justify", y: 80 });
		this.addText(PDF_INTRODUCTION_2, 12, { align: "justify", y: 140 });
	}

	private addMunicipalData({
		cityName,
		cityPopulation,
		perCapitaWasteGeneration,
		annualWasteGeneration,
	}: PDFOptions): void {
		this.doc.setFont("helvetica", "normal");
		this.doc.setFontSize(14);

		let y = 170;
		const lineHeight = 7;

		// First line
		this.doc.text("", this.leftMargin, y);
		this.doc.setFont("helvetica", "bold");
		this.doc.text(`${cityName.toUpperCase()} `, this.leftMargin, y);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			" CONTA COM ",
			this.leftMargin + this.doc.getTextWidth(`${cityName.toUpperCase()} `),
			y,
		);
		this.doc.setFont("helvetica", "bold");
		this.doc.text(
			`${cityPopulation} `,
			this.leftMargin +
				this.doc.getTextWidth(`${cityName.toUpperCase()} CONTA COM `),
			y,
		);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			" HABITANTES,",
			this.leftMargin +
				this.doc.getTextWidth(
					`${cityName.toUpperCase()} CONTA COM ${cityPopulation} `,
				),
			y,
		);

		// Second line
		y += lineHeight;
		this.doc.text("COM GERAÇÃO PER CAPITA DE ", this.leftMargin, y);
		this.doc.setFont("helvetica", "bold");
		this.doc.text(
			`${replaceDotByComma(perCapitaWasteGeneration)} `,
			this.leftMargin + this.doc.getTextWidth("COM GERAÇÃO PER CAPITA DE "),
			y,
		);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			"kg/hab/dia.",
			this.leftMargin +
				this.doc.getTextWidth(
					`COM GERAÇÃO PER CAPITA DE ${replaceDotByComma(perCapitaWasteGeneration)} `,
				),
			y,
		);

		// Third line
		y += lineHeight;
		this.doc.text("SEU MUNICÍPIO GERA ANUALMENTE ", this.leftMargin, y);
		this.doc.setFont("helvetica", "bold");
		this.doc.text(
			`${replaceDotByComma(annualWasteGeneration.toFixed(2))} `,
			this.leftMargin + this.doc.getTextWidth("SEU MUNICÍPIO GERA ANUALMENTE "),
			y,
		);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			"kg/dia DE RESÍDUOS.",
			this.leftMargin +
				this.doc.getTextWidth(
					`SEU MUNICÍPIO GERA ANUALMENTE ${replaceDotByComma(annualWasteGeneration.toFixed(2))}  `,
				),
			y,
		);
	}

	private addMathData(options: PDFOptions): void {
		this.doc.addPage();
		const pci = options.formula1;

		this.doc.setFont("helvetica", "normal");

		this.addText(
			`PCI = [(15,42 O + 19,14 S + 32,68 PL + 8,33 PA + 21,51 T)\n x (1 - Wu)] - (2,442 x Wu) = ${replaceDotByComma(pci.toFixed(5))}`,
			12,
			{ align: "center", y: 20 },
		);

		this.addText("QT = Resíduos Gerados Anualmente (T) / 8000", 12, {
			align: "center",
			y: 35,
		});

		const qt = options.annualWasteGeneration / 8000;
		this.addText(
			`QT = ${replaceDotByComma(options.annualWasteGeneration.toFixed(5))} / 8000`,
			12,
			{
				align: "center",
				y: 40,
			},
		);

		this.addText(`QT = ${replaceDotByComma(qt.toFixed(5))}`, 12, {
			align: "center",
			y: 45,
		});

		this.addText("PT (MWt) = QT x PCI", 12, {
			align: "center",
			y: 55,
		});
		this.addText(
			`PT (MWt) = ${replaceDotByComma(qt.toFixed(5))} x ${replaceDotByComma(pci.toFixed(5))}`,
			12,
			{
				align: "center",
				y: 60,
			},
		);

		const pt = qt * pci;
		this.addText(`PT (MWt) = ${replaceDotByComma(pt.toFixed(5))}`, 12, {
			align: "center",
			y: 65,
		});

		const dummy = pt * 1 * 1000;
		this.addText(`PT x 1 x 1000 = ${replaceDotByComma(dummy.toFixed(5))}`, 12, {
			align: "center",
			y: 70,
		});

		this.addText("PE (MWt) = PT x 30%", 12, {
			align: "center",
			y: 80,
		});

		const pe = pt * 0.3;
		this.addText(`PE (MWt) = ${replaceDotByComma(pe.toFixed(5))}`, 12, {
			align: "center",
			y: 85,
		});
	}

	private addPhases(): void {
		const introduction =
			"Agora, te daremos os passos para que alcance seu objetivo, siga as etapas pré estabelecidas pelo nosso estudo, este plano estratégico é contemplado por 4 fases, sendo elas:";
		this.addText(introduction, 14, { align: "justify", y: 110 });

		const phases = [
			"FASE 1 - Análise de Ambientes: Forças e Fraquezas, Ameaças e Oportunidades - SWOT.",
			"FASE 2 - Políticas Institucionais: Missão, Visão e Valores.",
			"FASE 3 - Metodologia de Planejamento: Ferramentas e Gerenciamento",
			"FASE 4 - Acompanhamento - Monitoramento e avaliação.",
		];
		this.addText(phases.join("\n"), 12, { y: 130 });
	}

	private addPhaseDetails(): void {
		this.doc.addPage();
		this.addPhaseOneDetails();
		this.doc.addPage();
		this.addPhaseTwoDetails();
		this.doc.addPage();
		this.addPhaseThreeDetails();
		this.doc.addPage();
		this.addPhaseFourDetails();
	}

	private addPhaseOneDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText(
			"FASE 1 - Análise de Ambientes: Forças e Fraquezas, Ameaças e Oportunidades",
			16,
			{ y: 20 },
		);
		this.doc.setFont("helvetica", "normal");

		const paragraphs = [
			"Nesta fase é preciso conhecer melhor seu município, entendendo quais são os pontos de força e fraqueza. Recomenda-se, especialmente, a utilização da Matriz SWOT para entender quais são os pontos fortes e fracos além de suas oportunidades e ameaças.",
			"A partir da Elaboração do Diagnóstico Situacional da gestão dos resíduos feita no município, a partir do levantamento dos dados analisar o Gerenciamento, A Coleta, Recicláveis, Destinação Final Adequada e Potencial Energético Dos Rejeitos.",
		];

		this.doc.addImage(
			"/FASE_1.jpg",
			"JPEG",
			this.leftMargin,
			50,
			this.doc.internal.pageSize.width * 0.8,
			75,
		);

		this.addText(paragraphs.join("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"), 12, {
			y: 40,
			align: "justify",
		});

		this.doc.addImage(
			"/pic2.png",
			"PNG",
			this.leftMargin,
			150,
			this.doc.internal.pageSize.width * 0.8,
			40,
		);

		this.doc.setFont("helvetica", "bold");
		this.addText(
			"IMPORTANTE: Feito juntamente a equipe de gestão do município, responsáveis pela gravimetria, equipe de catadores de recicláveis e comunidade.",
			12,
			{ y: 195, align: "justify" },
		);
		this.doc.setFont("helvetica", "normal");
	}

	private addPhaseTwoDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText(
			"FASE 2 - Políticas Institucionais: Missão, Visão e Valores",
			16,
			{ y: 20 },
		);
		this.doc.setFont("helvetica", "normal");

		const content = [
			"Concluída a etapa de Análise de Ambientes, inicia-se a etapa de criação das Políticas Institucionais que regem o município e que simbolizam o grande direcionamento que a gestão deve ter em seu Planejamento Estratégico. Esta fase tem como objetivo o  desenvolvimento de políticas e ações que incentivem o uso do CDR.",
		];

		this.addText(content.join("\n\n"), 12, { y: 30, align: "justify" });

		this.doc.addImage(
			"/FASE_2.jpg",
			"JPEG",
			this.leftMargin,
			50,
			this.doc.internal.pageSize.width * 0.8,
			75,
		);

		this.doc.setFont("helvetica", "bold");
		this.addText(
			"NORMAS E REGULAMENTAÇÕES DEVEM SER COLOCADAS EM PRÁTICA EM CONJUNTO COM INCENTIVOS PARA A TORNAR MAIS ATRAENTE AOS SEUS MUNÍCIPES.",
			12,
			{ y: 145, align: "justify" },
		);
		this.doc.setFont("helvetica", "normal");
	}

	private addPhaseThreeDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText(
			"FASE 3 - Metodologia de Planejamento: Ferramentas e Gerenciamento",
			16,
			{ y: 20 },
		);
		this.doc.setFont("helvetica", "normal");

		this.addText(
			"Assim que as Políticas Institucionais são finalizadas, entra-se na etapa de escolha da metodologia de Planejamento Estratégico e de Gerenciamento.",
			12,
			{ y: 40 },
		);

		this.doc.addImage(
			"/FASE_3.jpg",
			"JPEG",
			this.leftMargin,
			50,
			this.doc.internal.pageSize.width * 0.8,
			75,
		);

		const content = [
			"Uso da ferramenta estratégica Benchmarking, conduzindo a pesquisa a aplicação de 5 etapas:",
			"1. É a etapa que identifica o processo a ser melhorado;",
			"2. Levantamento de informação do processo;",
			"3. Busca de um modelo a ser comparado (cenário real e cenário ideal);",
			"4. Comparação dos processos em ambos os cenários;",
			"5. Implantação do novo modelo de processo e controle deste (cenário potencial).",
		];

		this.addText(content.join("\n\n"), 12, { y: 140, align: "left" });
	}

	private addPhaseFourDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText("FASE 4 - Acompanhamento - Monitoramento e Avaliação", 16, {
			y: 20,
		});
		this.doc.setFont("helvetica", "normal");

		this.addText(
			'Partindo do lema "O que não é mensurado, não é gerenciado". Esta fase contempla nos direciona a uma implementação gradual, monitoramento, avaliação e educação continua com amparo da comunicação entre as partes envolvidas no desenvolvimento do plano para o seu sucesso, a partir de indicadores dos processos é possível realizar de forma eficiente a inserção do CDR no plano de gestão do município.',
			12,
			{
				y: 30,
			},
		);

		this.doc.addImage(
			"/FASE_4.jpg",
			"JPEG",
			this.leftMargin,
			55,
			this.doc.internal.pageSize.width * 0.8,
			75,
		);

		const sections = [
			{
				title: "Implementação Gradual",
				content: [
					"Implementar o uso de combustíveis derivados de resíduos de maneira gradual e sustentável. Com ações práticas:",
					[
						"Iniciar Projetos-Piloto em áreas específicas;",
						"Monitorar e Avaliar o Desempenho desses projetos;",
						"Implementação em larga escala após avaliação positiva;",
					],
				],
			},
			{
				title: "Monitoramento e Avaliação Contínua",
				content: [
					"Acompanhar e avaliar o progresso do uso de combustíveis derivados de resíduos. Para realizar o monitoramento e avaliação de forma eficaz, é crucial estabelecer processos de coleta de dados contínuos, informatizar as informações para facilitar o acesso e a qualidade dos dados, institucionalizar a avaliação e o monitoramento, e utilizar indicadores para acompanhar o desempenho e a qualidade dos serviços ao longo do tempo. Ações Práticas: Implementar Sistemas De Monitoramento de Emissões e Impactos Ambientais, assim como realizar auditorias regulares para garantir a conformidade com as metas estabelecidas.",
				],
			},
			{
				title: "Educação Contínua e Comunicação",
				content: [
					"Objetivo: Manter a comunidade informada sobre os benefícios e o progresso do projeto. Ações Práticas: Organizar Workshops, Palestras e Eventos Educativos. Utilizar Canais de Comunicação eficazes para disseminar informações regularmente, Sites, App, Plataformas Confiáveis.",
				],
			},
		];

		let yPosition = 140;
		for (const section of sections) {
			if (section.title) {
				this.doc.setFont("helvetica", "bold");
				this.addText(section.title, 14, { y: yPosition });
				this.doc.setFont("helvetica", "normal");
				yPosition += 5;
			}
			for (const contentItem of section.content) {
				if (Array.isArray(contentItem)) {
					// This is a bulleted list
					for (const bulletPoint of contentItem) {
						this.addText(`• ${bulletPoint}`, 12, {
							y: yPosition,
							align: "left",
						});
						yPosition += 5;
					}
				} else {
					// This is a regular paragraph
					this.addText(contentItem, 12, { y: yPosition, align: "justify" });
					yPosition += 20;

					if (section.title === "Monitoramento e Avaliação Contínua") {
						yPosition += 15;
					}
					if (section.title === "Implementação Gradual") {
						yPosition -= 10;
					}
				}
			}
			yPosition += 10;
		}

		yPosition -= 5;

		this.doc.setFont("helvetica", "bold");
		this.addText(
			"É importante lembrar que, embora o planejamento estratégico seja um excelente instrumento para direcionar o desenvolvimento de todos os segmentos que compõem a cidade, é ainda mais essencial que esses planos se transformem em ações e em uma gestão contínua da cidade, tornando o planejamento municipal um processo dinâmico. Para isso, cabe aos gestores públicos dar continuidade aos planos elaborados, acompanhados da sociedade civil, utilizando ferramentas de gestão compartilhada e monitoramento de indicadores envolvendo todas as secretarias municipais em uma visão de futuro comum.",
			12,
			{ align: "justify", y: yPosition },
		);
		this.doc.setFont("helvetica", "normal");
	}

	private addText(
		text: string,
		fontSize: number,
		options: { align?: "left" | "center" | "justify"; y?: number } = {},
	): void {
		const { align = "left", y = this.leftMargin } = options;
		this.doc.setFontSize(fontSize);
		const lines = this.doc.splitTextToSize(text, this.maxWidth);

		let xPosition = this.leftMargin;
		if (align === "center") {
			xPosition = this.doc.internal.pageSize.width / 2;
		}

		this.doc.text(lines, xPosition, y, {
			align,
			maxWidth: this.maxWidth,
		});
	}
}

export function generatePdf(options: PDFOptions): void {
	const pdfGenerator = new PlanWebCDRPDF();
	pdfGenerator.generatePDF(options);
}
