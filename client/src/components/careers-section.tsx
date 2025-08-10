import { Search, Heart, GraduationCap, HelpCircle, Upload, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const careerImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
];

const careerLinks = [
  {
    title: "Explore Opportunities",
    description: "Discover open positions across our diverse business portfolio.",
    icon: Search,
    link: "#",
  },
  {
    title: "Life at ABG",
    description: "Experience our culture, values, and work environment.",
    icon: Heart,
    link: "#",
  },
  {
    title: "Leadership Programs",
    description: "Join our flagship leadership development initiatives.",
    icon: GraduationCap,
    link: "#",
  },
  {
    title: "Resources & FAQs",
    description: "Get answers to common questions about careers with us.",
    icon: HelpCircle,
    link: "#",
  },
  {
    title: "Upload Resume",
    description: "Submit your profile for future opportunities.",
    icon: Upload,
    link: "#",
  },
  {
    title: "Global Programs",
    description: "Explore international career opportunities and exchanges.",
    icon: Globe,
    link: "#",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-ab-maroon text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover your next chapter with us. Explore a rewarding career with Aditya Birla Group that aligns 
            with your purpose, passion, and potential.
          </p>
        </div>

        {/* Career Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {careerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Career image ${index + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition duration-300 w-full h-32 md:h-40 object-cover"
            />
          ))}
        </div>

        {/* Career Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerLinks.map((link, index) => (
            <Card key={index} className="glassmorphism border-white/20 hover:bg-white/20 transition duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <link.icon className="text-ab-gold text-2xl mr-3 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">{link.title}</h3>
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed">{link.description}</p>
                <Button
                  variant="ghost"
                  className="text-ab-gold hover:text-white p-0 h-auto font-semibold"
                >
                  {link.title.includes("Explore") ? "Explore Now" : 
                   link.title.includes("Life") ? "Learn More" :
                   link.title.includes("Leadership") ? "Apply Now" :
                   link.title.includes("Resources") ? "View Resources" :
                   link.title.includes("Upload") ? "Upload Now" : "Learn More"}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
