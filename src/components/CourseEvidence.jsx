import React from "react";
import {
  FiAward,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import introCyberBadge from "../data/introduction-to-cybersecurity.png";
import introCyberPdf from "../data/JKADSPJayalath-AITSDIntro Cyber-certificate.pdf";
import pythonCertificatePdf from "../data/Python_for_Beginners_E-Certificate.pdf";
import cyberEssentialsPdf from "../data/JKADSPJayalath-AITSDCybersecuri-certificate.pdf";
import { certificateEvidence } from "../data/academicPortfolioData";

const certificateItems = [
  {
    title: "Python for Beginners",
    pdf: pythonCertificatePdf,
    icon: FiCode,
    tone: "accent",
  },
  {
    title: "Cybersecurity Essentials",
    pdf: cyberEssentialsPdf,
    icon: FiShield,
    tone: "warm",
  },
  {
    title: "Introduction to Cybersecurity",
    pdf: introCyberPdf,
    image: introCyberBadge,
    icon: FiAward,
    tone: "accent",
  },
].map((certificate) => ({
  ...certificate,
  details: certificateEvidence.find((item) => item.title === certificate.title),
}));

const CertificatePreview = ({ certificate }) => {
  if (certificate.image) {
    return (
      <div className="theme-placeholder-canvas aspect-[1.414/1] overflow-hidden rounded-[1.5rem]">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate badge`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="theme-placeholder-canvas flex aspect-[1.414/1] flex-col justify-center rounded-[1.5rem] p-6">
      <FiFileText className="theme-accent-text" size={38} />
      <p className="theme-eyebrow mt-5 text-xs font-semibold uppercase tracking-[0.24em]">
        {certificate.details?.provider || "Certificate evidence"}
      </p>
      <p className="theme-heading mt-3 text-xl font-semibold">
        {certificate.title}
      </p>
      <p className="theme-copy mt-3 text-sm leading-6">
        {certificate.details?.focus ||
          "Certificate preview is available through the PDF link below."}
      </p>
    </div>
  );
};

const CertificateCard = ({ certificate }) => {
  const Icon = certificate.icon;
  const iconClass =
    certificate.tone === "warm" ? "theme-icon-warm" : "theme-icon-accent";
  const badgeClass =
    certificate.tone === "warm" ? "theme-badge-warm" : "theme-badge-accent";

  return (
    <article className="portfolio-panel flex h-full flex-col rounded-[2rem] p-6">
      <div className="flex items-start gap-4">
        <div className={`${iconClass} shrink-0 rounded-2xl p-3`}>
          <Icon size={20} />
        </div>
        <div>
          <span
            className={`${badgeClass} inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]`}
          >
            Certificate
          </span>
          <h3 className="theme-heading font-display mt-3 text-2xl font-semibold">
            {certificate.title}
          </h3>
          {certificate.details?.date && (
            <p className="theme-copy-soft mt-2 text-sm">
              Completed: {certificate.details.date}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <CertificatePreview certificate={certificate} />
      </div>

      {certificate.details?.value && (
        <p className="theme-copy mt-5 text-sm leading-7">
          {certificate.details.value}
        </p>
      )}

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={certificate.pdf}
          target="_blank"
          rel="noreferrer"
          className="theme-button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
        >
          Open certificate
          <FiExternalLink size={16} />
        </a>
        <a
          href={certificate.pdf}
          download
          className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
        >
          Download PDF
          <FiDownload size={16} />
        </a>
      </div>
    </article>
  );
};

const CourseEvidence = () => {
  return (
    <section name="course" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
            Course evidence
          </p>
          <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Certificates
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {certificateItems.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseEvidence;
