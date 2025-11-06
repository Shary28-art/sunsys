import React from "react";

const OtherPlatforms = () => {
  const platforms = [
    {
      name: "InternSaathi.com",
      description:
        "Your trusted partner for internships, connecting students with industry-ready opportunities.",
      logo: "https://internsaathi.com/logo.png",
      href: "https://internsaathi.com",
    },
    {
      name: "NaukriSaathi.com",
      description:
        "Empowering job seekers and professionals to land the right roles across India.",
      logo: "https://naukrisaathi.com/logo.jpg",
      href: "https://naukrisaathi.com/",
    },
    {
      name: "TaskSaathi",
      description:
        "Task Saathi - Making work effortless, organized, and stress-free.",
      logo: "https://via.placeholder.com/150x150?text=Task",
      href: "https://example.com/tasksaathi",
    },
    {
      name: "KaushalSaathi",
      description:
        "Bridging the gap between potential and opportunity for every woman.",
      logo: "https://via.placeholder.com/150x150?text=Kaushal",
      href: "https://example.com/kaushalsaathi",
    },
    {
      name: "Sunsys Techsol",
      description:
        "Your trusted partner in renewable and affordable solar energy.",
      logo: "https://via.placeholder.com/150x150?text=Sunsys",
      href: "https://sunsys.tech",
    },
  ];

  return (
    <section className="platforms-section" id="other-platforms">
      <div className="platforms-container">
        <div className="platforms-header">
          <h2
            className="platforms-title"
            style={{ textAlign: "center", width: "100%" }}
          >
            Our Other Platforms
          </h2>
          <p
            className="platforms-subtitle"
            style={{ textAlign: "center", maxWidth: 800, margin: "0.5rem auto 2rem" }}
          >
            Discover our ecosystem of platforms designed to empower and connect.
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

              <h3 className="platform-name">{platform.name}</h3>
              <p className="platform-description">{platform.description}</p>

              <a
                href={platform.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-button"
                aria-label={`Learn more about ${platform.name}`}
                style={{ display: "inline-block", textAlign: "center" }}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPlatforms;