import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    serviceId: number;
    serviceName: string;
    serviceDescription: string;
    serviceIcon: string;
  };
  handleButtonClick: (serviceId: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, handleButtonClick }) => {
  return (
    <div className="bg-white border-2 border-gradient-to-t from-buttoncolor to-textcolor p-6 rounded-lg flex flex-col items-start relative">

        <div>
             {/* Icon - Positioned at the top right */}
      <img
        src={service.serviceIcon}
        alt={service.serviceName}
        className="absolute top-2 left-2 w-12 h-12"
      />

      {/* Service Title */}
      <h3 className="text-textcolor text-xl font-semibold mt-12">{service.serviceName}</h3>

      {/* Service Description */}
      <p className="text-textcolor mt-4">{service.serviceDescription}</p>

        </div>
     
      {/* Button at the bottom right */}
         <Button className='mt-auto text-white py-2 px-4 rounded-md absolute bottom-4 right-4 bg-buttoncolor' asChild onClick={() => handleButtonClick(service.serviceId)}>
      <Link href="/login">Learn More</Link>
    </Button>
    </div>
  );
};

export default ServiceCard;
