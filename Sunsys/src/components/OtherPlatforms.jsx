import React from 'react';

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
    <section className="py-16 bg-gray-50" id="other-platforms">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-gray-900 text-center">
          Our Other Platforms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-3xl p-8 flex flex-col items-center hover:shadow-xl transition duration-300 w-full max-w-sm"
            >
              <div className="mb-6">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-gray-700 text-base text-center leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherPlatforms;