"use client"

import { useState } from "react"
import Link from "next/link"
import { LogoIcon } from "@/assets/logos/icon"
import { Logo } from "@/assets/logos/logo"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import {
	ArrowRight,
	GavelIcon,
	GraduationCapIcon,
	HeartIcon,
	Mail,
	ScrollTextIcon,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"

export default function LandingPage() {
	const { scrollY } = useScroll()
	const [showHeader, setShowHeader] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		// Show header after scrolling past 90vh
		setShowHeader(latest > window.innerHeight * 0.4)
	})

	return (
		<div className="flex min-h-screen flex-col">
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: showHeader ? 0 : -100 }}
				transition={{ duration: 0.3 }}
				className="fixed top-0 right-0 left-0 z-50 bg-[var(--color-navy-900)] shadow-lg"
			>
				<div className="mx-auto flex max-w-6xl items-center justify-between pr-6">
					<Logo className="h-20 w-auto text-white sm:h-24" />
					<Link
						href="#donate"
						className={buttonVariants({
							variant: "white",
							className: "text-sm sm:text-base",
						})}
					>
						Donate
					</Link>
				</div>
			</motion.header>

			<main className="grow">
				<section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-navy-800)] to-[var(--color-navy-900)] px-4 shadow-2xl">
					<div className="relative z-10 mx-auto w-full max-w-6xl py-16 text-center sm:py-24">
						<LogoIcon className="mx-auto mb-8 w-28 text-white drop-shadow-2xl sm:mb-14 sm:w-44 md:w-64" />
						<h1 className="mb-5 px-4 font-serif text-3xl font-bold tracking-tight text-balance text-white/95 drop-shadow-lg sm:mb-8 sm:text-5xl md:text-6xl lg:px-8">
							Welcome to the Caldwell Foundation for Public Safety
						</h1>
						<p className="mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-white/80 drop-shadow sm:mb-12 sm:px-6 sm:text-xl md:px-8">
							At the Caldwell Foundation for Public Safety, we
							believe that safe communities start with public
							safety. We are working to create a more secure
							America through crime prevention, public safety
							initiatives, and victim support.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link
								href="#donate"
								className={buttonVariants({
									className:
										"relative w-full bg-white/95 text-sm font-medium text-[var(--color-navy-800)] shadow-lg backdrop-blur-sm transition-all duration-300 after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:shadow-[0_0_30px_rgba(255,255,255,0.2)] after:transition-opacity hover:scale-[1.02] hover:bg-white hover:shadow-xl hover:ring-2 hover:ring-white/20 hover:after:opacity-100 active:scale-[0.98] sm:w-auto sm:text-base",
								})}
							>
								Donate
							</Link>
							<Link
								href="#efforts"
								scroll={true}
								className={buttonVariants({
									className:
										"group relative w-full bg-white/95 text-sm font-medium text-[var(--color-navy-800)] shadow-lg backdrop-blur-sm transition-all duration-300 after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:shadow-[0_0_30px_rgba(255,255,255,0.2)] after:transition-opacity hover:scale-[1.02] hover:bg-white hover:shadow-xl hover:ring-2 hover:ring-white/20 hover:after:opacity-100 active:scale-[0.98] sm:w-auto sm:text-base",
								})}
							>
								Learn More
								<ArrowRight />
							</Link>
						</div>
					</div>
				</section>

				<section
					id="efforts"
					className="w-full bg-gradient-to-br from-[var(--color-navy-50)] to-[var(--color-navy-100)] py-12 sm:py-24"
				>
					<div className="mx-auto max-w-6xl px-4">
						<h2 className="mb-10 text-center font-serif text-2xl font-semibold text-[var(--color-navy-800)] sm:mb-16 sm:text-4xl">
							Our Efforts
						</h2>
						<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:gap-12">
							<div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-navy-50)] sm:mb-6 sm:h-16 sm:w-16">
									<GavelIcon className="h-5 w-5 text-[var(--color-navy-600)] sm:h-8 sm:w-8" />
								</div>
								<h3 className="mb-2 text-lg font-semibold text-[var(--color-navy-700)] sm:mb-3 sm:text-2xl">
									Advocacy
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Advocating for stronger law and order
									policies that protect our communities and
									support law enforcement.
								</p>
							</div>

							<div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-navy-50)] sm:mb-6 sm:h-16 sm:w-16">
									<HeartIcon className="h-5 w-5 text-[var(--color-navy-600)] sm:h-8 sm:w-8" />
								</div>
								<h3 className="mb-2 text-lg font-semibold text-[var(--color-navy-700)] sm:mb-3 sm:text-2xl">
									Mental Health Support
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Providing mental health resources and
									support for victims of violent crime through
									counseling and recovery programs.
								</p>
							</div>

							<div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-navy-50)] sm:mb-6 sm:h-16 sm:w-16">
									<ScrollTextIcon className="h-5 w-5 text-[var(--color-navy-600)] sm:h-8 sm:w-8" />
								</div>
								<h3 className="mb-2 text-lg font-semibold text-[var(--color-navy-700)] sm:mb-3 sm:text-2xl">
									Policy Initiatives
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Partnering with lawmakers and organizations
									to implement evidence-based policy
									initiatives that enhance public safety.
								</p>
							</div>

							<div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-navy-50)] sm:mb-6 sm:h-16 sm:w-16">
									<GraduationCapIcon className="h-5 w-5 text-[var(--color-navy-600)] sm:h-8 sm:w-8" />
								</div>
								<h3 className="mb-2 text-lg font-semibold text-[var(--color-navy-700)] sm:mb-3 sm:text-2xl">
									Public Education
								</h3>
								<p className="text-sm leading-relaxed text-gray-500 sm:text-base">
									Educating the public on strategies to
									prevent crime, promote justice, and build
									safer communities for everyone.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="relative w-full overflow-hidden bg-gradient-to-br from-[var(--color-navy-800)] to-[var(--color-navy-900)] py-12 text-white sm:py-24">
					<div className="bg-texture absolute inset-0 opacity-5"></div>
					<div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
						<h2 className="mb-5 font-serif text-2xl font-semibold sm:mb-8 sm:text-4xl">
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
				className="w-full bg-gradient-to-b from-gray-100 to-white py-6 sm:py-12"
			>
				<div className="mx-auto max-w-6xl px-4 text-center">
					<p className="mb-2 text-sm text-gray-600 sm:mb-4 sm:text-lg">
						For inquiries, please contact us at:
					</p>
					<a
						href="mailto:info@caldwellsafety.org"
						className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-navy-600)] transition-colors duration-300 hover:text-[var(--color-navy-800)] sm:text-lg"
					>
						<Mail className="h-4 w-4 sm:h-5 sm:w-5" />
						info@caldwellsafety.org
					</a>
				</div>
			</footer>
		</div>
	)
}
