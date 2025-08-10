import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  businessInterest: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    businessInterest: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        businessInterest: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.businessInterest || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const businessVerticals = [
    { label: "Corporate Uniforms", value: "corporate-uniforms" },
    { label: "Corporate Gifting", value: "corporate-gifting" },
    { label: "D2C Brand", value: "d2c-brand" },
  ];

  const socialLinks = [
    { icon: "linkedin", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "facebook", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "youtube", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ab-charcoal mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us to explore partnerships, opportunities, or learn more about our diverse business portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-ab-charcoal mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-ab-charcoal mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="focus:ring-2 focus:ring-ab-maroon focus:border-transparent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-ab-charcoal mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="focus:ring-2 focus:ring-ab-maroon focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-ab-charcoal mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                    className="focus:ring-2 focus:ring-ab-maroon focus:border-transparent"
                  />
                </div>

                <div>
                  <Label htmlFor="businessInterest" className="text-sm font-semibold text-ab-charcoal mb-2">
                    Business Interest
                  </Label>
                  <Select value={formData.businessInterest} onValueChange={(value) => handleInputChange("businessInterest", value)}>
                    <SelectTrigger className="focus:ring-2 focus:ring-ab-maroon focus:border-transparent">
                      <SelectValue placeholder="Select Business Area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate-uniforms">Corporate Uniforms</SelectItem>
                      <SelectItem value="corporate-gifting">Corporate Gifting</SelectItem>
                      <SelectItem value="d2c-brand">D2C Brand</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-ab-charcoal mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements..."
                    className="focus:ring-2 focus:ring-ab-maroon focus:border-transparent"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={contactMutation.isPending}
                  className="w-full bg-ab-maroon hover:bg-ab-maroon-dark text-white"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <NotebookPen className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ab-charcoal mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ab-maroon rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ab-charcoal mb-1">Head Office</h4>
                    <p className="text-gray-600">
                      Birla Centre, Dr. Annie Besant Road<br />
                      Worli, Mumbai - 400 030, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ab-maroon rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ab-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600">+91 22 6652 5000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ab-maroon rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ab-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">contact@adityabirla.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Verticals Quick Contact */}
            <Card className="bg-ab-maroon text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Business Verticals</h4>
                <div className="grid grid-cols-1 gap-4">
                  {businessVerticals.map((vertical, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{vertical.label}</span>
                      <Button variant="ghost" size="sm" className="text-ab-gold hover:text-white p-1">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-bold text-ab-charcoal mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="default"
                    size="lg"
                    className="w-12 h-12 p-0 bg-ab-maroon hover:bg-ab-maroon-dark rounded-lg"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">{social.icon}</span>
                      {/* Icon placeholder - in real implementation, use proper social media icons */}
                      <span className="text-white">
                        {social.icon === "linkedin" ? "Li" : 
                         social.icon === "twitter" ? "Tw" :
                         social.icon === "facebook" ? "Fb" :
                         social.icon === "instagram" ? "Ig" : "Yt"}
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
