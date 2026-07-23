"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import "./timeline.css";

import imgMensura from "../../../../../public/assets/images/DronLaFlorencia.webp";
import imgComunidad from "../../../../../public/assets/images/hector.png";
import imgAgua from "../../../../../public/assets/images/forest.jpg";
import imgVivienda from "../../../../../public/assets/images/forest-vertical.jpg";
import imgAsamblea from "../../../../../public/assets/images/hector.png";
import imgOfpPiloto from "../../../../../public/assets/images/forest-hd-bg.jpg";
import imgOfpFull from "../../../../../public/assets/images/forestHD.jpg";
import imgVerra from "../../../../../public/assets/images/DronLaFlorencia.webp";

interface Milestone {
  key: string;
  image: StaticImageData;
}

const MILESTONES: Milestone[] = [
  { key: "m1", image: imgMensura },
  { key: "m2", image: imgComunidad },
  { key: "m3", image: imgAgua },
  { key: "m4", image: imgVivienda },
  { key: "m5", image: imgAsamblea },
  { key: "m6", image: imgOfpPiloto },
  { key: "m7", image: imgOfpFull },
  { key: "m8", image: imgVerra },
];

const ProjectTimeline = () => {
  const t = useTranslations("ProjectTimeline");
  const [activeIndex, setActiveIndex] = useState(MILESTONES.length - 1);

  const active = MILESTONES[activeIndex];
  const progressPercent = (activeIndex / (MILESTONES.length - 1)) * 100;

  return (
    <div className="timelineSection">
      <h3 className="timelineEyebrow">{t("eyebrow")}</h3>
      <h2 className="timelineTitle">{t("title")}</h2>

      <div className="timelineTrackScroll">
        <div className="timelineTrack">
          <div className="timelineLine" />
          <div
            className="timelineLineProgress"
            style={{ width: `${progressPercent}%` }}
          />
          {MILESTONES.map((milestone, index) => (
            <button
              key={milestone.key}
              type="button"
              className={`timelineDot${index <= activeIndex ? " reached" : ""}${
                index === activeIndex ? " active" : ""
              }`}
              style={{ left: `${(index / (MILESTONES.length - 1)) * 100}%` }}
              onClick={() => setActiveIndex(index)}
              aria-label={t(`${milestone.key}-title`)}
              aria-pressed={index === activeIndex}
            >
              <span className="timelineDotDate">{t(`${milestone.key}-date`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="timelineDetail">
        <div className="timelineDetailImage">
          <Image
            src={active.image}
            alt={t(`${active.key}-title`)}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="timelineDetailText">
          <span className="timelineDetailDate">{t(`${active.key}-date`)}</span>
          <h4 className="timelineDetailTitle">{t(`${active.key}-title`)}</h4>
          <p className="timelineDetailDescription">{t(`${active.key}-desc`)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
