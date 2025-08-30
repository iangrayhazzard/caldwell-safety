"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FacebookIcon } from "@/assets/icons/facebook"
import { InstagramIcon } from "@/assets/icons/instagram"
import { TikTokIcon } from "@/assets/icons/tiktok"
import { XIcon } from "@/assets/icons/x"
import {
	ArrowRight,
	Calendar,
	CheckCircle,
	Clock,
	Mail,
	MapPin,
	Sparkles,
	Users,
	Utensils,
	Wine,
} from "lucide-react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"

import { buttonStyles } from "@/components/ui/button"
import { Header } from "@/components/header"

const TICKET_LINK =
	"https://www.eventbrite.com/e/from-tragedy-to-action-an-evening-with-fox-news-analyst-gianno-caldwell-tickets-1583881053869"

const ticketTiers = [
	{
		name: "VIP Reception",
		price: "$250",
		label: "Limited Seats",
		time: "5:00 PM – 6:00 PM",
		features: [
			"Private meet-and-greet with Gianno Caldwell",
			"Complimentary hors d'oeuvres",
			"Complimentary two-hour open bar",
			"Priority seating at main program",
			"Exclusive VIP gift bag",
		],
		highlighted: true,
	},
	{
		name: "General Admission",
		price: "Free",
		label: "Open to All",
		time: "6:00 PM – 8:00 PM",
		features: [
			"Complimentary hors d'oeuvres",
			"Program entry included",
			"General seating",
			"Drinks available for purchase",
		],
		highlighted: false,
	},
]

