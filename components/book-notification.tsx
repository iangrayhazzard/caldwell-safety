import Image from "next/image"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

const BOOK_LINK =
	"https://www.harpercollins.com/products/the-day-my-brother-was-murdered-gianno-caldwell"

interface BookNotificationProps {
	showHeader?: boolean
}

export function BookNotification({
	showHeader = false,
}: BookNotificationProps) {
	return (
		<Link
			href={BOOK_LINK}
			target="_blank"
			className="group fixed left-4 z-40 sm:left-8"
			style={{
				top: showHeader ? "7rem" : "6rem",
				transition: "top 0.3s ease",
			}}
		>
			<motion.div
				whileHover={{ scale: 1.02 }}
				className="bg-navy-900/95 hover:bg-navy-900 flex items-center rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl"
			>
				<article className="flex-1 p-4">
					<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/90">
						<div className="relative inline-block size-2">
							{/* Ripple animation variants */}
							{/* The first ripple starts at t=0, the second at t=0.75s */}
							{/* This avoids both being visible at the same time on reset */}
							{[0, 2].map((delay, i) => (
								<motion.span
									key={i}
									className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300"
									initial={{ scale: 1, opacity: 1 }}
									animate={{
										scale: [1, 3, 1],
										opacity: [1, 0, 0],
									}}
									transition={{
										duration: 2,
										delay,
										repeat: Infinity,
										repeatType: "loop",
										ease: "easeOut",
										times: [0, 0.8, 1],
									}}
								/>
							))}
							<div className="size-2 rounded-full bg-blue-300" />
						</div>
						Available for preorder now
					</div>
					<header className="mb-2 text-white/90">
						<h2 className="font-sans font-bold">
							The Day My Brother Was Murdered
						</h2>
						<p className="text-sm font-light italic">
							My Journey Through America's
							<br />
							Violent Crime Crisis
						</p>
					</header>
					<address className="text-background/80 mb-2 text-xs font-medium not-italic">
						by Gianno Caldwell
					</address>
				</article>
				<figure className="size-36">
					<Image
						src="/day-my-brother_1.png"
						alt="Book Cover"
						width={2000}
						height={2000}
						className="object-contain"
					/>
				</figure>
			</motion.div>
		</Link>
	)
}
