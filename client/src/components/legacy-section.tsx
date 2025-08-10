import { ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LegacySection() {
  return (
    <section id="legacy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">Legacy & Leadership</h2>
            <h3 className="text-2xl font-semibold text-ab-maroon mb-6">Our force of success</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For years, QoreWorks has been at the forefront of business automation and digital transformation. 
              Our journey began with a vision to empower busy professionals with cutting-edge tools and has evolved into a 
              comprehensive platform that touches millions of businesses across the world.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Under visionary leadership, we continue to establish new foundations of 
              success while staying true to our core values of innovation, efficiency, quality, seamlessness, and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-ab-maroon hover:bg-ab-maroon-dark text-white">
                Read Our Story
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-ab-maroon text-ab-maroon hover:bg-ab-maroon hover:text-white">
                Leadership Team
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Corporate leadership meeting"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-ab-gold text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Quote Section */}
        <div className="mt-20 bg-ab-maroon rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl text-ab-gold mb-6">"</div>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              Our commitment to innovation, automation, and digital transformation continues to drive our success 
              across diverse industries and business solutions.
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                alt="QoreWorks CEO"
                className="w-16 h-16 rounded-full border-3 border-ab-gold mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">Leadership Team</div>
                <div className="text-ab-gold">CEO, QoreWorks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
