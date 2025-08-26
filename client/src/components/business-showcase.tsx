import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const businesses = [
	{
		title: "Corporate Uniforms",
		description:
			"Professional uniform solutions with modern design and sustainable manufacturing processes.",
		image: "/corporate-uniforms.jpg",
		icon: "👔",
	},
	{
		title: "Corporate Workwear",
		description:
			"Premium corporate gifts and business solutions for meaningful professional relationships.",
		image: "/Corporate-uniform.png",
		icon: "🎁",
		cta: {
			label: "Explore Catalogue",
			onClick: () => {
				const section = document.getElementById('businesses');
				if (section) {
					const cards = section.querySelectorAll('.group');
					if (cards.length > 3) {
						const targetCard = cards[3] as HTMLElement;
						const parent = targetCard.parentElement as HTMLElement;
						if (parent) {
							parent.scrollIntoView({ behavior: 'smooth', block: 'center' });
						} else {
							targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
						}
					}
				}
			},
		},
	},
	{
		title: "Bespoke Solutions",
		description:
			"Direct-to-consumer brand development with innovative digital marketing and automation tools.",
		image:
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		icon: "🛍️",
	},
	{
		title: "Customised Apparel",
		description:
			"AI-powered graphics creation and A/B testing tools for busy professionals.",
		image: "/customised_apparel.png",
		icon: "📱",
		cta: {
			label: "Explore Catalogue",
			onClick: () => {
				if (customisedApparelRef.current) {
					(customisedApparelRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			},
		},
	},
	{
		title: "Customised Swag",
		description:
			"Comprehensive analytics solutions with real-time insights and performance tracking.",
		image: "/customised_swag.png",
		icon: "📊",
	},
	{
		title: "Premium & Festive Gifts",
		description:
			"Cutting-edge research and development for next-generation business solutions.",
		image: "/gifts1.png",
		icon: "🔬",
	},
];

export default function BusinessShowcase() {
	const customerLogos = [
		"/Cust1.png",
		"/Cust2.png",
		"/Cust3.png",
		"/Cust4.png",
		"/Cust5.png",
		"/Cust6.png",
		"/Cust7.png",
		"/Cust8.png",
		"/Cust9.png",
		"/Cust10.png",
		"/Cust11.png",
	];
	const [startIdx, setStartIdx] = useState(0);
	const visibleCount = 6;
	const customisedApparelRef = useRef<HTMLDivElement>(null);

	// Handler for Explore Catalogue button
	const handleExploreCatalogue = () => {
		if (customisedApparelRef.current) {
			customisedApparelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setStartIdx((prev) => (prev + 1) % customerLogos.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [customerLogos.length]);

	const getVisibleLogos = () => {
		const endIdx = startIdx + visibleCount;
		if (endIdx <= customerLogos.length) {
			return customerLogos.slice(startIdx, endIdx);
		} else {
			return [
				...customerLogos.slice(startIdx),
				...customerLogos.slice(0, endIdx - customerLogos.length),
			];
		}
	};

	return (
		<>
			<section id="businesses" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">
							Our Diverse Portfolio
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							With innovative technology solutions and responsible business
							practices, our businesses have grown into market leaders in a wide
							range of sectors – from automation tools to corporate solutions and
							Innovative D2C brands.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{businesses.map((business, index) => (
							<Card
								key={index}
								className="group hover:shadow-2xl transition-all duration-500 overflow-hidden"
								{...(business.title === "Customised Apparel" ? { ref: customisedApparelRef } : {})}
							>
								<div className="relative overflow-hidden">
									<img
										src={business.image}
										alt={business.title}
										className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
									/>
									<div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-lg">
										{business.icon}
									</div>
								</div>
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-ab-charcoal mb-4">
										{business.title}
									</h3>
									<p className="text-gray-600 mb-6 leading-relaxed">
										{business.description}
									</p>
									   <Button
										   variant="ghost"
										   className="text-ab-gold hover:text-ab-charcoal p-0 h-auto font-semibold"
										   onClick={business.title === "Corporate Workwear" ? handleExploreCatalogue : undefined}
									   >
										   {business.cta?.label || 'Learn More'}{' '}
										   <ArrowRight className="ml-2 w-4 h-4" />
									   </Button>
								</CardContent>
							</Card>
						))}
					</div>
					<div id="portfolio-bottom-anchor" style={{ height: 0 }} />
				</div>
									</section>







			<section className="py-12" style={{ background: 'rgb(51, 85, 139)' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-white font-sans mb-6">
							Happy Customers
						</h2>
						<p className="text-xl text-gray-200 max-w-2xl mx-auto">
							We are proud to have partnered with amazing clients who trust us for
							their business needs.
						</p>
					</div>
											<div className="flex flex-col items-center justify-center h-32 overflow-hidden">
												<div className="flex transition-transform duration-1500 ease-in-out" style={{ transform: `translateX(0)` }}>
													{getVisibleLogos().map((logo, idx) => (
														<img
															key={logo + idx}
															src={logo}
															alt={`Customer Logo ${startIdx + idx + 1}`}
															className="w-48 h-24 object-contain rounded-lg shadow-lg p-4 border mx-2 transition-transform duration-300 hover:scale-110"
															style={{ backgroundColor: 'rgb(229, 228, 226)', borderColor: 'rgb(183,205,194)', borderWidth: '1px', borderStyle: 'solid' }}
														/>
													))}
												</div>

											</div>
				</div>
			</section>
		</>
	);
}
