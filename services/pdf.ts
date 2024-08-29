import fs from "node:fs";
import { jsPDF } from "jspdf";

export function generatePdf(formula1: number, formula2: number) {
	const doc = new jsPDF();

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

	return doc.output();
}
