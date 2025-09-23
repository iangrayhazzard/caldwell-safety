"use client"

import { useState } from "react"

import { Header } from "@/components/header"

export default function NewsPage() {
	const [showHeader] = useState(true)

	return (
		<>
			<Header showHeader={showHeader} />
			<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
				<div className="px-6 pt-32 pb-16">
					<div className="mx-auto max-w-7xl">
						{/* Page Title */}
						<h1 className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl">
							News & Media
						</h1>
						<p className="mx-auto mb-12 max-w-3xl text-center text-lg text-balance text-gray-600">
							Stay informed with the latest news and updates from
							the Caldwell Foundation for Public Safety
						</p>

						{/* Video Grid */}
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
								{/* Video Embed Container */}
								<div className="relative aspect-video w-full bg-gray-100">
									<div className="absolute inset-0">
										<div
											style={{
												position: "relative",
												paddingBottom: "56.25%",
												height: 0,
											}}
										>
											<iframe
												src="https://video.foxnews.com/v/video-embed.html?video_id=6379830054112"
												title="Gianno Caldwell sounds off on Chicago's elected officials over handling of crime"
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
												}}
												allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
												allowFullScreen
												referrerPolicy="no-referrer-when-downgrade"
											/>
										</div>
									</div>
								</div>

								{/* Video Title */}
								<div className="p-6">
									{/* Fox News Tag */}
									<div className="mb-3">
										<span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
											FOX NEWS
										</span>
									</div>

									<h3 className="line-clamp-3 text-xl leading-tight font-bold text-gray-900">
										Gianno Caldwell sounds off on Chicago's
										elected officials over handling of crime
									</h3>
									<div className="mt-3 flex items-center text-sm text-gray-500">
										<span>Fox News @ Night</span>
										<span className="mx-2">•</span>
										<span>September 19, 2025</span>
									</div>
								</div>
							</div>
						</div>

						{/* Placeholder for when more videos are added */}
						<div className="mt-12 text-center">
							<p className="text-lg text-gray-500">
								More news and media content coming soon...
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
