import PricingAddonsTable from '../../layout/pricingtable/PricingAddons';


const PricingAddons = () => {
  return (
    <section className="pricing-addons">
      <div className="pricing-addons-container">
        <div className="pricing-addons-header">
          <h2>One base. Add-ons you control</h2>
          <p>
            Start with Business, then add only what your business needs.<br />
            Everything connects, so nothing gets retyped.
          </p>
        </div>
        <PricingAddonsTable /> 
      </div>
    </section>
  );
};

export default PricingAddons;