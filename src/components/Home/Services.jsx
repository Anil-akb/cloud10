import React from "react";

import "../../styles/service.css";

const serviceData = [
  {
    title: "Hotel Revenue Management Consulting",
    desc: "Our company helps hotels  to optimize revenue results with our state-of-the-art hotel consulting services. We have a team of hospitality veterans with years of experience uncovering the hidden revenue potential of hotels and resorts worldwide. We look beyond only top-line revenue and incorporate the cost of distribution into our strategy mix.",
  },
  {
    title: "Hotel Operation & Management",
    desc: "We offer hotel management, asset optimization and revenue management services for: Independent Hotels, Boutique Hotels, Lifestyle Resorts, Luxury B&B’s, Design Hostels, and innovative lodging concepts.The areas of expertise of our hotel management team and consultants include.",
  },
  {
    title: "Digital Marketing Services",
    desc: "Our company is a driving force in managing hotels, sales representation, marketing, and promotion for independent hotels in the changing landscape of business where your customer need personalized services. We help bridge the gap between the sales and the marketing team that drive better business results for your company.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container service_container">
        <div className="services_top-content">
          <h6 className="subtitle">Our Services</h6>
          <hr />
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services_item" key={index}>
              <h3 className="service_title">{item.title}</h3>
              <p className="description p_desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
