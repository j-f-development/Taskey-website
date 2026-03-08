"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FeaturePreview() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("features.1.title"),
      description: t("features.1.desc"),
      image: "/BA2B10E7-7DE2-41AD-B48D-EE39BC2E52E6.png",
    },
    {
      title: t("features.2.title"),
      description: t("features.2.desc"),
      image: "/B899021B-1AAA-40FD-9668-5DBB4E23D5D2.png",
    },
    {
      title: t("features.3.title"),
      description: t("features.3.desc"),
      image: "/54F369FF-6D74-4695-B8D3-44E54D16098B.png",
    },
  ];

  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">
            {t("features.badge")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t("features.title")}
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Number */}
              <span className="text-sm font-semibold text-gray-300 mb-2">
                0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
