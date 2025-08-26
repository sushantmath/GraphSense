import { Heart } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { label: "Our Businesses", href: "#businesses" },
    { label: "Innovation", href: "#innovation" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Media Center", href: "#" },
    { label: "Investor Relations", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#", icon: <FaLinkedin /> },
    { label: "X", href: "#", icon: <FaXTwitter /> },
    { label: "Facebook", href: "#", icon: <FaFacebook /> },
    { label: "Instagram", href: "#", icon: <FaInstagram /> },
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
            <div className="flex items-center mb-4">
              <img 
                src="/qoreworks-logo.svg" 
                alt="QoreWorks Logo" 
                className="h-14 w-14 mr-0"
                style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(24%) saturate(1117%) hue-rotate(175deg) brightness(92%) contrast(90%)' }}
              />
              <span className="text-3xl font-bold" style={{ color: 'rgb(61,103,148)', marginTop: '4px', display: 'inline-block' }}>QoreWorks</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
              QoreWorks. With innovative solutions and responsible business practices, we continue to shape 
              industries worldwide through automation, efficiency, and excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-ab-gold transition duration-300 text-2xl"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
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
              &copy; 2025 QoreWorks. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
              Quality at the Core of our Business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
