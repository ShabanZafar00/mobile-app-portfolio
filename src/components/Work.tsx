import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ProjectLink = {
  label: string;
  url?: string;
};

type Project = {
  name: string;
  category: string;
  image: string;
  links?: ProjectLink[];
  removeBackground?: boolean;
};

const sykkaImage = new URL("../assets/projects/sykka.png", import.meta.url).href;
const taxCalculatorImage = new URL("../assets/projects/taxcalculator.png", import.meta.url).href;
const medsoccially = new URL("../assets/projects/medsoccially.png", import.meta.url).href;
const blackbookemployee = new URL("../assets/projects/blackbookemployee.png", import.meta.url).href;
const blackbookpatron = new URL("../assets/projects/blackbookpatron.png", import.meta.url).href;
const blackbookadmin = new URL("../assets/projects/blackbookadmin.png", import.meta.url).href;
const alburraqdashboard = new URL("../assets/projects/alburraqdashboard.png", import.meta.url).href;
const virtualtryon = new URL("../assets/projects/virtualtryon.png", import.meta.url).href;
const projects: Project[] = [
  {
    name: "Tax Calculator",
    category: "Mobile App",
    image: taxCalculatorImage,
    links: [
      { label: "IOS App Store", url: "https://apps.apple.com/app/id6739707197" },
      { label: "Android Play Store", url: "https://play.google.com/store/apps/details?id=alburraq.taxcalculatorpk" },
    ],
  },
  {
    name: "BlackBook Patron",
    category: "Mobile App",
    image: blackbookpatron,
    links: [
      { label: "IOS App Store", url: "https://apps.apple.com/us/app/black-book-patron/id6760412318" },
      { label: "Android Play Store", url: "https://play.google.com/store/apps/details?id=com.alburraq.blackbook" }
    ],
  },
  {
    name: "BlackBook Employee",
    category: "Mobile App",
    image: blackbookemployee,
    links: [{ label: "IOS App Store", url: "https://apps.apple.com/us/app/black-book-service/id6760412468" },
      { label: "Android Play Store", url: "https://play.google.com/store/apps/details?id=com.alburraq.blackbook.employee" }
    ],
  },
  {
    name: "BlackBook Admin",
    category: "Admin Portal",
    image: blackbookadmin,
    links: [
      { label: "IOS App Store", url: "https://apps.apple.com/us/app/black-book-admin/id6760412424" },
      { label: "Android Play Store", url: "https://play.google.com/store/apps/details?id=com.alburraq.blackbook.admin" }
    ],
  },
  {
    name: "Med Socially",
    category: "Social Media App",
    image: medsoccially,
    links: [{ label: "IOS App Store", url: "https://apps.apple.com/app/id6760175319" }],
  },
  {
    name: "Sykka.Ai",
    category: "AI Chat Application",
    image: sykkaImage,
    links: [{ label: "IOS App Store", url: "https://apps.apple.com/pk/app/sykka/id6751640375" }],
  },
  {
    name: "Al-Burraq Dashboard",
    category: "Admin Dashboard",
    image: alburraqdashboard,
    links: [{ label: "Available on TestFlight for Authenticated Users" }],
  },
  {
    name: "Virtual Try-On",
    category: "E-commerce & AI",
    image: virtualtryon,
    links: [{ label: "University Final Year Project" }],
  },
  // {
  //   name: "Trip Planner",
  //   category: "Mobile App",
  //   image: tripplanner,
  //   links: [{ label: "Live Portal", url: "https://example.com/trip-planner" }],
  // },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a smooth fade and slide up animation for each project box
      const boxes = gsap.utils.toArray(".work-box");
      boxes.forEach((box: any) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // Animates when top of box hits 80% of viewport
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <h3 className="work-serial">0{index + 1}</h3>
                <div className="work-title">
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="work-links" aria-label={`${project.name} links`}>
                    {project.links.map((link) =>
                      link.url ? (
                        <a
                          key={`${project.name}-${link.label}`}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-link-pill"
                        >
                          <span>{link.label}</span>
                        </a>
                      ) : (
                        <span key={`${project.name}-${link.label}`} className="work-link-pill">
                          {link.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="work-image-wrapper">
                <WorkImage
                  image={project.image}
                  alt={project.name}
                  removeBackground={project.removeBackground}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
