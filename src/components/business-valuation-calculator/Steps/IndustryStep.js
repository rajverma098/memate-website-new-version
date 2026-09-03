export default function IndustryStep({ form, update }) {
  if (!form) return null; 

  return (
    <div className="grid">
      <div>
        <label>Industry</label>
        <select
          value={form.industry}
          onChange={(e) => update("industry", e.target.value)}
        >
          <option value="">Select</option>
          <option value="tradeconstruction">Trade & Construction</option>
          <option value="professionalservices">Professional Services</option>
          <option value="retailecommerce">Retail / Ecommerce</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="creativedigital">Creative / Digital</option>
          <option value="hospitality">Hospitality</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Market type</label>
        <select
          value={form.marketType}
          onChange={(e) => update("marketType", e.target.value)}
        >
          <option value="">Select</option>
          <option value="local">Local</option>
          <option value="national">National</option>
          <option value="international">International</option>
        </select>
      </div>
    </div>
  );
}
