import React from "react";
//import { TrustedByStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import {PropsPractice2Style} from "./props-practice2-style";

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="child">
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
      <span className="numbers">{number}</span>
      <span className="details">{label}</span>
    </div>
  );
};

const PropsPractice2 = () => {
  const trustedData = [
    {
      icon: faBuildingColumns,
      number: "100+",
      label: "Colleges",
    },
    {
      number: "150",
      label: "Professional Trainers",
    },
    {
      number: "1000+",
      label: "Study Materials",
    },
    {
      number: "100000+",
      label: "Students",
    },
  ];

  return (
    <PropsPractice2Style>
      <h1>Trusted By</h1>
      <div className="parent">
        {trustedData.map((item, index) => (
          <StatCard
            key={index}
            icon={item.icon}
            number={item.number}
            label={item.label}
          />
        ))}
      </div>
    </PropsPractice2Style>
  );
};

export default PropsPractice2;
