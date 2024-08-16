
import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  const handleBack = () => {
    window.location.href = '/user-dashboard';
  };

  return (
    <div className="container">
      <div className="column left">
        <img 
          src="https://www.enableme.ke/global/topics/living/image-thumb__855__header-image_auto_0d16de8906fb04abe1c064d2108dd376/barrier~-~media--60c2f037--query.webp" 
          alt="Educational Concept"
        />
        <p>
          Smart Home Technologies: Devices that enable independent living, such as automated lighting or voice-activated assistants.
          <br />Telehealth: Remote healthcare services, including virtual consultations and therapy sessions.
          <br />Holistic and Integrated Care Models Whole-Person Care: Addressing physical, emotional, and social needs comprehensively.
          <br />Integrated Care Networks: Coordinated care involving various service providers and community resources.
          <br />Legislation and Policy Development Rights and Protections: Laws ensuring accessibility, anti-discrimination, and equal opportunities.
          <br />Funding and Support Programs: Government and non-profit initiatives to provide financial assistance and services.
        </p>
      </div>
      <div className="column center">
        <img 
          src="https://images.herzindagi.info/image/2024/May/disability-main-2.jpg" 
          alt="User Icon"
        />
        <p>
          Access to Services Geographical Barriers: Limited services in rural or remote areas.
          <br />Financial Constraints: High costs of care and insufficient funding or insurance coverage.
          <br />Social Stigma and Discrimination Misconceptions: Overcoming societal biases and stereotypes about disabilities.
          <br />Advocacy: Promoting awareness and understanding to foster inclusivity.
          <br />Caregiver Stress and Burnout Support for Caregivers: Providing resources and respite for those caring for individuals with disabilities to prevent burnout.
        </p>
        <button type="button" id="b1" onClick={handleBack}>Back</button>
      </div>
      <div className="column right">
        <img 
          src="https://static-prod.adweek.com/wp-content/uploads/2021/10/disability-awareness-2021.jpg.webp" 
          alt="User Icon"
        />
        <p>
          Person-Centered Approach Individualized Care: Tailoring services to meet the unique needs and preferences of each individual.
          <br />Empowerment: Encouraging autonomy and decision-making.
          <br />Inclusivity and Accessibility Barrier-Free Environments: Ensuring physical, social, and digital environments are accessible.
          <br />Equal Opportunities: Promoting inclusive education, employment, and social participation.
          <br />Collaboration and Coordination Interdisciplinary Teams: Involving healthcare providers, therapists, social workers, and family members in the care plan.
          <br />Community Resources: Leveraging local services and support networks.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
