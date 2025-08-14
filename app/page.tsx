"use client"

import { useState } from "react"
import Link from "next/link"
import { FacebookIcon } from "@/assets/icons/facebook"
import { InstagramIcon } from "@/assets/icons/instagram"
import { TikTokIcon } from "@/assets/icons/tiktok"
import { XIcon } from "@/assets/icons/x"
import { LogoIcon } from "@/assets/logos/icon"
import {
	ArrowRight,
	Calendar,
	GavelIcon,
	GraduationCapIcon,
	HeartIcon,
	InfoIcon,
	Mail,
	MapPin,
	ScrollTextIcon,
} from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { Link as ScrollLink } from "react-scroll"

import { buttonStyles } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { BookNotification } from "@/components/book-notification"
import {
	DonateButton,
	DONATION_TOOLTIP_TEXT,
	Header,
} from "@/components/header"

const DONATE_LINK =
	"https://secure.anedot.com/caldwell-foundation-for-public-safety-2f3096e4-8fb9-4e46-b849-1ef0f052a2db/1f0997ee-e3b2-4b2c-a78b-702a7d51350c"

export default function LandingPage() {
	const { scrollY } = useScroll()
	const [showHeader, setShowHeader] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		// Show header after scrolling past 20vh
		setShowHeader(latest > window.innerHeight * 0.2)
	})

	return (
		<div className="flex min-h-screen flex-col">
			<Header showHeader={showHeader} />

			<main className="grow">
				<section
					className="from-navy-800 to-navy-900 relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br px-4 shadow-2xl"
					aria-labelledby="hero-heading"
				>
					<div className="relative z-10 mx-auto w-full max-w-6xl py-16 text-center sm:py-24">
						<LogoIcon className="mx-auto mb-8 w-28 text-white drop-shadow-2xl sm:mb-14 sm:w-44 md:w-64" />
						<h1
							id="hero-heading"
							className="mb-5 px-4 font-serif text-3xl font-bold tracking-tight text-balance text-white/95 drop-shadow-lg sm:mb-8 sm:text-5xl md:text-6xl lg:px-8"
						>
							Welcome to the Caldwell Foundation for Public Safety
						</h1>
						<p className="mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-pretty text-white/80 drop-shadow sm:mb-12 sm:px-6 sm:text-xl md:px-8">
							At the Caldwell Foundation for Public Safety, we
							believe that safe communities start with public
							safety. We are working to create a more secure
							America through crime prevention, public safety
							initiatives, and victim support.
						</p>
						<nav className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
							<Link
								href="https://caldwellinstitute.org"
								className={buttonStyles({
									variant: "secondary",
									className: "px-5",
								})}
							>
								The Institute
							</Link>
							<ScrollLink
								to="efforts"
								smooth={true}
								offset={-96}
								duration={(distance) =>
									Math.min(500, Math.max(300, distance * 0.5))
								}
								className={buttonStyles({
									variant: "secondary",
									className: "group cursor-pointer",
								})}
							>
								Learn More
								<ArrowRight className="size-4 transition-all group-hover:translate-x-1" />
							</ScrollLink>
						</nav>
					</div>
				</section>

				<section
					className="relative w-full overflow-hidden bg-white py-12 sm:py-24"
					aria-labelledby="event-heading"
				>
					<div className="mx-auto max-w-6xl px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6 }}
							className="from-navy-800 to-navy-900 rounded-3xl bg-gradient-to-br p-8 text-white shadow-2xl sm:p-12 md:p-16"
						>
							<div className="text-center">
								<span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-accent bg-white/10 px-4 py-1.5 rounded-full">
									Upcoming Event
								</span>
								<h2
									id="event-heading"
									className="mb-4 font-serif text-2xl font-semibold sm:text-4xl"
								>
									From Tragedy to Action
								</h2>
								<p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-balance text-white/90 sm:text-lg">
									An Evening with Fox News Analyst Gianno Caldwell
								</p>
								<div className="mb-8 flex flex-col items-center justify-center gap-4 text-white/80 sm:flex-row sm:gap-8">
									<div className="flex items-center gap-2">
										<Calendar className="h-5 w-5" />
										<span>Thursday, September 25, 2025</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="h-5 w-5" />
										<span>TAO Chicago</span>
									</div>
								</div>
								<p className="mb-8 text-white/70">
									Tickets from $50 • Includes refreshments
								</p>
								<Link
									href="/event"
									className={buttonStyles({
										variant: "primary",
										className: "group",
									})}
								>
									View Event Details
									<ArrowRight className="size-4 transition-all group-hover:translate-x-1" />
								</Link>
							</div>
						</motion.div>
					</div>
				</section>

				<section
					id="efforts"
					className="from-navy-50 to-navy-100 w-full bg-gradient-to-br py-12 sm:py-24"
					aria-labelledby="efforts-heading"
				>
					<div className="mx-auto max-w-6xl px-4">
						<h2
							id="efforts-heading"
							className="text-navy-800 mb-10 text-center font-serif text-2xl font-semibold sm:mb-16 sm:text-4xl"
						>
							Our Efforts
						</h2>
						<motion.ul
							className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:gap-12"
							role="list"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={{
								visible: {
									transition: {
										staggerChildren: 0.1,
									},
								},
							}}
						>
							<motion.li
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className="rounded-2xl bg-white p-5 shadow-md sm:p-8"
							>
								<figure className="bg-navy-50)sm:mb-6 mb-4 flex h-10 w-10 items-center justify-center rounded-full sm:h-16 sm:w-16">
									<GavelIcon className="text-navy-600 h-5 w-5 sm:h-8 sm:w-8" />
								</figure>
								<h3 className="text-navy-700 mb-2 text-lg font-semibold sm:mb-3 sm:text-2xl">
									Advocacy
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Advocating for stronger law and order
									policies that protect our communities and
									support law enforcement.
								</p>
							</motion.li>

							<motion.li
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className="rounded-2xl bg-white p-5 shadow-md sm:p-8"
							>
								<figure className="bg-navy-50)sm:mb-6 mb-4 flex h-10 w-10 items-center justify-center rounded-full sm:h-16 sm:w-16">
									<HeartIcon className="text-navy-600 h-5 w-5 sm:h-8 sm:w-8" />
								</figure>
								<h3 className="text-navy-700 mb-2 text-lg font-semibold sm:mb-3 sm:text-2xl">
									Mental Health Support
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Providing mental health resources and
									support for victims of violent crime through
									counseling and recovery programs.
								</p>
							</motion.li>

							<motion.li
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className="rounded-2xl bg-white p-5 shadow-md sm:p-8"
							>
								<figure className="bg-navy-50)sm:mb-6 mb-4 flex h-10 w-10 items-center justify-center rounded-full sm:h-16 sm:w-16">
									<ScrollTextIcon className="text-navy-600 h-5 w-5 sm:h-8 sm:w-8" />
								</figure>
								<h3 className="text-navy-700 mb-2 text-lg font-semibold sm:mb-3 sm:text-2xl">
									Policy Initiatives
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Partnering with lawmakers and organizations
									to implement evidence-based policy
									initiatives that enhance public safety.
								</p>
							</motion.li>

							<motion.li
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className="rounded-2xl bg-white p-5 shadow-md sm:p-8"
							>
								<figure className="bg-navy-50)sm:mb-6 mb-4 flex h-10 w-10 items-center justify-center rounded-full sm:h-16 sm:w-16">
									<GraduationCapIcon className="text-navy-600 h-5 w-5 sm:h-8 sm:w-8" />
								</figure>
								<h3 className="text-navy-700 mb-2 text-lg font-semibold sm:mb-3 sm:text-2xl">
									Public Education
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Educating the public on strategies to
									prevent crime, promote justice, and build
									safer communities for everyone.
								</p>
							</motion.li>
						</motion.ul>
					</div>
				</section>

				<section
					className="from-navy-800 to-navy-900 relative w-full overflow-hidden bg-gradient-to-br py-12 text-white sm:py-24"
					aria-labelledby="coming-soon-heading"
				>
					<div className="bg-texture absolute inset-0 opacity-5"></div>
					<div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
						<h2
							id="coming-soon-heading"
							className="mb-5 font-serif text-2xl font-semibold sm:mb-8 sm:text-4xl"
						>
							Coming Soon
						</h2>
						<p className="mx-auto mb-5 max-w-3xl text-base leading-relaxed text-balance text-white/90 sm:mb-8 sm:text-xl">
							Stay tuned for updates on our work and policies.
							Visit again soon to find out how you can support our
							mission!
						</p>
					</div>
				</section>
			</main>

			<footer
				id="contact"
				className="from-navy-50 to-navy-100 text-navy-800 w-full bg-gradient-to-b py-12 sm:py-16"
			>
				<div className="mx-auto max-w-6xl px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="flex flex-col space-y-4">
							<h3 className="text-lg font-semibold">Contact</h3>
							<a
								href="mailto:info@caldwellsafety.org"
								className="hover:text-navy-600 text-navy-800/90 inline-flex items-center gap-2 text-sm transition-colors"
							>
								<Mail className="h-4 w-4" />
								info@caldwellsafety.org
							</a>
						</div>

						<div className="flex flex-col space-y-4">
							<h3 className="text-lg font-semibold">Follow</h3>
							<div className="flex items-center gap-4">
								<a
									href="https://www.facebook.com/caldwellgianno"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-navy-600 hover:bg-navy-200/50 text-navy-800/90 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
									aria-label="Facebook"
								>
									<FacebookIcon className="size-4" />
								</a>
								<a
									href="https://www.instagram.com/GiannoCaldwell"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-navy-600 hover:bg-navy-200/50 text-navy-800/90 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
									aria-label="Instagram"
								>
									<InstagramIcon className="size-4" />
								</a>
								<a
									href="https://www.tiktok.com/@giannocaldwell"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-navy-600 hover:bg-navy-200/50 text-navy-800/90 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
									aria-label="TikTok"
								>
									<TikTokIcon className="size-4" />
								</a>
								<a
									href="https://x.com/GiannoCaldwell/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-navy-600 hover:bg-navy-200/50 text-navy-800/90 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
									aria-label="X (Twitter)"
								>
									<XIcon className="size-4" />
								</a>
							</div>
						</div>

						<div className="flex flex-col space-y-4">
							<h3 className="text-lg font-semibold">
								Support Our Mission
							</h3>
							<p className="text-navy-800/80 text-sm text-pretty">
								Your donation helps us provide critical support
								to victims of violent crime and create safer
								communities across America.
							</p>
						</div>
					</div>

					<div className="border-navy-600/15 mt-8 border-t pt-6">
						<div className="bg-navy-50/70 text-navy-800/90 mx-auto mb-4 max-w-3xl rounded-lg p-4 text-xs leading-relaxed sm:text-sm">
							<p className="text-pretty">
								{DONATION_TOOLTIP_TEXT}
							</p>
						</div>
						<p className="text-navy-800/70 text-center text-sm">
							© {new Date().getFullYear()} Caldwell Foundation
							for Public Safety. All rights reserved.
						</p>
					</div>
				</div>
				<BookNotification />
			</footer>
		</div>
	)
}
