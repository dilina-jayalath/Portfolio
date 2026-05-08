import React from "react";
import ME from "../assets/me2.jpg";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";
import cvImage from "../assets/Screenshot 2026-05-09 020845.png";
import portfolioQr from "../assets/portfolio-qr.svg";
import {
  careerTimeline,
  certificateEvidence,
  cvSections,
  developmentPriorities,
  introductionCards,
  profileSummaryHighlights,
  reflectionEntries,
} from "../data/academicPortfolioData";
import { additionalProjects, featuredProjects } from "../data/portfolioData";
import introCyberBadge from "../data/introduction-to-cybersecurity.png";
import introCyberPdf from "../data/JKADSPJayalath-AITSDIntro Cyber-certificate.pdf";
import pythonCertificatePdf from "../data/Python_for_Beginners_E-Certificate.pdf";
import cyberEssentialsPdf from "../data/JKADSPJayalath-AITSDCybersecuri-certificate.pdf";

const skillBars = [
  ["React.js", 88],
  ["JavaScript", 86],
  ["Java", 82],
  ["Python", 80],
  ["Node.js", 76],
  ["SQL", 74],
  ["Kotlin", 70],
  ["MongoDB", 68],
];

const certificateFiles = [
  ["Python for Beginners", pythonCertificatePdf],
  ["Cybersecurity Essentials", cyberEssentialsPdf],
  ["Introduction to Cybersecurity", introCyberPdf, introCyberBadge],
];

const printProjects = [
  ...featuredProjects.map((project) => ({
    title: project.title,
    meta: `${project.category} | ${project.year} | ${project.language}`,
    description: project.summary,
    stack: project.stack,
    highlights: project.highlights,
    link: project.codeLink,
  })),
  ...additionalProjects.slice(0, 3).map((project) => ({
    title: project.title,
    meta: `${project.type} | ${project.year}`,
    description: project.summary,
    stack: [project.type],
    highlights: ["Coursework evidence", "GitHub repository", "Practical implementation"],
    link: project.codeLink,
  })),
];

const certificateDetails = certificateEvidence.map((item) => {
  const [, pdf, image] =
    certificateFiles.find(([title]) => title === item.title) || [];

  return {
    ...item,
    pdf,
    image,
  };
});

const Page = ({ eyebrow, title, children, className = "" }) => (
  <section className={`print-page ${className}`}>
    <div className="print-page-glow" />
    {eyebrow && <p className="print-eyebrow">{eyebrow}</p>}
    {title && <h2 className="print-title">{title}</h2>}
    {children}
  </section>
);

const MiniCard = ({ title, children }) => (
  <article className="print-card">
    <h3>{title}</h3>
    <div>{children}</div>
  </article>
);

const CertificatePreview = ({ certificate }) => (
  <article className="print-certificate">
    <p className="print-kicker">Certificate</p>
    <h3>{certificate.title}</h3>
    {certificate.image && (
      <div className="print-certificate-frame">
        <img src={certificate.image} alt={`${certificate.title} certificate`} />
      </div>
    )}
    <div className="print-certificate-details">
      <strong>{certificate.provider}</strong>
      <span>{certificate.date}</span>
      <p>{certificate.focus}</p>
      <p className="print-muted">{certificate.value}</p>
      {certificate.pdf && <small>Evidence file attached in portfolio source.</small>}
    </div>
  </article>
);

