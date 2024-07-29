import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Coimbatore Institute of Technology</h3>
          <p>CGPA: 7.84 (2023-Present)</p>
        </div>
        <div className="education-item">
          <h3>Kongu Vellalar Matric Higher Sec School</h3>
          <p>Grade 12, HSC (2021-2022) - Percentage: 87.4</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
