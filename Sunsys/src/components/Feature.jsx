import React from 'react';

const features = [
  { icon: 'fa-solar-panel', title: 'High Efficiency', text: 'Our solar panels deliver maximum energy output with industry-leading efficiency rates.' },
  { icon: 'fa-piggy-bank', title: 'Cost Savings', text: 'Reduce your electricity bills by up to 90% with our affordable solar solutions.' },
  { icon: 'fa-leaf', title: 'Eco-Friendly', text: 'Join the clean energy revolution and reduce your carbon footprint significantly.' },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose SunSys?</h2>
          <p>We provide innovative solar solutions that benefit both your wallet and the planet</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon"><i className={`fas ${f.icon}`}></i></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

