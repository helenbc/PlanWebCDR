import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as mathService from "@/services/math";
import * as pdfService from "@/services/pdf";

const schema = z.object({
	o: z.number(),
	s: z.number(),
	pl: z.number(),
	pa: z.number(),
	t: z.number(),
	coletaSeletiva: z.number(),
	comercializada: z.number(),
});

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const get = (key: string) =>
		searchParams.get(key) ? Number(searchParams.get(key)) : null;

	// Validate searchParams
	const parsed = schema.safeParse({
		o: get("o"),
		s: get("s"),
		pl: get("pl"),
		pa: get("pa"),
		t: get("t"),
		coletaSeletiva: get("coletaSeletiva"),
		comercializada: get("comercializada"),
	});
	if (!parsed.success) {
		return NextResponse.json(parsed.error.format(), { status: 400 });
	}

	const formula1 = mathService.getFormula1(parsed.data);
	const formula2 = mathService.getFormula2(parsed.data);

	const headers = {
		"Content-Type": "application/pdf",
		"Content-Disposition": 'attachment; filename="report.pdf"',
	};

	const doc = pdfService.generatePdf(formula1, formula2);

	return new NextResponse(doc, { headers });
}
