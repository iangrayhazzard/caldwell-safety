import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Caldwell Foundation for Public Safety",
	description:
		"At the Caldwell Foundation for Public Safety, we believe that safe communities start with public safety. We are working to create a more secure America through crime prevention, public safety initiatives, and victim support.",
	keywords: [
		"public safety",
		"crime prevention",
		"victim support",
		"law enforcement",
		"mental health",
		"policy initiatives",
		"advocacy",
		"public education",
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${playfair.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
