// TestimonialCard.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constants"; // Make sure to replace this path with the actual file path where testimonials are defined
import { FaStar } from "react-icons/fa"; // For rating stars

interface TestimonialProps {
  name: string;
  image: string;
  rating: number;
  location: string;
  testimony: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  image,
  rating,
  location,
  testimony,
}) => {

    

  return (
    <Card className="flex flex-col p-6 border bg-[#CDDEE6] border-gray-200 shadow-lg rounded-lg max-w-md">
      <CardContent>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg text-textcolor">{name}</h2>
            <p className="text-textcolor">{location}</p>
          </div>
          <div className="ml-auto flex items-center space-x-1 text-yellow-500">
            <FaStar className="w-5 h-5" />
            <span className="text-textcolor font-semibold">{rating}</span>
          </div>
        </div>
        <p className="mt-4 text-textcolor italic">"{testimony}"</p>
      </CardContent>
    </Card>
  );
};


export default TestimonialCard;