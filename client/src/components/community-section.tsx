import { GraduationCap, Heart, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const impactAreas = [
  {
    title: "Education",
    description: "Empowering communities through quality education and skill development programs.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description: "Providing accessible healthcare services and wellness programs for underserved communities.",
    icon: Heart,
  },
  {
    title: "Environment",
    description: "Leading sustainable practices and environmental conservation initiatives globally.",
    icon: Leaf,
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our purpose in action. At Aditya Birla Group, we believe that success goes beyond financial progress. 
            It encompasses our shared responsibility to enable a sustainable way of life for all sections of society.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Young girl in astronaut costume representing future education"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-ab-charcoal mb-6">Reshaping the Future Through Education</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Education is a powerful catalyst for change, and Aditya Birla Group is committed to harnessing 
              its transformative potential. Through our comprehensive educational initiatives, we're building 
              a foundation for sustainable development and empowering communities worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our programs span from primary education to higher learning, skill development, and digital literacy, 
              ensuring that knowledge reaches every corner of society.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ab-maroon mb-2">500+</div>
                <div className="text-gray-600">Schools Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ab-maroon mb-2">2M+</div>
                <div className="text-gray-600">Students Impacted</div>
              </div>
            </div>
            <Button size="lg" className="bg-ab-maroon hover:bg-ab-maroon-dark text-white">
              Learn More About Our Impact
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Community Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition duration-300">
              <CardContent className="p-8">
                <div className="text-ab-maroon text-4xl mb-4 flex justify-center">
                  <area.icon className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold text-ab-charcoal mb-4">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
