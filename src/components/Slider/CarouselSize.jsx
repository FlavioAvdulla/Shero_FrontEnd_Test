import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderData } from "../Slider/SliderData";

export function CarouselSize() {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto mb-[100px] text-"
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    >
      <CarouselContent>
        {sliderData.map((sliderElement, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent
                  className={`flex flex-col gap-5 aspect-square items-center justify-center p-0 ${
                    isGrabbing ? "cursor-grabbing" : "cursor-grab"
                  } relative`}
                >
                  <img
                    className="flex "
                    src={sliderElement.image}
                    alt={sliderElement.title}
                  />
                  {/* Wrap the info of slide */}
                  <div className="absolute w-full h-full group overflow-hidden">
                    <div className="flex flex-col absolute w-full bottom-[-152px] h-[35%] cursor-auto items-center justify-center text-center bg-black bg-opacity-60 backdrop-blur-[6px] transform  transition-transform duration-500 ease-in-out group-hover:translate-y-[-150px]">
                      <div className="font-medium text-[25px] text-white mb-3">
                        {sliderElement.title}
                      </div>
                      <div className="w-[70%] text-white font-light text-[15px]">
                        {sliderElement.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
