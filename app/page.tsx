"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoIcon } from "@/assets/logos/icon"
import { Logo } from "@/assets/logos/logo"
import {
	ArrowRight,
	GavelIcon,
	GraduationCapIcon,
	HeartIcon,
	Mail,
	ScrollTextIcon,
} from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { Link as ScrollLink } from "react-scroll"

import { buttonStyles } from "@/components/ui/button"

const DONATE_LINK =
	"https://secure.anedot.com/caldwell-foundation-for-public-safety-2f3096e4-8fb9-4e46-b849-1ef0f052a2db/1f0997ee-e3b2-4b2c-a78b-702a7d51350c"

export default function LandingPage() {
	const { scrollY } = useScroll()
	const [showHeader, setShowHeader] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		// Show header after scrolling past 40vh
		setShowHeader(latest > window.innerHeight * 0.4)
	})

	return (
		<div className="flex min-h-screen flex-col">
			<motion.header
				initial={{ y: -96 }}
				animate={{ y: showHeader ? 0 : -96 }}
				transition={{ duration: 0.3 }}
				className="bg-navy-900 fixed top-0 right-0 left-0 z-50 h-24 shadow-lg sm:h-24"
			>
				<nav className="mx-auto flex h-full max-w-6xl items-center justify-between pr-6">
					<Logo className="h-full w-auto text-white" />
					<Link
						href={DONATE_LINK}
						target="_blank"
						className={buttonStyles({ variant: "primary" })}
					>
						Donate
					</Link>
				</nav>
			</motion.header>

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
							<Link
								href={DONATE_LINK}
								target="_blank"
								className={buttonStyles({ variant: "primary" })}
							>
								Donate
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
				<div className="mx-auto max-w-6xl px-4">
					<address className="flex flex-col items-center justify-center gap-6 not-italic">
						<a
							href="mailto:info@caldwellsafety.org"
							className="hover:text-navy-600 text-navy-800/90 inline-flex items-center gap-2 text-sm transition-colors"
						>
							<Mail className="h-4 w-4" />
							info@caldwellsafety.org
						</a>

						<div className="border-navy-600/15 w-full max-w-lg border-t pt-6 text-center">
							<small className="text-sm opacity-70">
								© {new Date().getFullYear()} Caldwell
								Initiative for Public Safety. All rights
								reserved.
							</small>
						</div>
					</address>
				</div>
			</footer>
		</div>
	)
}
