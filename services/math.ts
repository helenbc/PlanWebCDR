interface Formula1Vars {
	o: number;
	s: number;
	pl: number;
	pa: number;
	t: number;
}

export function getFormula1(vars: Formula1Vars): number {
	return (
		(15.42 * vars.o +
			19.14 * vars.s +
			32.68 * vars.pl +
			8.33 * vars.pa +
			21.51 * vars.t) *
			(1 - 47.7) -
		2442 * 47.7
	);
}

interface Formula2Vars {
	coletaSeletiva: number;
	comercializada: number;
}

export function getFormula2(vars: Formula2Vars): number {
	return (
		((vars.coletaSeletiva - vars.comercializada) / vars.coletaSeletiva) * 100
	);
}
