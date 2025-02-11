import React from "react";
import "../../styles/Services.css";

const Services: React.FC = () => {
  const services = [
    {
      title: "Marketing Strategy",
      description:
        "Crafting data-driven, consumer-centric marketing strategies tailored to your unique business goals. From research to execution, I help brands navigate market challenges and identify growth opportunities in today’s fast-evolving landscape.",
      icon: "📊",
    },
    {
      title: "Digital Marketing",
      description:
        "Implementing advanced digital marketing solutions that deliver results across multiple platforms. Whether it's SEO, paid media, or social strategy, I optimize campaigns to reach the right audience and drive measurable success.",
      icon: "🌐",
    },
    {
      title: "Brand Development",
      description:
        "Building compelling brand identities that connect with your audience on a deeper level. From positioning to visual identity, I help brands create a strong, authentic presence that drives loyalty and market growth.",
      icon: "🚀",
    },
  ];

  return (
    <div className="services">
      <h2>Skills</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
