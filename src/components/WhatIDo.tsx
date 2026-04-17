import { useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useGSAP(
    () => {
      // Handle Touch devices
      if (ScrollTrigger.isTouch) {
        containerRef.current.forEach((container) => {
          if (container) {
            container.classList.remove("what-noTouch");
            container.addEventListener("click", () => handleClick(container));
          }
        });
      }

      // Title Animation
      gsap.from(".what-box h2", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Box Contents stagger animation
      gsap.from(".what-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
      });

      // Center borders animation
      gsap.from(".what-border2 svg line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        strokeDashoffset: 1000,
        strokeDasharray: "7,7",
        duration: 1.5,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="whatIDO" ref={sectionRef}>
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>MOBILE DEV</h3>
              <h4>Description</h4>
              <p>
                Building innovative, cross-platform mobile applications using Flutter with scalable architecture.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Flutter</div>
                <div className="what-tags">Dart</div>
                <div className="what-tags">GetX</div>
                <div className="what-tags">Android SDK</div>
                <div className="what-tags">iOS SDK</div>

              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND & API</h3>
              <h4>Description</h4>
              <p>
                Integrating robust backend services, real-time features and RESTful APIs to ensure secure data communication and platform stability.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Firestore</div>
                <div className="what-tags">Cloud functions</div>
                <div className="what-tags">Supabase</div>
                <div className="what-tags">Edge Functions</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">Stripe</div>
                <div className="what-tags">WebSockets</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Shared Preferences</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
