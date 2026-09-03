import { Helmet } from "react-helmet-async";
import "./meta-data-deletion.css";

const Meta = () => {
  return (
    <>
      <Helmet>
        <title>Memate Data Deletion Instructions</title>

        <meta
          name="description"
          content="Learn how to request deletion of your Facebook integration data associated with Memate."
        />
      </Helmet>

      <div className="meta-data-deletion">
        <div className="container">
          <div className="card">

            <div className="hero">
              <h1>Memate Data Deletion Instructions</h1>

              <p>
                Manage and remove your Facebook integration data securely and
                easily.
              </p>
            </div>

            <div className="content">

              <div className="intro">
                If you would like to request deletion of your data associated
                with Memate and Facebook integrations, please follow the
                instructions below.
              </div>

              <div className="grid">

                <div className="box">
                  <h2>Request Data Deletion</h2>

                  <p>
                    Please send an email request to our support team.
                  </p>

                  <div className="email-box">
                    <strong>Email Address</strong><br />

                    <a href="mailto:support@memate.com.au">
                      support@memate.com.au
                    </a>
                  </div>

                  <div className="subject-box">
                    <strong>Email Subject</strong>

                    <p>“Facebook Data Deletion Request”</p>
                  </div>
                </div>

                <div className="box">
                  <h2>Include These Details</h2>

                  <ul>
                    <li>Your Full Name</li>
                    <li>Your Facebook Page Name (if applicable)</li>
                    <li>Your Registered Email Address</li>
                  </ul>
                </div>

              </div>

              <div className="timeline">
                <h3>Processing Timeline</h3>

                <p>
                  Once we receive your request, we will review and permanently
                  delete associated Facebook integration data from our systems
                  within <span>7 business days</span>.
                </p>
              </div>

              <div className="facebook-box">
                <h2>Disconnect Memate from Facebook</h2>

                <p>
                  You can also manually remove Memate access directly from your
                  Facebook account:
                </p>

                <div className="step-box">
                  Facebook → Settings & Privacy → Settings → Business
                  Integrations → Remove Memate
                </div>
              </div>

              <div className="contact">
                <h2>Need Assistance?</h2>

                <p>
                  If you have any questions regarding your data or privacy,
                  please contact our support team.
                </p>

                <a href="mailto:support@memate.com.au">
                  support@memate.com.au
                </a>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meta;