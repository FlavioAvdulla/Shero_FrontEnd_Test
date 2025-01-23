// Import necessary components and hooks from React and your UI library
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

// Function to update the cursor (grab-grabbing) when clicking.
export function CarouselSize() {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] md:w-[85%] max-sm:w-[70%] max-lg:w-[78%] mx-auto mb-[100px] text-primary"
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
                    <div
                      className="flex flex-col w-[100%] absolute w-full bottom-[-152px] h-auto py-5
                                  cursor-auto items-center justify-center text-center
                                 bg-black bg-opacity-60 backdrop-blur-[6px] transform 
                                  transition-transform duration-500 ease-in-out group-hover:translate-y-[-150px] sm:group-hover:translate-y-[-152px]"
                    >
                      <div className="font-medium text-[20px] text-white mb-1
                                      
                                      max-xl:text-[18px]
                                      max-md:text-[17px]
                      ">
                        {sliderElement.title}
                      </div>
                      <div className="w-[80%] text-white font-light text-[15px]
                                      max-xl:text-[13px] max-xl:w-[90%]
                                      max-lg:text-[15px] max-lg:w-[90%]
                                      max-md:w-[90%]
                      ">
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
