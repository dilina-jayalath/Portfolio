import React from "react";
import { FiAward, FiCheckSquare, FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import {
  additionalCertificate,
  certificateGuidance,
} from "../data/academicPortfolioData";
import certificatePdf from "../data/Python_for_Beginners_E-Certificate.pdf";
import ciscoPreviewPdf from "../data/JKADSPJayalath-AITSDCybersecuri-certificate.pdf";

const CourseEvidence = () => {
  const {
    suggestedCourse,
    provider,
    academy,
    location,
    completionDate,
    verificationUrl,
    verificationCode,
    reason,
    checklist,
    note,
  } = certificateGuidance;
  const {
    title: additionalTitle,
    provider: additionalProvider,
    academy: additionalAcademy,
    location: additionalLocation,
    completionDate: additionalCompletionDate,
    learner,
    reason: additionalReason,
  } = additionalCertificate;

  return (
    <section name="course" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="portfolio-panel rounded-[2rem] p-8">
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Course evidence
            </p>
            <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Certificate section prepared for final submission
            </h2>
            <p className="theme-copy mt-5 text-lg leading-8">
              The assignment requires evidence of a course that improved a
              technical or soft skill. This portfolio now includes the actual
              certificate PDF for the course shown here:
            </p>

            <div className="theme-soft-panel mt-8 rounded-[1.75rem] p-6">
              <div className="theme-badge-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                <FiAward size={14} />
                Evidence item
              </div>
              <h3 className="theme-heading font-display mt-4 text-3xl font-semibold">
                {suggestedCourse}
              </h3>
              <p className="theme-copy mt-4 text-sm leading-7 sm:text-base">
                {reason}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                  Provider: {provider}
                </div>
                <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                  Academy: {academy}
                </div>
                <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                  Location: {location}
                </div>
                <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                  Completed: {completionDate}
                </div>
                <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                  Verification code: {verificationCode}
                </div>
              </div>

              <p className="theme-copy mt-5 text-sm leading-7 sm:text-base">
                The course gave me a stronger base in Python syntax, logic, and
                structured problem solving. That foundation has supported later
                work in Python-based projects, especially when building AI tools,
                backend workflows, and experimental systems.
              </p>
            </div>

            <div className="theme-warm-panel mt-8 rounded-[1.75rem] border-dashed p-6">
              <p className="theme-warm-text text-sm leading-7 sm:text-base">
                {note}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="portfolio-panel rounded-[2rem] border-dashed p-8">
              <div className="flex items-center gap-3">
                <div className="theme-icon-accent rounded-2xl p-3">
                  <FiFileText size={20} />
                </div>
                <h3 className="theme-heading font-display text-3xl font-semibold">
                  Cisco certificate preview
                </h3>
              </div>

              <div className="theme-placeholder-canvas mt-8 overflow-hidden rounded-[1.75rem]">
                <object
                  data={`${ciscoPreviewPdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="h-[34rem] w-full"
                >
                  <iframe
                    src={`${ciscoPreviewPdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                    title="Cisco certificate preview"
                    className="h-[34rem] w-full"
                  />
                </object>
              </div>

              <div className="theme-soft-panel mt-5 rounded-[1.5rem] p-5">
                <div className="theme-badge-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                  <FiAward size={14} />
                  Additional certificate
                </div>
                <h4 className="theme-heading font-display mt-4 text-2xl font-semibold">
                  {additionalTitle}
                </h4>
                <p className="theme-copy mt-3 text-sm leading-7 sm:text-base">
                  {additionalReason}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                    Provider: {additionalProvider}
                  </div>
                  <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                    Academy: {additionalAcademy}
                  </div>
                  <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                    Location: {additionalLocation}
                  </div>
                  <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal">
                    Completed: {additionalCompletionDate}
                  </div>
                  <div className="theme-chip rounded-[1.25rem] px-4 py-3 text-sm font-medium normal-case tracking-normal sm:col-span-2">
                    Learner: {learner}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={ciscoPreviewPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
                >
                  Open Cisco certificate
                  <FiExternalLink size={16} />
                </a>
                <a
                  href={certificatePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
                >
                  Open Python certificate
                  <FiExternalLink size={16} />
                </a>
                <a
                  href={ciscoPreviewPdf}
                  download
                  className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
                >
                  Download Cisco PDF
                  <FiDownload size={16} />
                </a>
                <a
                  href={certificatePdf}
                  download
                  className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
                >
                  Download Python PDF
                  <FiDownload size={16} />
                </a>
                <a
                  href={verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
                >
                  Verification site
                  <FiExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="portfolio-card rounded-[2rem] p-7">
              <div className="flex items-center gap-3">
                <div className="theme-icon-warm rounded-2xl p-3">
                  <FiCheckSquare size={18} />
                </div>
                <h3 className="theme-heading font-display text-3xl font-semibold">
                  Final evidence checklist
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="theme-bullet mt-[10px] h-2 w-2 shrink-0 rounded-full" />
                    <p className="theme-copy text-sm leading-7 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseEvidence;
