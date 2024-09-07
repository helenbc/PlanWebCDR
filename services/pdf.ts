import { jsPDF } from "jspdf";

interface PDFOptions {
	cityName: string;
	cityPopulation: number;
	perCapitaWasteGeneration: number;
	formula1: number;
	formula2: number;
}

export const PDF_INTRODUCTION =
	"Sua cidade está a um pequeno passo para uma melhor gestão dos resíduos sólidos urbanos, seu Plano Municipal e os serviços implantados o considera apto para colocar em prática através do nosso Plano De Gestão Estratégica, a inserção Do CDR na recuperação dos resíduos sólidos urbanos, contribuir para o desenvolvimento da sua cidade e do meio ambiente.";

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
		this.addPhases();
		this.addFluxogram();
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
		this.addText(PDF_INTRODUCTION, 12, { align: "justify", y: 80 });
	}

	private addMunicipalData({
		cityName,
		cityPopulation,
		perCapitaWasteGeneration,
	}: PDFOptions): void {
		const totalGenerated = cityPopulation * perCapitaWasteGeneration;

		this.doc.setFont("helvetica", "normal");
		this.doc.setFontSize(14);

		let y = 120;
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
			`${perCapitaWasteGeneration} `,
			this.leftMargin + this.doc.getTextWidth("COM GERAÇÃO PER CAPITA DE "),
			y,
		);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			"kg/hab/dia.",
			this.leftMargin +
				this.doc.getTextWidth(
					`COM GERAÇÃO PER CAPITA DE ${perCapitaWasteGeneration} `,
				),
			y,
		);

		// Third line
		y += lineHeight;
		this.doc.text("SEU MUNICÍPIO PODE GERAR ", this.leftMargin, y);
		this.doc.setFont("helvetica", "bold");
		this.doc.text(
			`${totalGenerated.toFixed(2)} `,
			this.leftMargin + this.doc.getTextWidth("SEU MUNICÍPIO PODE GERAR "),
			y,
		);
		this.doc.setFont("helvetica", "normal");
		this.doc.text(
			"kg/dia DE RESÍDUOS.",
			this.leftMargin +
				this.doc.getTextWidth(
					`SEU MUNICÍPIO PODE GERAR ${totalGenerated.toFixed(2)} `,
				),
			y,
		);
	}

	private addPhases(): void {
		const introduction =
			"Te daremos os passos para que alcance seu objetivo, siga as etapas pré estabelecidas pelo nosso estudo guiado pelo fluxograma abaixo. Este plano estratégico é contemplado por 4 fases:";
		this.addText(introduction, 14, { align: "justify", y: 160 });

		const phases = [
			"FASE 1 - Análise de Ambientes: Forças e Fraquezas, Ameaças e Oportunidades - SWOT.",
			"FASE 2 - Políticas Institucionais: Missão, Visão e Valores.",
			"FASE 3 - Metodologia de Planejamento: Ferramentas e Gerenciamento",
			"FASE 4 - Acompanhamento - Monitoramento e avaliação.",
		];
		this.addText(phases.join("\n"), 12, { y: 180 });
	}

	private addFluxogram(): void {
		this.doc.addPage();
		this.addText(
			"O fluxograma a seguir detalha cada etapa do objetivo e suas ações práticas.",
			14,
			{
				align: "center",
				y: 30,
			},
		);

		const pageWidth = this.doc.internal.pageSize.width;
		const pageHeight = this.doc.internal.pageSize.height;

		this.doc.addImage(
			"/pic.png",
			"PNG",
			this.leftMargin,
			31,
			pageWidth * 0.8,
			pageHeight * 0.9,
		);
	}

	private addPhaseDetails(): void {
		this.doc.addPage();
		this.addPhaseOneDetails();
		this.addPhaseTwoDetails();
		this.addPhaseThreeDetails();
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
			"Esta fase abrange as etapas de 1 a 6, a partir da Elaboração do Diagnóstico Situacional da gestão dos resíduos feita no município, a partir do levantamento dos dados analisar o Gerenciamento, A Coleta, Recicláveis, Destinação Final Adequada e Potencial Energético Dos Rejeitos.",
		];

		this.addText(paragraphs.join("\n\n"), 12, { y: 40, align: "justify" });

		this.doc.addImage(
			"/pic2.png",
			"PNG",
			this.leftMargin,
			80,
			this.doc.internal.pageSize.width * 0.8,
			40,
		);

		this.doc.setFont("helvetica", "bold");
		this.addText(
			"IMPORTANTE: Feito juntamente a equipe de gestão do município, responsáveis pela gravimetria, equipe de catadores de recicláveis e comunidade.",
			12,
			{ y: 125, align: "justify" },
		);
		this.doc.setFont("helvetica", "normal");
	}

	private addPhaseTwoDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText(
			"FASE 2 - Políticas Institucionais: Missão, Visão e Valores",
			16,
			{ y: 145 },
		);
		this.doc.setFont("helvetica", "normal");

		const content = [
			"Concluída a etapa de Análise de Ambientes, inicia-se a etapa de criação das Políticas Institucionais que regem o município e que simbolizam o grande direcionamento que a gestão deve ter em seu Planejamento Estratégico. Esta fase abrange a etapa 7 com o objetivo de desenvolvimento de políticas e ações que incentivem o uso do CDR.",
		];

		this.addText(content.join("\n\n"), 12, { y: 155, align: "justify" });

		this.doc.setFont("helvetica", "bold");
		this.addText(
			"NORMAS E REGULAMENTAÇÕES DEVEM SER COLOCADAS EM PRÁTICA EM CONJUNTO COM INCENTIVOS PARA A TORNAR MAIS ATRAENTE AOS SEUS MUNÍCIPES.",
			12,
			{ y: 180, align: "justify" },
		);
		this.doc.setFont("helvetica", "normal");
	}

	private addPhaseThreeDetails(): void {
		this.doc.setFont("helvetica", "bold");
		this.addText(
			"FASE 3 - Metodologia de Planejamento: Ferramentas e Gerenciamento",
			16,
			{ y: 205 },
		);
		this.doc.setFont("helvetica", "normal");

		const content = [
			"Assim que as Políticas Institucionais são finalizadas, entra-se na etapa de escolha da metodologia de Planejamento Estratégico e de Gerenciamento. Uso da ferramenta estratégica Benchmarking, conduzindo a pesquisa a aplicação de 5 etapas:",
			"1. Identificar o processo a ser melhorado",
			"2. Levantamento de informação do processo",
			"3. Busca de um modelo a ser comparado (cenário real e cenário ideal)",
			"4. Comparação dos processos em ambos os cenários",
			"5. Implantação do novo modelo de processo e controle deste (cenário potencial)",
		];

		this.addText(content.join("\n\n"), 12, { y: 225, align: "left" });
	}

	private addPhaseFourDetails(): void {
		this.doc.addPage();
		this.doc.setFont("helvetica", "bold");
		this.addText("FASE 4 - Acompanhamento - Monitoramento e Avaliação", 16, {
			y: 20,
		});
		this.doc.setFont("helvetica", "normal");

		const sections = [
			{
				title: null,
				content: [
					'Partindo do lema "O que não é mensurado, não é gerenciado". Esta fase contempla as Etapas 8, 9 e 10 que nos direciona a uma implementação gradual, monitoramento, avaliação e educação continua com amparo da comunicação entre as partes envolvidas no desenvolvimento do plano para o seu sucesso, a partir de indicadores dos processos é possível realizar de forma eficiente a inserção do CDR no plano de gestão do município.',
				],
			},
			{
				title: "Implementação Gradual",
				content: [
					"Implementar o uso de combustíveis derivados de resíduos de maneira gradual e sustentável. Com ações práticas:",
					[
						"Iniciar Projetos-Piloto em áreas específicas",
						"Monitorar e Avaliar o Desempenho desses projetos",
						"Implementação em larga escala após avaliação positiva",
					],
				],
			},
			{
				title: "Monitoramento e Avaliação Contínua",
				content: [
					"Acompanhar e avaliar o progresso do uso de combustíveis derivados de resíduos. Para realizar o monitoramento e avaliação de forma eficaz, é crucial estabelecer processos de coleta de dados contínuos, informatizar as informações para facilitar o acesso e a qualidade dos dados, institucionalizar a avaliação e o monitoramento, e utilizar indicadores para acompanhar o desempenho e a qualidade dos serviços ao longo do tempo.",
				],
			},
			{
				title: "Educação Contínua e Comunicação",
				content: [
					"Objetivo: Manter a comunidade informada sobre os benefícios e o progresso do projeto. Ações Práticas: Organizar Workshops, Palestras e Eventos Educativos. Utilizar Canais de Comunicação eficazes para disseminar informações regularmente, Sites, App, Plataformas Confiáveis.",
				],
			},
		];

		let yPosition = 30;
		for (const section of sections) {
			if (section.title) {
				this.doc.setFont("helvetica", "bold");
				this.addText(section.title, 14, { y: yPosition });
				this.doc.setFont("helvetica", "normal");
				yPosition += 10;
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
				}
			}
			yPosition += 10;
		}

		yPosition += 10;
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
