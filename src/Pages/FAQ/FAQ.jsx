import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";
import leaf from "../../assets/images/leaf.png";
import abstractr from "../../assets/images/abcract.png";
import vector from "../../assets/images/Vector.png";
import abstractl from "../../assets/images/abstract2.png";
function FAQ() {
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };
  const sections = [
    {
      summary:
        "Are all these Law Programs approved by the Bar Council of India?",
      detail:
        " Yes, all the programs are approved by the Bar Council of India (BCI), ensuring compliance with the highest standards set by the regulatory body.",
    },
    {
      summary:
        "What is the difference between BBA LLB (Hons) and BA LLB (Hons)?",
      detail:
        "The key distinction lies in the components of BBA and BA. BBA LLB (Hons) primarily focuses on the intersection of business and law, while BA LLB (Hons) emphasizes the interface of law and society, which has nurturing capacity for litigation. Both programs share identical law components and elective courses which are available to complement the respective BA or BBA components.",
    },
    {
      summary: "Are legal publications and books available in the Law Library?",
      detail:
        "The School of Law library boasts a contemporary collection comprising 3542 books, journals, and reports. The library subscribes to online databases, facilitating easy access to legal resources. Equipped with the KOHA V17 - Integrated Library Management System and Online, students can efficiently search and utilize the library's extensive collection. ",
    },
    {
      summary: "What skills a law graduate must possess?",
      detail:
        " A law graduate should demonstrate a broad spectrum of skills and ethics. The comprehensive 5-year program supposed to have proficiency in communication, both in English and vernacular languages, is essential. A keenly logical mind aids in understanding the law, analyzing factual matrices, and constructing robust arguments",
    },
    {
      summary: "Is the university responsible for arranging internships?",
      detail:
        " The university takes responsibility for internship arrangements through a dedicated career services team. This team collaborates closely with senior faculty members and industry stakeholders to facilitate summer internships and final placements, ensuring that students have access to appropriate and meaningful opportunities aligned with their career aspirations.",
    },
  ];

  return (
    <>
      <div className="faq-section">
        <div className="faq-elements">
          <div className="leaf">
            <img src={leaf} alt="" />
          </div>
          <div className="abstract-1">
            <img src={abstractr} alt="" />
          </div>
          <div className="abstract-2">
            <img src={vector} alt="" />
          </div>
          <div className="abstract-2 ab-3">
            <img src={vector} alt="" />
          </div>
          <div className="abstract-1 ab-4">
            <img src={abstractl} alt="" />
          </div>
        </div>
        <div className="illustrations">
          <p>frequently asked <br /> questions</p>
        </div>

        <div className="faq-body">
          <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
            {sections.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.summary}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.detail} </p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FAQ;
