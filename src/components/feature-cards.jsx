"use client";

import { useEffect } from "react";
import { Clock, MapPin, CreditCard, Route } from "lucide-react";
import AOS from "aos";

export default function FeatureCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-green-400" />,
      title: "Real-Time Tracking",
      description:
        "Track your bus in real-time and never miss a ride. Get accurate ETAs and live updates.",
      delay: 100,
    },
    {
      icon: <MapPin className="h-10 w-10 text-green-400" />,
      title: "Convenient Scheduling",
      description:
        "Plan your journey with easy-to-use schedules and receive timely notifications.",
      delay: 300,
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-400" />,
      title: "Digital Payments",
      description:
        "Cashless transactions with multiple payment options. Save with digital passes and subscriptions.",
      delay: 500,
    },
    {
      icon: <Route className="h-10 w-10 text-green-400" />,
      title: "Smart Routing",
      description:
        "AI-powered route optimization to get you to your destination faster and more efficiently.",
      delay: 700,
    },
  ];

  return (
    <div className="features relative py-20 px-4 max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        data-aos="fade-up"
      >
        Why Choose Our <span className="text-green-400">Bus System</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={feature.delay}
          >
            <div className="feature-card-inner p-8 h-full flex flex-col items-center text-center">
              <div className="icon-container mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