const PrintablePortfolio = () => {
  const { contacts, education, experience, certifications, summary } =
    cvSections;

  return (
    <div className="print-portfolio" aria-hidden="true">
      <Page className="print-cover">
        <div className="print-cover-copy">
          <p className="print-location">Sri Lanka</p>
          <h1>Dilina Jayalath</h1>
          <p className="print-role">Software Engineering Undergraduate</p>
          <h2>Academic and Career Portfolio</h2>
          <p>
            Software engineering undergraduate focused on practical web
            development, AI-supported problem solving, and professional growth.
          </p>
          <div className="print-tags">
            <span>React</span>
            <span>Java</span>
            <span>Python</span>
            <span>Full Stack</span>
          </div>
          <div className="print-cover-link-row">
            <a
              className="print-cover-url"
              href="https://dilinajayalath.vercel.app/"
            >
              Portfolio web site
            </a>
            <div className="print-cover-qr">
              <img src={portfolioQr} alt="Portfolio website QR code" />
            </div>
          </div>
        </div>
        <div className="print-portrait-wrap">
          <img src={ME} alt="Dilina Jayalath" />
        </div>
      </Page>

      <Page eyebrow="About me" title="Curious, practical, and career focused.">
        <div className="print-two-col">
          <div className="print-lead">
            <p>
              I am a Software Engineering undergraduate at SLIIT with a strong
              interest in turning ideas into useful digital products. My work
              combines clear interface design, structured implementation, and
              practical value for users.
            </p>
            <p>
              My academic projects and internship experience have helped me
              grow in React, Java, JavaScript, Python, Kotlin, and
              database-backed application development.
            </p>
          </div>
          <div className="print-stack">
            {introductionCards.map((item, index) => (
              <MiniCard key={item.title} title={`${index + 1}. ${item.title}`}>
                <p>{item.text}</p>
              </MiniCard>
            ))}
          </div>
        </div>
      </Page>

      <Page eyebrow="Skills" title="Technical toolkit.">
        <div className="print-skill-grid">
          {skillBars.map(([name, value]) => (
            <div className="print-skill" key={name}>
              <div>
                <span>{name}</span>
                <strong>{value}%</strong>
              </div>
              <i style={{ width: `${value}%` }} />
            </div>
          ))}
        </div>
        <div className="print-priority-grid">
          {developmentPriorities.map((group) => (
            <MiniCard key={group.title} title={group.title}>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MiniCard>
          ))}
        </div>
        <div className="print-inline-experience">
          <div>
            <p className="print-eyebrow">Experience</p>
            <h3>Industry exposure and delivery practice.</h3>
          </div>
          <div className="print-timeline print-compact-timeline">
          {experience.map((item, index) => (
            <article key={item.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="print-muted">{item.subtitle}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
          </div>
        </div>
      </Page>

      <Page eyebrow="Projects" title="Selected academic and practical work.">
        <div className="print-project-grid">
          {printProjects.map((project) => (
            <article className="print-card print-project-card" key={project.title}>
              <p className="print-kicker">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="print-mini-tags">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul>
                {project.highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Page>

      <Page eyebrow="Certifications & education" title="Credentials and learning milestones.">
        <div className="print-two-col print-education-page">
          <div className="print-stack">
            <MiniCard title="Education">
              {education.map((item) => (
                <div className="print-list-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                  <p className="print-muted">{item.detail}</p>
                </div>
              ))}
            </MiniCard>
            <MiniCard title="Certifications">
              <ul>
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MiniCard>
          </div>
          <div className="print-cert-grid">
            {certificateDetails.map((certificate) => (
              <CertificatePreview
                key={certificate.title}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </Page>

      <Page eyebrow="Reflective journal" title="Academic reflection.">
        <div className="print-reflection-intro">
          <p>
            Preparing for Professional World helped me connect academic work,
            employability, and professional identity. The reflections below show
            how I moved from simply completing tasks toward building evidence,
            communicating progress, and planning realistic career development.
          </p>
        </div>
        <div className="print-reflection-grid">
          {reflectionEntries.map((entry) => (
            <MiniCard key={entry.id} title={entry.title}>
              <p>{entry.reflection}</p>
              <p className="print-muted">{entry.impact}</p>
            </MiniCard>
          ))}
        </div>
      </Page>

      <Page eyebrow="Career plan" title="Roadmap toward professional growth.">
        <div className="print-timeline">
          {careerTimeline.map((item, index) => (
            <article key={item.phase}>
              <span>{index + 1}</span>
              <div>
                <p className="print-kicker">{item.phase}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.goals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Page>

      <Page eyebrow="CV" title="Profile summary." className="print-cv-page">
        <div className="print-cv-full">
          <div className="print-cv-panel">
            <h3>Curriculum Vitae</h3>
            <p>{summary}</p>
            <ul>
              {profileSummaryHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="print-stat-grid">
              <span>Software Engineering Undergraduate</span>
              <span>1 Year Internship Experience</span>
              <span>React, Java, Python, Kotlin</span>
              <span>Full-stack Web Development</span>
            </div>
          </div>
          <div className="print-cv-image-panel">
            <h3>CV Snapshot</h3>
            <p>
              Full CV PDF: <strong>Dilina_Jayalath_Resume.pdf</strong>
            </p>
            <a href={resumeFile}>Open attached CV</a>
            <div className="print-cv-image-slot">
              <img src={cvImage} alt="Dilina Jayalath CV snapshot" />
            </div>
          </div>
        </div>
      </Page>

      <Page eyebrow="Contact" title="Let's build something useful.">
        <div className="print-contact-grid">
          {contacts.map((item) => (
            <MiniCard key={item.label} title={item.label}>
              <p>{item.value}</p>
            </MiniCard>
          ))}
        </div>
      </Page>
    </div>
  );
};

export default PrintablePortfolio;
