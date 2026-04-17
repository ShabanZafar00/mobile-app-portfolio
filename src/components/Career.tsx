import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>AL-Burraq Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and maintained cross-platform mobile apps using Flutter. Implemented scalable state management, clean architecture, integrated Firebase services, REST APIs, and secure payment gateways.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor’s in CS</h4>
                <h5>Bahria University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a Bachelor's in Computer Science with a strong focus on software engineering concepts, application design and development.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary</h4>
                <h5>Govt College Gulberg</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built a strong foundation in science and mathematics, preparing for advanced studies in the field of computer science and software development.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
