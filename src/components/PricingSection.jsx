import React from "react";

const PricingCard = ({ title, person, support, storage, place, price }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{person}</p>
      <p>{support}</p>
      <p>{storage}</p>
      <p>{place}</p>
      <h4>{price}</h4>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-cards-container">
        <PricingCard
          title="Standard"
          person="1 person"
          support="Basic Access"
          storage="Email Support"
          place="Last Row"
          price="€200 for one person"
        />
        <PricingCard
          title="Pro"
          person="2 person"
          support="Priority Access"
          storage="Email Priority Support"
          place="Row in the middle"
          price="€400 per person"
        />
        <PricingCard
          title="Vip"
          person="3 person"
          support="VIP Access"
          storage="24/7 Email Support"
          place="Backstage"
          price="€1000 per person"
        />
      </div>
    </div>
  );
};

export default PricingSection;
