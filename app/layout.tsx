import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
	title: "PlanWebCDR - Analise o potencial energético!",
	description:
		"Esta aplicação visa analisar o potencial energético dos resíduos sólidos domiciliares (RSD) de uma determinada localidade brasileira, com o objetivo de desenvolver um plano de gestão estratégico.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1.00001,
	viewportFit: "cover",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body>
				<Suspense>{children}</Suspense>
			</body>

			<ToastContainer />
		</html>
	);
}
