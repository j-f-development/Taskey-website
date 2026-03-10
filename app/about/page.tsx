"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t("about.hero.title")}
          </h1>
          <p className="text-xl text-gray-600">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 text-center">
              {t("about.mission.p1")}
            </p>
            <p className="text-xl text-gray-700 text-center">
              {t("about.mission.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built Taskey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image 
                src="/logoblue.png" 
                alt="Taskey Logo" 
                width={128}
                height={128}
                className="mx-auto"
                priority
                sizes="128px"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              {t("about.why.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t("about.why.problem.title")}
              </h3>
              <p className="text-gray-700 text-center">
                {t("about.why.problem.text")}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t("about.why.solution.title")}
              </h3>
              <p className="text-gray-700 text-center">
                {t("about.why.solution.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("about.values.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("about.values.1.title")}</h3>
              <p className="text-gray-600">{t("about.values.1.text")}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("about.values.2.title")}</h3>
              <p className="text-gray-600">{t("about.values.2.text")}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("about.values.3.title")}</h3>
              <p className="text-gray-600">{t("about.values.3.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image src="/logoblue.png" alt="Taskey Logo" width={128} height={128} className="mx-auto" sizes="128px" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">{t("about.team.title")}</h2>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("about.team.founders")}</h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {[1, 2].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden relative">
                    <Image src={i === 1 ? "/koko.jpeg" : "/julian.JPG"} alt={i === 1 ? "Fynn-Luca Schulz" : "Julian Stosse"} fill className="object-cover" sizes="192px" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xl">{i === 1 ? 'Fynn-Luca Schulz' : 'Julian Stosse'}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("about.team.team")}</h3>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative">
                  <Image src="/yukiobild.jpeg" alt="Yukio Jonas Sato" fill className="object-cover" sizes="160px" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Yukio Jonas Sato</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("about.contact.title")}</h2>
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t("about.contact.phone")}</h4>
                <a href="tel:+4915168488999" className="text-blue-900 hover:underline">+49 151 684 88999</a>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t("about.contact.email")}</h4>
                <a href="mailto:fynn@vars-development.de" className="text-blue-900 hover:underline">fynn@vars-development.de</a>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t("about.contact.address")}</h4>
                <p className="text-gray-700">In der Acht 44<br />66333 Völklingen<br />Deutschland</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            {t("about.contact.more")}{" "}
            <a href="/impressum" className="text-blue-900 hover:underline">{t("about.contact.imprint")}</a>{" "}
            {t("about.contact.and")}{" "}
            <a href="/datenschutz" className="text-blue-900 hover:underline">{t("about.contact.privacy")}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