export default function EventPage() {
	const { scrollY } = useScroll()
	const [showHeader, setShowHeader] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		setShowHeader(latest > window.innerHeight * 0.2)
	})

	return (
		<div className="flex min-h-screen flex-col">
			<Header showHeader={showHeader} />

			<main className="grow">
				<section
					className="from-navy-800 to-navy-900 relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br px-4 shadow-2xl"
					aria-labelledby="hero-heading"
				>
					<div className="to-navy-900/50 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
					<div className="absolute inset-0 opacity-10">
						<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239CA3AF%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
					</div>

					<div className="relative z-10 mx-auto w-full max-w-6xl py-20 text-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<h1
								id="hero-heading"
								className="mb-6 px-4 font-serif text-4xl font-bold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:px-8 lg:text-7xl"
							>
								From Tragedy to Action
							</h1>
							<p className="mx-auto mb-10 max-w-3xl px-4 text-xl leading-relaxed text-balance text-white/90 drop-shadow sm:text-2xl md:px-8">
								An Evening with Fox News Analyst Gianno Caldwell
							</p>

							<motion.div
								className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
									<Calendar className="text-accent h-6 w-6 shrink-0" />
									<div className="text-left">
										<span className="block text-sm text-white/70">
											Wednesday
										</span>
										<span className="text-lg font-semibold text-white">
											September 24, 2025
										</span>
									</div>
								</div>
								<div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
									<Clock className="text-accent h-6 w-6 shrink-0" />
									<div className="text-left">
										<span className="block text-sm text-white/70">
											VIP: 5:00 PM
										</span>
										<span className="text-lg font-semibold text-white">
											6:00 PM - 8:00 PM
										</span>
									</div>
								</div>
								<div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
									<MapPin className="text-accent h-6 w-6 shrink-0" />
									<div className="text-left">
										<span className="block text-sm text-white/70">
											TAO Chicago
										</span>
										<span className="text-lg font-semibold text-white">
											632 N Dearborn St
										</span>
									</div>
								</div>
							</motion.div>

							<motion.nav
								className="flex flex-col items-center justify-center gap-4 sm:flex-row"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.5 }}
							>
								<Link
									href={TICKET_LINK}
									target="_blank"
									className={buttonStyles({
										variant: "primary",
										className:
											"group px-10 py-5 text-xl font-semibold shadow-lg transition-all hover:shadow-xl",
									})}
								>
									Get Tickets Now
									<ArrowRight className="size-5 transition-all group-hover:translate-x-1" />
								</Link>
							</motion.nav>
						</motion.div>
					</div>
				</section>

				<section
					className="from-navy-50 w-full bg-gradient-to-b to-white py-20 sm:py-28"
					aria-labelledby="tickets-heading"
				>
					<div className="mx-auto max-w-7xl px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="mb-16 text-center"
						>
							<h2
								id="tickets-heading"
								className="text-navy-900 mb-4 font-serif text-4xl font-bold"
							>
								Choose Your Experience
							</h2>
							<p className="mx-auto max-w-3xl text-xl text-gray-600">
								Join us for an educational evening of
								thought-provoking discussion about public safety
								in America
							</p>
						</motion.div>

						<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
							{ticketTiers.map((tier, index) => (
								<motion.div
									key={tier.name}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className={`relative rounded-2xl ${
										tier.highlighted ?
											"from-navy-800 to-navy-900 scale-105 bg-gradient-to-br text-white shadow-2xl"
										:	"border-2 border-gray-200 bg-white"
									} flex flex-col p-8`}
								>
									<div className="mb-6">
										<h3
											className={`mb-2 text-2xl font-bold ${tier.highlighted ? "text-white" : "text-navy-900"}`}
										>
											{tier.name}
										</h3>
										<div className="flex items-baseline gap-2">
											<span
												className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-navy-900"}`}
											>
												{tier.price}
											</span>
											<span
												className={`text-sm ${tier.highlighted ? "text-white/80" : "text-gray-500"}`}
											>
												{tier.label}
											</span>
										</div>
										<div
											className={`mt-3 flex items-center gap-2 ${tier.highlighted ? "text-white/90" : "text-gray-600"}`}
										>
											<Clock className="h-4 w-4" />
											<span className="text-sm">
												{tier.time}
											</span>
										</div>
									</div>
									<ul className="mb-8 flex-grow space-y-3">
										{tier.features.map((feature) => (
											<li
												key={feature}
												className="flex items-start gap-3"
											>
												<CheckCircle
													className={`mt-0.5 h-5 w-5 shrink-0 ${tier.highlighted ? "text-accent" : "text-green-500"}`}
												/>
												<span
													className={`text-sm ${tier.highlighted ? "text-white/90" : "text-gray-600"}`}
												>
													{feature}
												</span>
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section
					className="to-navy-50 w-full bg-gradient-to-b from-white py-16 sm:py-24"
					aria-labelledby="about-heading"
				>
					<div className="mx-auto max-w-7xl px-4">
						<div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.1 }}
								transition={{ duration: 0.8 }}
								className="order-2 lg:order-1"
							>
								<h2
									id="about-heading"
									className="text-navy-900 mb-6 font-serif text-3xl font-bold"
								>
									About This Event
								</h2>
								<div className="space-y-6">
									<motion.p
										className="max-w-prose text-lg leading-relaxed text-pretty text-gray-700 sm:text-xl"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.2,
										}}
									>
										The Caldwell Foundation for Public
										Safety invites you to an unforgettable
										evening in Chicago. This educational
										event brings together community voices,
										public safety leaders, and those
										impacted by violence for a night of
										meaningful dialogue and actionable
										solutions.
									</motion.p>
									<motion.p
										className="text-lg leading-relaxed text-gray-700 sm:text-xl"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.3,
										}}
									>
										Hosted by our founder, Fox News analyst
										Gianno Caldwell, this special event
										features thought-provoking discussions
										with powerful perspectives from law
										enforcement, advocacy groups, and
										families on the front lines of America's
										public safety crisis.
									</motion.p>
									<motion.p
										className="text-lg leading-relaxed text-gray-700 sm:text-xl"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.4,
										}}
									>
										VIP guests will enjoy an exclusive
										reception with Gianno, including a
										private meet-and-greet opportunity,
										premium refreshments, and the chance to
										connect personally with others
										passionate about creating safer
										communities.
									</motion.p>
									<motion.div
										className="pt-4"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.5,
										}}
									>
										<p className="text-navy-900 mb-2 text-lg font-semibold">
											Event Location:
										</p>
										<p className="text-gray-700">
											TAO Chicago
											<br />
											632 N Dearborn St
											<br />
											Chicago, IL 60654
										</p>
									</motion.div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className="order-1 flex justify-center lg:order-2 lg:justify-end"
							>
								<div className="relative w-72 sm:w-80">
									<div className="from-navy-600/20 to-navy-800/20 absolute inset-0 rotate-3 transform rounded-xl bg-gradient-to-br"></div>
									<div className="relative overflow-hidden rounded-xl shadow-2xl">
										<Image
											src="/gianno.jpg"
											alt="Gianno Caldwell"
											width={320}
											height={480}
											className="h-auto w-full object-cover"
											priority
										/>
										<div className="from-navy-900/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
										<div className="absolute right-0 bottom-0 left-0 p-6 text-white">
											<p className="mb-1 font-serif text-2xl font-bold">
												Gianno Caldwell
											</p>
											<p className="text-base opacity-90">
												Fox News Analyst & Founder
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				<section
					className="from-navy-800 to-navy-900 relative w-full overflow-hidden bg-gradient-to-br py-20 text-white sm:py-32"
					aria-labelledby="cta-heading"
				>
					<div className="absolute inset-0 opacity-10">
						<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239CA3AF%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
					</div>
					<motion.div
						className="relative z-10 mx-auto max-w-5xl px-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2
							id="cta-heading"
							className="mb-8 font-serif text-4xl font-bold"
						>
							Join Us for a Great Night
						</h2>
						<p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-balance text-white/90 sm:text-2xl">
							Let's come together for an evening of
							thought-provoking discussion and take meaningful
							steps toward a safer, more just America.
						</p>
						<motion.div
							className="mb-12 space-y-4"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							<p className="text-2xl font-medium text-white">
								All proceeds benefit the Caldwell Foundation for
								Public Safety
							</p>
							<p className="text-lg text-white/70">
								A 501(c)(3) nonprofit working to advance
								justice, strengthen public safety, and empower
								communities.
							</p>
							<p className="mt-6 text-base text-white/60">
								General admission is free • Light refreshments
								included
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							<Link
								href={TICKET_LINK}
								target="_blank"
								className={buttonStyles({
									variant: "primary",
									className:
										"group transform px-12 py-6 text-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl",
								})}
							>
								Reserve Your Tickets Now
								<ArrowRight className="size-6 transition-all group-hover:translate-x-2" />
							</Link>
						</motion.div>
					</motion.div>
				</section>
			</main>

			<footer className="from-navy-50 to-navy-100 text-navy-800 w-full bg-gradient-to-b py-12 sm:py-16">
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
								Your support helps us create safer communities
								and advance justice across America.
							</p>
						</div>
					</div>

					<div className="border-navy-600/15 mt-8 border-t pt-6">
						<p className="text-navy-800/70 text-center text-sm">
							© {new Date().getFullYear()} Caldwell Foundation
							for Public Safety. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
