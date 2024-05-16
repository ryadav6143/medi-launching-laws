import React from "react";
import "./Footers.css";
import whitelogo from "../../assets/logos/med-logo-white.png";
import facebook from "../../assets/logos/facebook.png";
import instagram from "../../assets/logos/instagram.png";
import twitter from "../../assets/logos/twitter.png";
import youtube from "../../assets/logos/youtube.png";
import linkedin from "../../assets/logos/linkedin.png";
import locationlogo from "../../assets/logos/location.png";
import tel from "../../assets/logos/telephone.png";
import whatlogo from "../../assets/logos/whatsapp.png";
import emaillogo from "../../assets/logos/mail.png";

function Footers() {
  const phoneNumber = "07969024451";
  return (
    <>
      <div className="footer">
        <div className="f-white-logo">
          <img src={whitelogo} />
        </div>
        <div className="f-contact-us">
          <p className="c-heading">ADDRESS</p>
          <div className="flex-div">
            <div>
              <img src={locationlogo} className="other-logos loc-logo" alt="" />
            </div>
            <div>
              <span>
                MediCaps University A.B. Road, Pigdamber, Rau <br /> Indore
                453331
              </span>
            </div>
          </div>
        </div>
        <div className="further-info">
          <p className="info-heading">CONTACT US</p>
          <div className="flex-div" style={{ marginBottom: "10px" }}>
            <div>
              <img src={tel} className="other-logos" alt="" />
            </div>
            <div>
              <a
                href={`tel:${phoneNumber}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                {phoneNumber}
              </a>
            </div>
          </div>
          <div className="flex-div">
            <div>
              <img src={whatlogo} className="other-logos" alt="" />
            </div>
            <div>
              <a
                href="https://wa.me/7723019450"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <p>7723019450</p>
              </a>
            </div>
          </div>
          <div className="flex-div">
            <div>
              <img src={emaillogo} className="other-logos" alt="" />
            </div>
            <div>
              <p>admission@medicaps.ac.in</p>
            </div>
          </div>

          <div className="social-logos">
            <div>
              <a
                href="https://www.facebook.com/medicapsuniversityindore/"
                target="_blank"
              >
                <img src={facebook} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/medicaps_university/"
                target="_blank"
              >
                <img src={instagram} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/school/medicaps-university-indore/"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/channel/UCSeSaSzuPcLY8f0Zov01ZuQ/videos"
                target="_blank"
              >
                <img src={youtube} style={{ width: "35px", height: "35px" }} />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Medicaps_Indore" target="_blank">
                <img src={twitter} style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>
          <p>Designed and Developed By Corusview </p>
        </div>
        <div>
          <a
            href="https://www.medicaps.ac.in/privacy-policy.php"
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
            <p id="privacy">Privacy Policy | Terms of Use</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footers;
