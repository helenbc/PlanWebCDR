import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "PlanWebCDR",
	// Podemos definir um icone da aba do navegador
	viewport:
		"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
