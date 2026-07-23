"use client";

import { useEffect, useState } from "react";
import { Children, isValidElement } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import Footer from "../components/Footer/Footer";
import Image from "next/image";
import issuerIcon from "../../../../public/assets/images/issuer.png";
import certifierIcon from "../../../../public/assets/images/certifier.png";
import buyerIcon from "../../../../public/assets/images/buyer.png";
import marketplaceIcon from "../../../../public/assets/images/marketplace.png";
import complianceIcon from "../../../../public/assets/images/compliance.png";
import differentiationIcon from "../../../../public/assets/images/differentiation.png";
import capitalIcon from "../../../../public/assets/images/capital.png";
import verraIcon from "../../../../public/assets/images/verralogo.jpg";
import goldStandardIcon from "../../../../public/assets/images/goldStandard.png";
import pachamaIcon from "../../../../public/assets/images/pachama.png";
import logloClima from "../../../../public/assets/images/logo-cli.jpg";
import impactImage from "../../../../public/assets/images/TripleImpact.png";
import roadmapImage from "../../../../public/assets/images/Roadmap.png";
import marketGrowthImage from "../../../../public/assets/images/image4.png";
import marketDemandImage from "../../../../public/assets/images/image3.png";
import footnoteImage2 from "../../../../public/assets/images/image2.png";
import footnoteImage1 from "../../../../public/assets/images/image1.png";

import { whitepaperContent } from "./content";

