import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "A Force",
    subtitle: "For Good",
    description: "With over seven decades of responsible business practices, we continue to shape industries and communities worldwide.",
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    buttons: [
      { text: "Our Businesses", link: "businesses", icon: ArrowRight },
      { text: "Innovation", link: "innovation", icon: ExternalLink, variant: "outline" as const },
    ],
  },
  {
    id: 2,
    title: "Professional",
    subtitle: "Automation",
    description: "Empowering busy professionals with cutting-edge automation tools and streamlined business solutions.",
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    buttons: [
      { text: "Our Solutions", link: "businesses", icon: ArrowRight },
    ],
  },
  {
    id: 3,
    title: "Innovation",
    subtitle: "& Technology",
    description: "Pushing the boundaries of what's possible through disruptive technologies and visionary thinking.",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    buttons: [
      { text: "Explore Innovation", link: "innovation", icon: ArrowRight },
    ],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-carousel relative overflow-hidden">
      <div className="carousel-container relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                  <br />
                  <span className="text-ab-gold">{slide.subtitle}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  {slide.buttons.map((button, btnIndex) => (
                    <Button
                      key={btnIndex}
                      onClick={() => scrollToSection(button.link)}
                      variant={button.variant || "default"}
                      size="lg"
                      className={`${
                        button.variant === "outline"
                          ? "border-2 border-white text-white hover:bg-white hover:text-ab-maroon"
                          : "bg-ab-maroon hover:bg-ab-maroon-dark text-white"
                      } px-8 py-4 font-semibold transition duration-300`}
                    >
                      {button.text}
                      <button.icon className="ml-2 w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Carousel Navigation Arrows */}
      <Button
        onClick={previousSlide}
        variant="ghost"
        size="lg"
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-ab-gold transition duration-300 p-2"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="lg"
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-ab-gold transition duration-300 p-2"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>
    </section>
  );
}
