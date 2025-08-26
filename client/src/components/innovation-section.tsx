import { Lightbulb, Wind, Bot, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const innovations = [
  {
    title: "Building an Innovation-Led Nation",
    description: "Fostering a culture of innovation that drives technological advancement and sustainable solutions across industries.",
    icon: Lightbulb,
  },
  {
    title: "Greener Wind Energy Solutions",
    description: "Pioneering renewable energy technologies that make wind power more efficient and environmentally sustainable.",
    icon: Wind,
  },
  {
    title: "AI Revolution",
    description: "Harnessing artificial intelligence and machine learning to transform traditional industries and create new opportunities.",
    icon: Bot,
  },
];

const innovationImages = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
];

export default function InnovationSection() {
  return (
  <section id="innovation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">Innovation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of what's possible through automation technologies and AI-powered solutions 
            across all our business verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <Card key={index} className="bg-white border rounded-lg shadow hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-ab-gold text-4xl mb-6">
                  <innovation.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ab-charcoal">{innovation.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{innovation.description}</p>
                <Button
                  variant="ghost"
                  className="text-ab-gold hover:text-ab-charcoal p-0 h-auto font-semibold"
                >
                  Read More <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {innovationImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Innovation ${index + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover"
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-ab-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4">
            Visit Innovation Hub
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
