import React from "react";
import "../../styles/resource.css";

const blogData = [
  {
    title: "Blog",
    desc: "",
    linkUrl: "#home",
  },
  {
    title: "Whitepaper",
    desc: "",
    linkUrl: "#home",
  },
  {
    title: "Press Release",
    desc: "",
    linkUrl: "/contact",
  },
];

const Resource = () => {
  return (
    <section className="resource_section">
      <div className="container" id="blog">
        <div className="blog_top-content">
          <h6 className="subtitle">Resources</h6>
          <span><hr/></span>
          <p className="description res_desc">
            Learn from our experts how to increase conversion, guest loyalty,
            operational efficiency, and revenue at your hospitality business
            with our blog post, reports, case studies, and 
            <span className="highlight"> more.</span>
          </p>
        </div>



      </div>
    </section>
  );
};

export default Resource;
