import { jsPDF } from "jspdf";

interface PDFOptions {
	cityName: string;
	cityPopulation: number;
	annualGeneratedWaste: number;
	perCapitaWasteGeneration: number;
	formula1: number;
	formula2: number;
}

export function generatePdf({ formula1, formula2 }: PDFOptions) {
	const doc = new jsPDF();

	doc.addImage("/logo1.png", "PNG", 0, 0, 50, 50);

	// Add report title
	doc.setFontSize(18);
	doc.text("Sample Report", 20, 20);

	// Add formula results
	doc.setFontSize(12);
	doc.text(`Formula 1 Result: ${formula1}`, 20, 40);
	doc.text(`Formula 2 Result: ${formula2}`, 20, 60);

	// Add some sample content
	doc.setFontSize(10);
	doc.text(
		"This is a sample report generated using the jsPDF library.",
		20,
		80,
	);
	doc.text(
		"You can customize the report content and layout as needed.",
		20,
		90,
	);

	doc.save("download.pdf");
}
