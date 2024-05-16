import React, { useRef } from "react";
import Header from "../../Components/Header/Header";
import Footers from "../../Components/Footers/Footers";
import MediStaff from "../Designs/MediStaff";
import yukta from "../../assets/images/Yukta Khandari.jpg";
import barcouncil from "../../assets/images/Logo_of_Bar_Council_of_India.png";
import FAQ from "../FAQ/FAQ";
import File from "../Musat/File";
import Steps from "../ApplySteps/Steps";
import ugc from "../../assets/images/UGC_India_Logo.png";
import toponepercent from "../../assets/logos/top.png";

import "./Advance.css";
import coma from "../../assets/images/coma.png";
import Curriculum from "../Curriculum/Curriculum";

function Home() {
   if (!sessionStorage.getItem("hasRefreshed")) {
    sessionStorage.setItem("hasRefreshed", "true");
    window.location.reload();
  }
  const enquirform = useRef(null);
  const scrollToSection = (id) => {
    enquirform.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <div>
        <div>
          <Header></Header>
        </div>
        <div className="container-1">
          <div className="c1-section-1">
            <div id="c1-text">
              <p>Pursue a Degree in Law</p>
              <span>
                <p style={{ fontSize: "25px" }}> AT MEDICAPS,</p>
                <p> THE NO. 1</p>
                <p style={{ fontSize: "45px" }}> PRIVATE UNIVERSITY</p>
              </span>
              <p> for Law Studies in India.</p>
            </div>
            <div className="sliders">
              <div>
                <p className="slider-heading">
                  Empowering Dreams <br /> through <br />
                  <span>Top Placements.</span>
                </p>
                <div className="slider-card-1">
                  <div className="st-img">
                    <img src={yukta} alt="" />
                  </div>
                  <div className="student-detail">
                    <p> Yukta Kandhari</p>
                    <div>
                      <img
                        style={{ width: "90px", height: "30px" }}
                        src={toponepercent}
                        alt=""
                      />
                    </div>
                    <p> Batch 2023</p>
                    <p> Package 48 LPA</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide-card-main">
                  <div className="slider-card-2">
                    <div className="bar-council">
                      <p>APPROVED BY</p>
                      <span>
                        <p>BCI (BAR </p>
                        <p>COUNCIL OF </p>
                        <p>INDIA)</p>
                      </span>
                    </div>
                    <div>
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        src={barcouncil}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="slider-card-2">
                    <div className="bar-council">
                      <p>APPROVED BY</p>
                      <span>
                        <p>UGC (University </p>
                        <p>Grants </p>
                        <p>Commission)</p>
                      </span>
                    </div>
                    <div>
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        src={ugc}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c1-section-2" ref={enquirform}>
            <div id="med-form">
              <div
                class="npf_wgts"
                data-height="450px"
                data-w="3dd35188e1d58453c568795b929814f6"
              ></div>
            </div>
          </div>
        </div>

        <div className="apply-btn">
          <button onClick={scrollToSection}>APPLY NOW</button>
        </div>

        <div className="container-2">
          <div className="cards">
            <div className="card">
              <div className="card-sub-div">
                <p className="card-head">RANKED 1st</p>
                <p className="card-content">
                  In Placement in Madhya Pradesh <br /> by Times Engineering
                  Survey 2022
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-sub-div">
                <p className="card-head">RANKED 32nd</p>
                <p className="card-content">
                  In Placement in India by i3RC <br /> Times Engineering Survey
                  2021.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-sub-div">
                <p className="card-head">
                  HIGHEST <br /> PLACEMENTS
                </p>
                <p className="card-content">
                  Offers by The Companies <br /> in MP, CG
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="conatiner-3" id="whyus">
          <div className="c-3-heading">
            <p>WHY LAW AT MEDICAPS?</p>
          </div>
          <div className="why-law">
            <div className="law-cards lc-1"></div>
            <div className="law-cards lc-2"></div>
            <div className="law-cards lc-3"></div>
          </div>
        </div>
        <div className="staff-section" style={{ marginTop: "50px" }}>
          <MediStaff></MediStaff>
        </div>

        <div className="container-4" id="scholar">
          <div className="c-4-heading">
            <p>SCHOLARSHIP</p>
          </div>
          <div className="sub-c-4">
            <div>
              <p className="c4-text">
                SEIZE YOUR SEAT & <br /> GET A GOLDEN CHANCE TO <br /> EARN
                SCHOLARSHIP UPTO
              </p>
            </div>
            <div className="c4-num">
              <p>
                <span>10</span>
                <br /> CR
              </p>
            </div>
          </div>
        </div>
        <div>
          <File></File>
        </div>
        <div className="container-6">
          <div className="c6-sub">
            <div className="chancalor-img"></div>
            <div className="chancalor-quote">
              <img src={coma} alt="" />
              <p>
                Education is the only tool for enhancing the skills of future
                technocrats and professionals.
              </p>
              <span style={{ fontStyle: "italic" }}>- Shri R.C. Mittal</span>
            </div>
          </div>
        </div>

        <div className="container-7" id="offeredcourses">
          <div className="c7-head">
            <p>PROGRAMS OFFERED</p>
          </div>
          <div className="c7-subcon">
            <div className="c7-card">
              <p>B.A - LL.B.</p>
              <p>
                Explore the rich tapestry of legal education with our carefully
                designed BA LLB (Hons.) program, which has been brought into
                compliance with international norms.
              </p>
            </div>
            <div className="c7-card">
              <p>BBA - LL.B.</p>
              <p>
                This special program, acknowledged as the best BBA LLB (Hons.)
                college in India with UGC approval, combines important legal
                courses with the core components of business education.
              </p>
            </div>
            <div className="c7-card">
              <p>LL.B. (Hons.)</p>
              <p>
                LL.B. (Hons.) is a degree program that offers detailed legal
                education and training. It equips students with comprehensive
                knowledge and skills which are essential for a successful career
                in the field of law.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Curriculum></Curriculum>
        </div>
        <div className="step-container">
          <div className="step-heading">
            <p>HOW TO APPLY?</p>
          </div>
          <Steps></Steps>
        </div>
        <div>
          <FAQ></FAQ>
        </div>
        <div className="container-10"></div>
        <Footers></Footers>
      </div>
    </>
  );
}

export default Home;
