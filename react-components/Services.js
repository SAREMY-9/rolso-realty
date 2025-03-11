import React from "react";
import "./Services.css"; // Make sure this file is linked

const services = [
  {
    title: "Property Listings",
    description: "List your property with us and reach thousands of potential buyers and renters, maximizing your visibility and potential reach.",
  },
  {
    title: "Buying Assistance",
    description: "Benefit from our expertise in guiding you through the buying process, finding the perfect property, and navigating negotiations.",
  },
  {
    title: "Rental Services",
    description: "We connect tenants with suitable homes quickly and efficiently, ensuring a smooth and stress-free rental experience.",
  },
  {
    title: "Property Management",
    description: "Let us handle the complexities of managing your property, including maintenance, tenant relations, and financial administration.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="row">
        <h2>Services</h2>
        {services.map((service, index) => (
          <section className="offers" key={index}>
            <h2>{service.title}</h2>
            <i>{service.description}</i>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
