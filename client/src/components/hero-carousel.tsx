import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
  title: "QoreWorks | Uniforms & Workwear",
  subtitle: "",
  description: "",
    backgroundImage: "/force-for-good.png",
    buttons: [
      { text: "Explore Solutions", link: "businesses", icon: ArrowRight },
    ],
  },
  {
    id: 2,
    title: "QoreWorks | Corporate Gifting",
    subtitle: "",
    description: "",
  backgroundImage: "/corporate-gifting.jpg",
    buttons: [
  { text: "Explore Catalogue", link: "businesses", icon: ArrowRight },
    ],
  },
  {
    id: 3,
    title: "QoreWorks | D2C Fashion Brand",
    subtitle: "",
    description: "",
  backgroundImage: "/d2c-fashion.jpg",
    buttons: [
      { text: "Launching Soon", icon: ArrowRight },
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
    <section id="home" className="hero-carousel relative overflow-hidden pt-20">
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
                <h1 className="text-white mb-6 animate-fade-in" style={(slide.id === 1 || slide.id === 2 || slide.id === 3) ? { fontSize: 40 } : {}}>
                  {slide.id === 1 ? (
                    <>
                      <span className="font-normal">QoreWorks</span>
                      <span className="font-bold"> | Uniforms &amp; Workwear</span>
                    </>
                  ) : slide.id === 2 ? (
                    <>
                      <span className="font-normal">QoreWorks</span>
                      <span className="font-bold"> | Corporate Gifting</span>
                    </>
                  ) : slide.id === 3 ? (
                    <>
                      <span className="font-normal">QoreWorks</span>
                      <span className="font-bold"> | D2C Fashion Brand</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold">{slide.title}</span>
                      <br />
                      <span className="text-ab-gold">{slide.subtitle}</span>
                    </>
                  )}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  {slide.buttons.map((button, btnIndex) => {
                    // For D2C Fashion Brand (slide 3), render a static button with gold style
                    if (slide.id === 3) {
                      return (
                        <Button
                          key={btnIndex}
                          size="lg"
                          className="bg-ab-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4"
                          disabled
                        >
                          {button.text}
                          <button.icon className="ml-2 w-5 h-5" />
                        </Button>
                      );
                    }
                    // Special style for 'Explore Solutions' and 'Explore Catalogue' buttons
                    const isExploreSolutions = button.text === "Explore Solutions";
                    const isExploreCatalogue = button.text === "Explore Catalogue";
                    return (
                      <Button
                        key={btnIndex}
                        onClick={"link" in button ? () => scrollToSection(button.link) : undefined}
                        size="lg"
                        className={
                          isExploreSolutions || isExploreCatalogue
                            ? "bg-ab-gold hover:bg-yellow-500 text-white font-semibold px-8 py-4"
                            : ("variant" in button && button.variant === "outline"
                                ? "border-2 border-white text-white hover:bg-white hover:text-ab-maroon px-8 py-4 font-semibold transition duration-300"
                                : "bg-ab-maroon hover:bg-ab-maroon-dark text-white px-8 py-4 font-semibold transition duration-300")
                        }
                      >
                        {button.text}
                        <button.icon className="ml-2 w-5 h-5" />
                      </Button>
                    );
                  })}
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
