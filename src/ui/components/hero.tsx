"use client";
import * as React from "react";
import HeroCards from "./hero-cards";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type HeroCardsProps = {
  imageUrl: string;
  title: string;
  description: string;
};

type HeroProps = {
  heroCards: HeroCardsProps[];
};

const HeroItems: HeroProps = {
  heroCards: [
    {
      imageUrl: "/hero-image1.png",
      title: "Conquer German with Ease - Your Ultimate Guide",
      description:
        "Ace Your Exams and Achieve Fluency with Professional Tutorial Services.",
    },
    {
      imageUrl: "/hero-image2.png",
      title: "German for Business Success - Advance Your Career",
      description:
        "Focuses on professional development and career advancement.",
    },
    {
      imageUrl: "/hero-image3.png",
      title: "Express German Learning - Perfect for Busy Lives",
      description:
        "Learn German in just 30 minutes a day with our flexible programs.",
    },
  ],
};

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full  h-[555px] flex items-center justify-center bg-[#F2EFDD] py-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-3/5  max-w-3/5"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {HeroItems.heroCards.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <HeroCards
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-red-800" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
