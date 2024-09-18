interface Formula1Vars {
	o: number;
	s: number;
	pl: number;
	pa: number;
	t: number;
}

export function getFormula1(vars: Formula1Vars): number {
	const o = vars.o / 100;
	const s = vars.s / 100;
	const pl = vars.pl / 100;
	const pa = vars.pa / 100;
	const t = vars.t / 100;
	const wu = 47.7 / 100;

	const result =
		(15.42 * o + 19.14 * s + 32.68 * pl + 8.33 * pa + 21.51 * t) * (1 - wu) -
		2.442 * wu;

	return Number(result.toFixed(5));
}

interface Formula2Vars {
	coletaSeletiva: number;
	comercializada: number;
}

export function getFormula2(vars: Formula2Vars): number {
	const result =
		((vars.coletaSeletiva - vars.comercializada) / vars.coletaSeletiva) * 100;

	return Number(result.toFixed(5));
}