const WhitepaperContent = () => {
  const locale = useLocale();
  const c =
    whitepaperContent[locale as keyof typeof whitepaperContent] ??
    whitepaperContent.en;
  const sections = c.sectionLabels;

  const [activeSection, setActiveSection] = useState<string>("carbon-credit");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen scroll-smooth">
        <aside className="hidden md:block sticky top-[100px] overflow-x-hidden lg:top-[120px] w-full md:w-1/4 border-r border-gray-200 p-6 h-screen overflow-y-auto bg-white z-10">
          <nav className="space-y-3">
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--strong-green)] text-white shadow-md"
                      : "text-gray-700 hover:text-[var(--strong-green)] hover:pl-5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm animate-ping"></span>
                  )}
                  {label}
                </a>
              );
            })}
          </nav>
        </aside>

        <main className="w-full md:flex-1 p-6 pt-[100px] overflow-x-hidden lg:pt-[120px] space-y-20">
          {Children.map(
            [
              <section id="carbon-credit">
                <h2 className="text-2xl font-bold mb-4">
                  {c.carbonCredit.heading}
                </h2>
                <p className="mb-4">{c.carbonCredit.intro}</p>

                <h3 className="text-xl font-semibold mb-4 text-[var(--dark-blue)]">
                  {c.carbonCredit.marketParticipantsHeading}
                </h3>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={issuerIcon}
                    alt={c.carbonCredit.issuersAlt}
                    width={100}
                    height={100}
                    className="rounded-xl bg-white shadow-md p-1 mt-1"
                  />
                  <span>
                    <strong>{c.carbonCredit.issuersLabel}</strong>{" "}
                    {c.carbonCredit.issuersText}
                  </span>
                </p>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={certifierIcon}
                    alt={c.carbonCredit.certifiersAlt}
                    width={100}
                    height={100}
                    className="rounded-xl bg-white shadow-md p-1 mt-1"
                  />
                  <span>
                    <strong>{c.carbonCredit.certifiersLabel}</strong>{" "}
                    {c.carbonCredit.certifiersText}
                  </span>
                </p>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={buyerIcon}
                    alt={c.carbonCredit.buyersAlt}
                    width={100}
                    height={100}
                    className="rounded-xl bg-white shadow-md p-1 mt-1"
                  />
                  <span>
                    <strong>{c.carbonCredit.buyersLabel}</strong>{" "}
                    {c.carbonCredit.buyersText}
                  </span>
                </p>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={marketplaceIcon}
                    alt={c.carbonCredit.marketplacesAlt}
                    width={100}
                    height={100}
                    className="rounded-xl bg-white shadow-md p-1 mt-1"
                  />
                  <span>
                    <strong>{c.carbonCredit.marketplacesLabel}</strong>{" "}
                    {c.carbonCredit.marketplacesText}
                  </span>
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {c.carbonCredit.howIssuersMakeMoneyHeading}
                </h3>
                <p className="mb-2">{c.carbonCredit.issuersEarnBy}</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>{c.carbonCredit.earn1}</li>
                  <li>{c.carbonCredit.earn2}</li>
                  <li>{c.carbonCredit.earn3}</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  {c.carbonCredit.whyBuyHeading}
                </h3>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={complianceIcon}
                    alt={c.carbonCredit.complianceAlt}
                    width={150}
                    height={150}
                    className="rounded-l mt-2"
                  />
                  <span>
                    <strong>{c.carbonCredit.complianceLabel}</strong>{" "}
                    {c.carbonCredit.complianceText}
                  </span>
                </p>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={differentiationIcon}
                    alt={c.carbonCredit.differentiationAlt}
                    width={140}
                    height={140}
                    className="rounded-l mt-2"
                  />
                  <span>
                    <strong>{c.carbonCredit.differentiationLabel}</strong>{" "}
                    {c.carbonCredit.differentiationText}
                  </span>
                </p>

                <p className="mb-6 flex items-center gap-4 text-gray-700 leading-relaxed">
                  <Image
                    src={capitalIcon}
                    alt={c.carbonCredit.capitalAlt}
                    width={140}
                    height={140}
                    className="rounded-l mt-2"
                  />
                  <span>
                    <strong>{c.carbonCredit.capitalLabel}</strong>{" "}
                    {c.carbonCredit.capitalText}
                  </span>
                </p>

                <p className="mb-4">{c.carbonCredit.esgParagraph}</p>

                <p className="mb-4">{c.carbonCredit.shortParagraph}</p>
              </section>,

              <section id="executive-summary">
                <h2 className="text-2xl font-bold mb-4">
                  {c.executiveSummary.heading}
                </h2>
                <p className="mb-4">
                  <strong>{c.executiveSummary.missionLabel}</strong>{" "}
                  {c.executiveSummary.missionText}
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  <strong>{c.executiveSummary.problemLabel}</strong>{" "}
                  {c.executiveSummary.problemText}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <video
                    src="/assets/videos/problem.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="w-full max-w-3xl rounded-xl shadow-lg mx-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-6 p-6 rounded-2xl"
                >
                  <p className="text-gray-700 leading-relaxed text-base">
                    <strong>{c.executiveSummary.solutionLabel}</strong>{" "}
                    {c.executiveSummary.solutionText}
                  </p>

                  <div className="flex justify-center gap-4">
                    <div className="w-[146px] h-[120px] md:w-[500px] md:h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
                      <video
                        src="/assets/videos/OMfloating.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="w-[140px] h-[120px] md:w-[500px] md:h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
                      <video
                        src="/assets/videos/OCtoken.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </section>,

              <section
                id="project-overview"
                className="bg-[var(--light-grey)] py-16 px-6 rounded-2xl shadow-lg"
              >
                <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    {c.projectOverview.headingBefore}{" "}
                    <span className="text-[var(--strong-green)]">
                      {c.projectOverview.headingHighlight}
                    </span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {c.projectOverview.para1Pre}
                    <strong>{c.projectOverview.para1Bold}</strong>
                    {c.projectOverview.para1Post}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {c.projectOverview.para2}
                  </p>

                  {/* Video container */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full flex justify-center"
                  >
                    <div className="w-full max-w-4xl rounded-xl shadow-md overflow-hidden">
                      <video
                        src="/assets/videos/bosqueFlorencia.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-[300px] object-cover rounded-xl"
                      />
                    </div>
                  </motion.div>
                </div>
              </section>,

              <section id="market-analysis">
                <h2 className="text-2xl font-bold mb-4">
                  {c.marketAnalysis.heading}
                </h2>

                <p className="mb-4">{c.marketAnalysis.para1}</p>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full max-w-2xl mx-auto my-10"
                >
                  <Image
                    src={marketGrowthImage}
                    alt={c.marketAnalysis.growthImageAlt}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>

                <p className="mb-4">
                  {c.marketAnalysis.para2Pre}
                  <strong>{c.marketAnalysis.para2Bold}</strong>
                  {c.marketAnalysis.para2Post}
                </p>

                <p className="mb-4">{c.marketAnalysis.para3}</p>

                <p className="mb-4">
                  <strong>{c.marketAnalysis.keyInsightsLabel}</strong>
                </p>

                <ul className="list-disc list-inside mt-2 space-y-1 my-10">
                  <li>{c.marketAnalysis.insight1}</li>
                  <li>{c.marketAnalysis.insight2}</li>
                  <li>{c.marketAnalysis.insight3}</li>
                  <li>{c.marketAnalysis.insight4}</li>
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full max-w-2xl mx-auto my-10"
                >
                  <Image
                    src={marketDemandImage}
                    alt={c.marketAnalysis.demandImageAlt}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </motion.div>
              </section>,
              <section id="token-model">
                <h2 className="text-2xl font-bold mb-4">
                  {c.tokenModel.heading}
                </h2>

                <p className="mb-4">{c.tokenModel.intro}</p>

                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <strong>{c.tokenModel.omLabel}</strong> {c.tokenModel.omText}
                  </li>
                  <li>
                    <strong>{c.tokenModel.ocLabel}</strong> {c.tokenModel.ocText}
                  </li>
                </ul>

                <p className="mb-4">{c.tokenModel.holdersCanChoose}</p>

                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{c.tokenModel.choice1}</li>
                  <li>{c.tokenModel.choice2}</li>
                </ul>

                <p className="mb-4">{c.tokenModel.verificationIntro}</p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>{c.tokenModel.individualsLabel}</strong>{" "}
                    {c.tokenModel.individualsText}
                  </li>
                  <li>
                    <strong>{c.tokenModel.companiesLabel}</strong>{" "}
                    {c.tokenModel.companiesText}
                  </li>
                </ul>
              </section>,

              <section id="business-model">
                <h2 className="text-2xl font-bold mb-4">
                  {c.businessModel.heading}
                </h2>

                <p className="mb-4">{c.businessModel.intro}</p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  {c.businessModel.initialFundingHeading}
                </h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>
                    {c.businessModel.fundingItem1Pre}
                    <strong>{c.businessModel.fundingItem1Bold}</strong>
                    {c.businessModel.fundingItem1Post}
                  </li>
                  <li>
                    {c.businessModel.fundingItem2Pre}
                    <strong>{c.businessModel.fundingItem2Bold}</strong>
                    {c.businessModel.fundingItem2Post}
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  {c.businessModel.revenueHeading}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-4">
                  <li>
                    {c.businessModel.revenueItem1Pre}
                    <strong>{c.businessModel.revenueItem1Bold1}</strong>
                    {c.businessModel.revenueItem1Mid}
                    <strong>{c.businessModel.revenueItem1Bold2}</strong>
                    {c.businessModel.revenueItem1Post}
                  </li>
                  <li>
                    {c.businessModel.revenueItem2Pre}
                    <strong>{c.businessModel.revenueItem2Bold}</strong>
                    {c.businessModel.revenueItem2Post}
                  </li>
                  <li>{c.businessModel.revenueItem3}</li>
                </ul>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {c.businessModel.closing}
                </p>

                <div className="w-full overflow-hidden py-8">
                  {/* Logos en desktop */}
                  <div className="hidden md:flex gap-6 items-center justify-start pt-2">
                    <Image
                      src={verraIcon}
                      alt={c.businessModel.verraAlt}
                      width={200}
                      height={50}
                      className="bg-white p-2 shadow-md rounded-md"
                    />
                    <Image
                      src={goldStandardIcon}
                      alt={c.businessModel.goldStandardAlt}
                      width={200}
                      height={50}
                      className="bg-white p-2 shadow-md rounded-md"
                    />
                    <Image
                      src={pachamaIcon}
                      alt={c.businessModel.pachamaAlt}
                      width={200}
                      height={50}
                      className="bg-white p-2 shadow-md rounded-md"
                    />
                    <Image
                      src={logloClima}
                      alt={c.businessModel.climaAlt}
                      width={180}
                      height={50}
                      className="bg-white p-2 shadow-md rounded-md"
                    />
                  </div>

                  {/* Logos en mobile con scroll infinito */}
                  <div className="md:hidden relative w-full overflow-hidden">
                    <motion.div
                      className="flex gap-6 items-center"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    >
                      {[...Array(2)].flatMap((_, i) => [
                        <Image
                          key={`verra-${i}`}
                          src={verraIcon}
                          alt={c.businessModel.verraAlt}
                          width={200}
                          height={50}
                          className="bg-white p-2 shadow-md rounded-md"
                        />,
                        <Image
                          key={`gold-${i}`}
                          src={goldStandardIcon}
                          alt={c.businessModel.goldStandardAlt}
                          width={200}
                          height={50}
                          className="bg-white p-2 shadow-md rounded-md"
                        />,
                        <Image
                          key={`pachama-${i}`}
                          src={pachamaIcon}
                          alt={c.businessModel.pachamaAlt}
                          width={200}
                          height={50}
                          className="bg-white p-2 shadow-md rounded-md"
                        />,
                        <Image
                          key={`clima-${i}`}
                          src={logloClima}
                          alt={c.businessModel.climaAlt}
                          width={180}
                          height={50}
                          className="bg-white p-2 shadow-md rounded-md"
                        />,
                      ])}
                    </motion.div>
                  </div>
                </div>
              </section>,

              <section id="legal-framework">
                <h2 className="text-2xl font-bold mb-4">
                  {c.legalFramework.heading}
                </h2>

                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>{c.legalFramework.item1}</li>
                  <li>{c.legalFramework.item2}</li>
                  <li>{c.legalFramework.item3}</li>
                </ul>

                <p className="mb-4">{c.legalFramework.closing}</p>
              </section>,

              <section
                id="impact"
                className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 w-full"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 w-full">
                  <div className="w-full lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">
                      {c.impact.heading}
                    </h2>

                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {c.impact.intro}
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">
                      {c.impact.environmentalHeading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 leading-relaxed">
                      <li>{c.impact.env1}</li>
                      <li>{c.impact.env2}</li>
                      <li>{c.impact.env3}</li>
                      <li>{c.impact.env4}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">
                      {c.impact.socialHeading}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                      <li>{c.impact.social1}</li>
                      <li>{c.impact.social2}</li>
                      <li>{c.impact.social3}</li>
                      <li>{c.impact.social4}</li>
                      <li>{c.impact.social5}</li>
                    </ul>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                      {c.impact.closing}
                    </p>
                  </div>

                  <div className="w-full lg:w-3/4 flex justify-center lg:justify-center">
                    <Image
                      src={impactImage}
                      alt={c.impact.imageAlt}
                      width={1200}
                      height={1200}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </section>,

              <section
                id="roadmap"
                className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 w-full"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 w-full">
                  <div className="w-full lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">
                      {c.roadmap.heading}
                    </h2>

                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 leading-relaxed">
                      <li>
                        <strong>{c.roadmap.q1q2Label}</strong> {c.roadmap.q1q2Text}
                      </li>
                      <li>
                        <strong>{c.roadmap.q2Label}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.q2Item1}</li>
                          <li>{c.roadmap.q2Item2}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{c.roadmap.q3Label}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.q3Item1}</li>
                          <li>{c.roadmap.q3Item2}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{c.roadmap.q4Label}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.q4Item1}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{c.roadmap.q1_2026Label}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.q1_2026Item1}</li>
                          <li>{c.roadmap.q1_2026Item2}</li>
                          <li>{c.roadmap.q1_2026Item3}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{c.roadmap.q2_2026Label}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.q2_2026Item1}</li>
                          <li>{c.roadmap.q2_2026Item2}</li>
                        </ul>
                      </li>
                      <li>
                        <strong>{c.roadmap.annualLabel}</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>{c.roadmap.annualItem1}</li>
                          <li>{c.roadmap.annualItem2}</li>
                          <li>{c.roadmap.annualItem3}</li>
                        </ul>
                      </li>
                    </ul>

                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {c.roadmap.closing}
                    </p>
                  </div>

                  <div className="w-full lg:w-2/4 flex justify-center lg:justify-center">
                    <Image
                      src={roadmapImage}
                      alt={c.roadmap.imageAlt}
                      width={800}
                      height={800}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </section>,

              <section id="footnotes">
                <h2 className="text-2xl font-bold mb-6 text-[var(--dark-blue)]">
                  {c.footnotes.heading}
                </h2>

                <div className="space-y-10 pl-6 text-gray-700 leading-relaxed text-sm">
                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      {c.footnotes.fn1Heading}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>{c.footnotes.fn1Item1}</li>
                      <li>{c.footnotes.fn1Item2}</li>
                      <li>{c.footnotes.fn1Item3}</li>
                      <li>{c.footnotes.fn1Item4}</li>
                      <li>{c.footnotes.fn1Item5}</li>
                    </ul>
                    <p className="mt-3">{c.footnotes.fn1Para}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      {c.footnotes.fn2Heading}
                    </h3>
                    <p>{c.footnotes.fn2Para}</p>
                    <p className="italic mt-2">{c.footnotes.fn2Source}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      {c.footnotes.fn3Heading}
                    </h3>
                    <p>{c.footnotes.fn3Para}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      {c.footnotes.fn4Heading}
                    </h3>
                    <p>
                      {c.footnotes.fn4ParaPre}
                      <strong>{c.footnotes.fn4ParaBold}</strong>
                      {c.footnotes.fn4ParaPost}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>{c.footnotes.fn4Item1}</li>
                      <li>{c.footnotes.fn4Item2}</li>
                      <li>{c.footnotes.fn4Item3}</li>
                      <li>{c.footnotes.fn4Item4}</li>
                    </ul>
                    <p className="mt-3">
                      {c.footnotes.fn4VcuPre}
                      <strong>{c.footnotes.fn4VcuBold}</strong>
                      {c.footnotes.fn4VcuPost}
                    </p>
                    <p className="mt-3 font-medium">
                      {c.footnotes.fn4PricingSources}
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>{c.footnotes.fn4Source1}</li>
                      <li>{c.footnotes.fn4Source2}</li>
                      <li>{c.footnotes.fn4Source3}</li>
                      <li>{c.footnotes.fn4Source4}</li>
                      <li>{c.footnotes.fn4Source5}</li>
                      <li>{c.footnotes.fn4Source6}</li>
                    </ul>
                    <p className="mt-3">{c.footnotes.fn4CaseStudy}</p>
                    <p className="mt-2">
                      {c.footnotes.fn4RegistryPre}
                      <a
                        href="https://verra.org"
                        target="_blank"
                        className="text-blue-600 underline ml-1"
                      >
                        {c.footnotes.fn4RegistryLink}
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      {c.footnotes.fn5Heading}
                    </h3>
                    <p>{c.footnotes.fn5Para1}</p>
                    <p className="mt-2">{c.footnotes.fn5Para2}</p>
                    <p className="italic mt-2">{c.footnotes.fn5Source1}</p>
                    <p className="italic">
                      <a
                        href="https://gspp.berkeley.edu/research-and-impact/centers/cepp/projects/berkeley-carbon-trading-project/offsets-database"
                        className="text-blue-600 underline"
                        target="_blank"
                      >
                        {c.footnotes.fn5Link}
                      </a>
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full md:max-w-2xl mx-auto my-6"
                    >
                      <Image
                        src={footnoteImage2}
                        alt={c.footnotes.fn5ImageAlt}
                        className="w-full h-auto max-w-none object-contain "
                      />
                    </motion.div>

                    <p className="italic mt-2">{c.footnotes.fn5Caption}</p>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full md:max-w-2xl mx-auto my-6"
                    >
                      <Image
                        src={footnoteImage1}
                        alt={c.footnotes.fn5Image2Alt}
                        className="w-full h-auto max-w-none object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </section>,
            ],
            (child) => {
              if (isValidElement(child)) {
                const element = child as React.ReactElement;

                return (
                  <motion.section
                    key={element.props.id}
                    id={element.props.id}
                    className="scroll-mt-28"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {Children.map(element.props.children, (subChild) => {
                      if (!isValidElement(subChild)) return subChild;

                      const node = subChild as React.ReactElement<{
                        className?: string;
                        children?: React.ReactNode;
                      }>;

                      if (node.type === "h2") {
                        return (
                          <motion.h2
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className={node.props.className}
                          >
                            {node.props.children}
                          </motion.h2>
                        );
                      }

                      return (
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {node}
                        </motion.div>
                      );
                    })}
                  </motion.section>
                );
              }
              return null;
            }
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default WhitepaperContent;
