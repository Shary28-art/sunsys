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
      logo: "https://tasksaathi.com/WhatsApp%20Image%202025-09-23%20at%2017.57.08_ef40957d.jpg",
      href: "https://tasksaathi.com/",
    },
    {
      name: "KaushalSaathi",
      description:
        "Bridging the gap between potential and opportunity for every woman.",
      logo: "https://ik.imagekit.io/zpx7owisl/IMG-20251022-WA0051.jpg",
      href: "https://kaushalsaathi.com/",
    }
    
  ];

  return (
    <section className="py-5 bg-light" id="other-platforms">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">
            Our Other Platforms
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Discover our ecosystem of platforms designed to empower and connect.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {platforms.map((platform, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm hover-shadow transition">
                <div className="text-center p-4">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="img-fluid mb-3"
                    style={{ height: '120px', objectFit: 'contain' }}
                  />
                  <h3 className="h5 text-primary">{platform.name}</h3>
                  <p className="text-muted small mb-4">
                    {platform.description}
                  </p>
                  <a
                    href={platform.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill px-4"
                    aria-label={`Learn more about ${platform.name}`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPlatforms;