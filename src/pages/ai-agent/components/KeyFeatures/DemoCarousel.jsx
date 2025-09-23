import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Import sample images (replace these paths with your actual image paths)
import demo1 from '/src/assets/ai-agent-images/demo1.png';
import demo2 from '/src/assets/ai-agent-images/demo2.png';
import demo3 from '/src/assets/ai-agent-images/demo3.png';
import demo4 from '/src/assets/ai-agent-images/demo4.png';

const DemoCarousel = ({ autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default images array
  const images = [
    {
      src: demo1,
      alt: 'AI Assistant Dashboard',
    },
    {
      src: demo2,
      alt: 'Voice Configuration',
    },
    {
      src: demo3,
      alt: 'Analytics View',
    },
    {
      src: demo4,
      alt: 'Deployment Settings',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-border/70 shadow-xl shadow-primary/10 h-[330px] group">
      {/* Main Image Container */}
      <div className="relative h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover bg-background"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - COMMENTED OUT */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-background/50 hover:bg-background/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Image Counter - COMMENTED OUT */}
      {/* <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-muted-foreground">
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
};

export default DemoCarousel;
