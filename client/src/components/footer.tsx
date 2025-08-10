import { Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Our Businesses", href: "#businesses" },
    { label: "Legacy & Leadership", href: "#legacy" },
    { label: "Innovation", href: "#innovation" },
    { label: "Community", href: "#community" },
    { label: "Careers", href: "#careers" },
  ];

  const resources = [
    { label: "Media Center", href: "#" },
    { label: "Investor Relations", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ab-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-ab-maroon mb-4">QoreWorks</div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              A Force For Good. With innovative technology solutions and responsible business practices, we continue to shape 
              industries and communities worldwide through automation, efficiency, and excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-ab-gold transition duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">
                    {social.label === "LinkedIn" ? "Li" : 
                     social.label === "Twitter" ? "Tw" :
                     social.label === "Facebook" ? "Fb" : "Ig"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-ab-gold transition duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-ab-gold transition duration-300"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 QoreWorks. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
              Designed with <Heart className="text-ab-maroon mx-1 w-4 h-4" /> for a better tomorrow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
