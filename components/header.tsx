"use client"

import Link from "next/link"
import { Logo } from "@/assets/logos/logo"
import { InfoIcon } from "lucide-react"
import { motion } from "motion/react"

import { buttonStyles } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

const DONATE_LINK =
	"https://secure.anedot.com/caldwell-foundation-for-public-safety-2f3096e4-8fb9-4e46-b849-1ef0f052a2db/1f0997ee-e3b2-4b2c-a78b-702a7d51350c"

export const DONATION_TOOLTIP_TEXT =
	"The Caldwell Foundation for Public Safety is a Florida nonprofit " +
	"corporation that is a tax-exempt charitable organization under Section " +
	"501(c)(3) of the Internal Revenue Code. Contributions to the Caldwell Foundation " +
	"for Public Safety are tax-deductible under Section 170 of the Internal " +
	"Revenue Code. Donors are advised to consult with their tax advisors " +
	"regarding the deductibility of their contributions."

export const DonateButton = ({ className = "" }) => (
	<>
		Donate
		<div className="ml-0.5 inline-flex cursor-help items-center">
			<Tooltip>
				<TooltipTrigger asChild>
					<InfoIcon className="size-4" />
				</TooltipTrigger>
				<TooltipContent className="max-w-xs text-xs">
					{DONATION_TOOLTIP_TEXT}
				</TooltipContent>
			</Tooltip>
		</div>
	</>
)

interface HeaderProps {
	showHeader: boolean
}

export function Header({ showHeader }: HeaderProps) {
	return (
		<motion.header
			initial={{ y: -96 }}
			animate={{ y: showHeader ? 0 : -96 }}
			transition={{ duration: 0.3 }}
			className="bg-navy-900/80 fixed top-0 right-0 left-0 z-50 h-24 shadow-lg backdrop-blur-sm sm:h-24"
		>
			<nav className="mx-auto flex h-full max-w-6xl items-center justify-between pr-6">
				<Logo className="h-full w-auto text-white" />
				<div className="flex items-center gap-3">
					<Link
						href="https://caldwellinstitute.org"
						className={buttonStyles({
							variant: "secondary",
							className: "px-5",
						})}
					>
						The Institute
					</Link>
					<TooltipProvider>
						<Link
							href={DONATE_LINK}
							target="_blank"
							className={buttonStyles({
								variant: "primary",
								className: "px-5",
							})}
						>
							<DonateButton />
						</Link>
					</TooltipProvider>
				</div>
			</nav>
		</motion.header>
	)
}
