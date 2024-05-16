import React from "react";
import "./Steps.css";
import arrow1 from "../../assets/images/Arc.png";
import arrow2 from "../../assets/images/Arc1.png";

function Steps() {
  return (
    <>
      <div className="stepsforpc">
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
          </div>
        </div>
        <div className="steps">
          <div className="step-text">
            <div>
              <p>Step 1:</p>
              <p>Register Yourself</p>
            </div>
          </div>
          <div className="step-text">
            <div>
              <p>Step 2:</p>
              <p>Fill Online</p>
              <p>Application Form</p>
            </div>
          </div>
          <div className="step-text">
            <div>
              <p>Step 3:</p>
              <p>Pay Application</p>
              <p>Fee</p>
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <div style={{ marginTop: "-50px" }}>
          <img src={arrow1} alt="" />
        </div>
        <div>
          <img src={arrow2} alt="" />
        </div>
      </div>
      <div className="stepsformob">
        <div className="stepnumformobile">
          <div className="step-num">1</div>
        </div>
        <div className="step-text">
          <div>
            <p>Step 1:</p>
            <p>Register Yourself</p>
          </div>
        </div>
        <div className="stepnumformobile">
          <div className="step-num">2</div>
        </div>
        <div className="step-text">
          <div>
            <p>Step 2:</p>
            <p>Fill Online</p>
            <p>Application Form</p>
          </div>
        </div>
        <div className="stepnumformobile">
          <div className="step-num">3</div>
        </div>
        <div className="step-text">
          <div>
            <p>Step 3:</p>
            <p>Pay Application</p>
            <p>Fee</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
