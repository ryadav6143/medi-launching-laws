import React from "react";
import "./AdvanceFile.css";

function File() {
  return (
    <>
      <div>
        <div className="sats">
          <div className="sat-card-1">
            <div>
              <p className="card-heading">MU-SAT Advantages:</p>
              <p className="card-text">
                Medicaps University Scholarship cum Admission Test (MU-SAT 2024)
                is a national-level entrance exam and scholarship test mandatory
                for admission in Integrated Law programs, Engineering,
                Management, Agriculture, Pharmacy, Science, and Art Humanities &
                Social Science. The amount of the scholarship depends on the
                performance of the student in MU-SAT 2024 & the fee of the
                program.
              </p>
              <p className="card-heading">
                Programs for which MU-SAT 2024 Exam is Compulsory:
              </p>
              <div className="list">
                <ul>
                  <li>B.A-LL.B.</li>
                  <li>BBA-LL.B.</li>
                  <li>LL.B(Hons)</li>
                </ul>
              </div>
              <div>
                <button className="apn-btn" style={{ marginTop: "30px" }}>
                  <a href="#">APPLY NOW</a>
                </button>
              </div>
            </div>
          </div>
          <div className="sat-card-1 sat-card-2">
            <div>
              <div>
                <p className="card-heading">MU-SAT PHASE-1</p>
                <p className="card-text">Mock Test: 30th & 31st May, 2024</p>
                <p className="card-text">Final Test: 1st & 2nd June, 2024</p>
              </div>
              <div>
                <p className="card-heading">MU-SAT PHASE-2</p>
                <p className="card-text">Mock Test: 18th &19th June, 2024</p>
                <p className="card-text">Final Test: 20th & 21st June, 2024</p>
              </div>
              <div>
                <p className="card-heading">MU-SAT PHASE-3</p>
                <p className="card-text">Mock Test: 16th-August-2024</p>
                <p className="card-text">Final Test: 17th-August-2024</p>
              </div>

              <div>
                <p className="card-heading">LAW SCHOLARSHIP</p>
              </div>
              <div className="list">
                <ul>
                  <li>For CLAT Aspirants</li>
                  <li>For Non- CLAT Aspirants</li>
                </ul>
              </div>
              <div>
                <p className="card-heading">MERITORIOUS STUDENTS</p>
              </div>
              <div className="list">
                <ul>
                  <li>Students securing 95% marks in 12th and above</li>
                </ul>
              </div>
              <div>
                <button className="apn-btn">
                  <a href="#">APPLY NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default File;
