<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
 // Make sure to import your CSS file
>>>>>>> 846982e492ba40b34749ed82bfd566d12fdebb5f

const OtherPlatforms = () => {
  const platforms = [
    {
      name: "InternSaathi.com",
      description:
        "Your trusted partner for internships, connecting students with industry-ready opportunities.",
      logo: "https://internsaathi.com/logo.png",
    },
    {
      name: "NaukriSaathi.com",
      description:
        "Empowering job seekers and professionals to land the right roles across India.",
      logo: "https://via.placeholder.com/150x150?text=Naukri",
    },
    {
      name: "TaskSaathi",
      description:
        "Task Saathi - Making work effortless, organized, and stress-free.",
      logo: "https://via.placeholder.com/150x150?text=Task",
    },
    {
      name: "KaushalSaathi",
      description:
        "Bridging the gap between potential and opportunity for every woman.",
      logo: "https://via.placeholder.com/150x150?text=Kaushal",
    },
    {
      name: "Sunsys Techsol",
      description:
        "Your trusted partner in renewable and affordable solar energy.",
      logo: "https://via.placeholder.com/150x150?text=Sunsys",
    },
  ];

  return (
    <section className="platforms-section" id="other-platforms">
      <div className="platforms-container">
        <div className="platforms-header">
          <h2 className="platforms-title">
            Our Other Platforms
          </h2>
          <p className="platforms-subtitle">
            Discover our ecosystem of platforms designed to empower and connect
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-card">
              <div className="platform-logo-container">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="platform-logo"
                />
              </div>
              <h3 className="platform-name">
                {platform.name}
              </h3>
              <p className="platform-description">
                {platform.description}
              </p>
              <button className="platform-button">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPlatforms;