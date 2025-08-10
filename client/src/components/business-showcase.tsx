import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const businesses = [
  {
    title: "Corporate Uniforms",
    description: "Professional uniform solutions with modern design and sustainable manufacturing processes.",
    image: "/corporate-uniforms.jpg",
    icon: "👔",
  },
  {
    title: "Corporate Gifting",
    description: "Premium corporate gifts and business solutions for meaningful professional relationships.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "🎁",
  },
  {
    title: "D2C Brand Solutions",
    description: "Direct-to-consumer brand development with innovative digital marketing and automation tools.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "🛍️",
  },
  {
    title: "Social Media Automation",
    description: "AI-powered graphics creation and A/B testing tools for busy professionals.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "📱",
  },
  {
    title: "Business Analytics",
    description: "Comprehensive analytics solutions with real-time insights and performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "📊",
  },
  {
    title: "Innovation Lab",
    description: "Cutting-edge research and development for next-generation business solutions.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: "🔬",
  },
];

export default function BusinessShowcase() {
  return (
    <section id="businesses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">Our Diverse Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With innovative technology solutions and responsible business practices, our businesses have grown into market leaders 
            in a wide range of sectors – from automation tools to corporate solutions and innovative D2C brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses.map((business, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
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
                <h3 className="text-2xl font-bold text-ab-charcoal mb-4">{business.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{business.description}</p>
                <Button
                  variant="ghost"
                  className="text-ab-maroon hover:text-ab-maroon-dark p-0 h-auto font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-ab-maroon hover:bg-ab-maroon-dark text-white px-8 py-4">
            View All Businesses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
