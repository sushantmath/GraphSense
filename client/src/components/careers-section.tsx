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
    <section id="careers" className="py-20 text-white" style={{ background: 'rgb(51, 85, 139)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover your next chapter with us. Explore a rewarding career with QoreWorks that aligns 
            with your purpose, passion, and potential.
          </p>
        </div>

        {/* Career Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {["/story1.png", "/story2.png", "/story3.png"].map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full h-64">
                    <img
                      src={image}
                      alt={`Career image ${index + 1}`}
                      className="rounded-lg shadow-lg hover:scale-105 transition duration-300 w-full h-64 object-cover"
                      style={{ filter: 'grayscale(100%)', border: '2px solid white' }}
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ background: 'rgba(183,205,194,0.18)' }} />
                  </div>
                  {index === 0 && (
                    <span className="mt-2 text-white text-lg md:text-xl" style={{ fontFamily: 'inherit' }}>
                      From Pink Slip to Big Flip
                    </span>
                  )}
                  {index === 1 && (
                    <span className="mt-2 text-white text-lg md:text-xl" style={{ fontFamily: 'inherit' }}>
                      Fueling Dreams from the Car Tank
                    </span>
                  )}
                  {index === 2 && (
                    <span className="mt-2 text-white text-lg md:text-xl" style={{ fontFamily: 'inherit' }}>
                      Journey - onward and upwards!
                    </span>
                  )}
                </div>
              ))}
        </div>

        {/* Career Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerLinks.map((link, index) => (
            <Card key={index} className="bg-white border rounded-lg shadow hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <link.icon className="text-ab-gold text-2xl mr-3 w-6 h-6" />
                  <h3 className="text-xl font-bold text-ab-charcoal">{link.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{link.description}</p>
                <Button
                  variant="ghost"
                  className="text-ab-gold hover:text-ab-charcoal p-0 h-auto font-semibold"
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
