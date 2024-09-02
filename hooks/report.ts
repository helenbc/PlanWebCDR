import * as mathService from "@/services/math";
import * as pdfService from "@/services/pdf";
import { useQueryState } from "next-usequerystate";
import { toast } from "react-toastify";

export function useReport() {
	const [cityName, setCityName] = useQueryState("cityName");
	const [cityPopulation, setCityPopulation] = useQueryState("cityPopulation");
	const [annualGeneratedWaste, setAnnualGeneratedWaste] = useQueryState(
		"annualGeneratedWaste",
	);
	const [perCapitaWasteGeneration, setPerCapitaWasteGeneration] = useQueryState(
		"perCapitaWasteGeneration",
	);

	const [fracaoOrganica, setFracaoOrganica] = useQueryState("fracaoOrganica");
	const [sanitarios, setSanitarios] = useQueryState("sanitarios");
	const [plasticos, setPlasticos] = useQueryState("plasticos");
	const [papeis, setPapeis] = useQueryState("papeis");
	const [texteis, setTexteis] = useQueryState("texteis");

	const [coletaSeletiva, setColetaSeletiva] = useQueryState("coletaSeletiva");
	const [comercializada, setComercializada] = useQueryState("comercializada");

	function generatePDF() {
		if (
			!cityName ||
			!cityPopulation ||
			!annualGeneratedWaste ||
			!perCapitaWasteGeneration ||
			!fracaoOrganica ||
			!sanitarios ||
			!plasticos ||
			!papeis ||
			!texteis ||
			!coletaSeletiva ||
			!comercializada
		) {
			toast.error("Atenção! Preencha todos os campos!");
			return;
		}

		const formula1 = mathService.getFormula1({
			o: Number(fracaoOrganica),
			s: Number(sanitarios),
			pl: Number(plasticos),
			pa: Number(papeis),
			t: Number(texteis),
		});

		const formula2 = mathService.getFormula2({
			coletaSeletiva: Number(coletaSeletiva),
			comercializada: Number(comercializada),
		});

		pdfService.generatePdf({
			cityName,
			cityPopulation: Number(cityPopulation),
			annualGeneratedWaste: Number(annualGeneratedWaste),
			perCapitaWasteGeneration: Number(perCapitaWasteGeneration),
			formula1,
			formula2,
		});

		toast.success("Relatório gerado com sucesso!");
	}

	return {
		cityName,
		cityPopulation,
		annualGeneratedWaste,
		perCapitaWasteGeneration,
		fracaoOrganica,
		sanitarios,
		plasticos,
		papeis,
		texteis,
		coletaSeletiva,
		comercializada,
		setCityName,
		setCityPopulation,
		setAnnualGeneratedWaste,
		setPerCapitaWasteGeneration,
		setFracaoOrganica,
		setSanitarios,
		setPlasticos,
		setPapeis,
		setTexteis,
		setColetaSeletiva,
		setComercializada,

		generatePDF,
	};
}
