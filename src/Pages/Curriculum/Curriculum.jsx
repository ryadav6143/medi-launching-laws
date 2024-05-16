import React from "react";
// import "./Curriculum.css";
import "./AdvanceCurriculum.css";
import logo from "../../assets/logos/money.png";
import morallogo from "../../assets/logos/Morale.png";
import law from "../../assets/logos/Law.png";
import meeting from "../../assets/logos/Meeting.png";

function Curriculum() {
  return (
    <div className="curriculum">
      <div className="curriculum-heading">
        <p>Pedagogy & Curriculum</p>
      </div>

      <div className="curri-cards">
        <div className="curri-card">
          <div>
            <img className="cari-logo" src={morallogo} alt="" />
          </div>
          <div>
            <p>Advocacy Skills Unfurls: Beyond the Courtroom</p>
            <p>
              Our program is a creative masterpiece that uses clinical legal
              education to teach advocacy skills. Students graduate as skilled
              professionals prepared to handle the complex legal environment,
              not merely as legal scholars. They go on to work in courtroom
              litigation, alternative dispute resolution, advising roles, and
              consultancy services.
            </p>
          </div>
        </div>
        <div className="curri-card">
          <div>
            <img className="cari-logo" src={law} alt="" />
          </div>
          <div>
            <p>Leading the Future: New Frontiers in Law</p>
            <p>
              Emerging fields including artificial intelligence and law,
              entertainment law, advanced intellectual property law, internet
              law and governance, privacy law, and more are all included in the
              law papers, which forge a route into the future. Here, we create
              trends rather than just following them, enabling our students to
              be pioneers in the rapidly changing legal industry.
            </p>
          </div>
        </div>
        <div className="curri-card">
          <div>
            <img className="cari-logo" src={meeting} alt="" />
          </div>
          <div>
            <p>Mooting: A Journey in Advocacy</p>
            <p>
              Participating in our Moot Court Committee, which is run by
              instructors and students and offers a groundbreaking Moot Court
              curriculum. This mandatory credit course, which offers an in-depth
              exploration of the core of advocacy, starts in the first academic
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
