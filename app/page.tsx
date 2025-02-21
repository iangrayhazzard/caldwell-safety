import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="bg-linear-to-b from-white to-gray-100 shadow-md">
				<div className="container mx-auto px-4 py-8">
					<Image
						src="/placeholder.svg?height=200&width=767"
						alt="Caldwell Foundation for Public Safety Logo"
						width={767}
						height={200}
						className="mx-auto h-auto w-full max-w-4xl"
					/>
				</div>
			</header>

			<main className="grow">
				<section className="from-navy-700 to-navy-900 relative overflow-hidden bg-linear-to-br py-20 text-white">
					<div className="bg-texture absolute inset-0 opacity-10"></div>
					<div className="relative z-10 container mx-auto px-4 text-center">
						<h1 className="mb-6 text-4xl font-bold">
							Welcome to the Caldwell Foundation for Public Safety
						</h1>
						<p className="mx-auto mb-8 max-w-3xl text-xl">
							We are working to create a more secure America
							through crime prevention, public safety initiatives,
							and victim support.
						</p>
						<Button className="text-navy-800 bg-yellow-500 transition-colors duration-300 hover:bg-yellow-600">
							Donate Now
						</Button>
					</div>
				</section>

				<section
					id="mission"
					className="bg-linear-to-b from-gray-100 to-white py-16"
				>
					<div className="container mx-auto px-4">
						<h2 className="text-navy-800 mb-6 text-center text-3xl font-semibold">
							Our Mission
						</h2>
						<p className="mx-auto max-w-4xl text-center text-lg text-gray-700">
							At the Caldwell Foundation for Public Safety, we
							believe that safe communities start with public
							safety. We partner with communities to support
							individuals and families affected by violence.
							Through education, outreach, and collaboration, we
							provide resources and solutions to promote healing
							and safety.
						</p>
					</div>
				</section>

				<section
					id="efforts"
					className="from-navy-50 to-navy-100 bg-linear-to-br py-16"
				>
					<div className="container mx-auto px-4">
						<h2 className="text-navy-800 mb-10 text-center text-3xl font-semibold">
							Our Efforts
						</h2>
						<div className="grid gap-8 md:grid-cols-2">
							<div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
								<h3 className="text-navy-700 mb-4 text-xl font-semibold">
									Advocacy
								</h3>
								<p className="text-gray-600">
									Advocating for stronger law and order
									policies to enhance public safety.
								</p>
							</div>
							<div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
								<h3 className="text-navy-700 mb-4 text-xl font-semibold">
									Mental Health Support
								</h3>
								<p className="text-gray-600">
									Providing mental health resources and
									support for victims of violent crime.
								</p>
							</div>
							<div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
								<h3 className="text-navy-700 mb-4 text-xl font-semibold">
									Policy Initiatives
								</h3>
								<p className="text-gray-600">
									Partnering with lawmakers and organizations
									to implement effective policy initiatives.
								</p>
							</div>
							<div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
								<h3 className="text-navy-700 mb-4 text-xl font-semibold">
									Public Education
								</h3>
								<p className="text-gray-600">
									Educating the public on strategies to
									prevent crime and promote justice.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="from-navy-700 to-navy-900 relative overflow-hidden bg-linear-to-br py-16 text-white">
					<div className="bg-texture absolute inset-0 opacity-10"></div>
					<div className="relative z-10 container mx-auto px-4 text-center">
						<h2 className="mb-6 text-3xl font-semibold">
							Coming Soon
						</h2>
						<p className="mb-8 text-lg">
							Stay tuned for updates on our work and policies.
							Visit again soon to find out how you can support our
							mission!
						</p>
						<Button
							variant="outline"
							className="hover:text-navy-800 border-white text-white transition-colors duration-300 hover:bg-white"
						>
							Learn More <ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</section>
			</main>

			<footer
				id="contact"
				className="bg-linear-to-b from-gray-100 to-white py-8"
			>
				<div className="container mx-auto px-4 text-center">
					<p className="mb-4 text-gray-600">
						For inquiries, please contact us at:
					</p>
					<a
						href="mailto:info@caldwellsafety.org"
						className="text-navy-600 hover:text-navy-800 flex items-center justify-center transition-colors duration-300"
					>
						<Mail className="mr-2 h-5 w-5" />
						info@caldwellsafety.org
					</a>
				</div>
			</footer>
		</div>
	)
}
