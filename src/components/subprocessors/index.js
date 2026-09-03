import "./subprocessors.css";

const services = [
  {
    name: "AWS",
    purpose: "Cloud infrastructure and hosting services",
    location: "United States",
    website: "https://aws.amazon.com"
  },
  {
    name: "Twilio",
    purpose: "Email and SMS messaging services",
    location: "United States",
    website: "https://www.twilio.com/"
  },
  {
    name: "Mailchimp",
    purpose: "Mailchimp email marketing and automation services",
    location: "United States",
    website: "https://mailchimp.com/"
  },
  {
    name: "Asana",
    purpose: "Project and task management services",
    location: "United States",
    website: "https://app.asana.com/"
  },
  {
    name: "XERO",
    purpose: "Financial management and accounting services",
    location: "United States",
    website: "https://www.xero.com/"
  },
  {
    name: "QuickBooks",
    purpose: "Accounting and bookkeeping services",
    location: "United States",
    website: "https://quickbooks.intuit.com/"
  },
  {
    name: "Google Analytics",
    purpose: "Website analytics and performance tracking services",
    location: "United States",
    website: "https://ads.google.com/"
  },
  {
    name: "Stripe",
    purpose: "Secure payment and billing services",
    location: "United States",
    website: "https://stripe.com/"
  },
  {
    name: "MYOB",
    purpose: "Accounting and bookkeeping services using MYOB",
    location: "United States",
    website: "https://www.myob.com/"
  },
  
];

const SubprocessorsComponent = () => {
  return (
    <div className="SubPageWrap">
      <div className="SubPageHead">
        <h1>meMate Subprocessors</h1>
        <span>Current as of Aug 25, 2025</span>
        <p>
          Know exactly where your data is and how it is being used.
          <br />
          meMate subprocessors.
        </p>
      </div>

      <div className="table-wrapper">
        <table className="services-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Location</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.purpose}</td>
                <td>{item.location}</td>
                <td>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubprocessorsComponent;
