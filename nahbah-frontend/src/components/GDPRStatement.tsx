import React from 'react';

interface GDPRStatementProps {
  isOpen: boolean;
  onClose: () => void;
}

const GDPRStatement: React.FC<GDPRStatementProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">GDPR Data Protection Guidelines</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold mb-3">Your Data Protection Rights</h3>
            <p>
              Under the General Data Protection Regulation (GDPR), you have specific rights regarding your 
              personal data. This statement explains how we collect, use, and protect your information when 
              you contribute to Not a House, but a Home.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">What Data We Collect</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">For Named Contributions:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Your name (for attribution purposes)</li>
                <li>Your email address (for communication about your submission)</li>
                <li>Design files and descriptions you submit</li>
                <li>Technical data (IP address, browser type) for security purposes</li>
              </ul>

              <h4 className="text-lg font-medium">For Anonymous Contributions:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Only the design files and descriptions you submit</li>
                <li>No personal identifying information is collected or stored</li>
                <li>Minimal technical data for security (automatically deleted after review)</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Legal Basis for Processing</h3>
            <p>
              We process your personal data based on:
            </p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Consent:</strong> You provide explicit consent when submitting your contribution</li>
              <li><strong>Legitimate Interest:</strong> Our humanitarian mission to help vulnerable communities</li>
              <li><strong>Public Interest:</strong> Providing housing solutions serves the public good</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">How We Use Your Data</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Review and publish your design contributions</li>
              <li>Provide attribution for your submissions</li>
              <li>Communicate with you about your contribution (named submissions only)</li>
              <li>Improve our platform and services</li>
              <li>Ensure security and prevent misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Data Sharing and Distribution</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">Design Content:</h4>
              <p>
                Your submitted designs may be shared globally as part of our humanitarian mission. 
                This includes distribution to:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Individuals and communities in need of housing solutions</li>
                <li>Non-profit organizations and aid agencies</li>
                <li>Educational institutions for research and teaching</li>
                <li>Government agencies working on housing issues</li>
              </ul>

              <h4 className="text-lg font-medium">Personal Information:</h4>
              <p>
                Your personal contact information is never shared with third parties without your 
                explicit consent, except as required by law.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Your GDPR Rights</h3>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Correct any inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data (with limitations for published content)</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Data Retention</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">Personal Information:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Contact details: Retained for 3 years after last contact or until deletion requested</li>
                <li>Submission metadata: Retained for administrative purposes</li>
              </ul>

              <h4 className="text-lg font-medium">Design Content:</h4>
              <p>
                Published designs are retained indefinitely as part of our permanent humanitarian resource library. 
                However, personal attribution can be removed upon request.
              </p>

              <h4 className="text-lg font-medium">Anonymous Submissions:</h4>
              <p>
                No personal data is retained for anonymous submissions.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and staff training</li>
              <li>Secure backup and recovery procedures</li>
              <li>Incident response protocols</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">International Transfers</h3>
            <p>
              Given our global humanitarian mission, your data may be processed in countries outside the 
              European Economic Area. We ensure appropriate safeguards are in place through:
            </p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for certain countries</li>
              <li>Additional security measures where required</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <p>
              For any questions about data protection or to exercise your GDPR rights, please contact:
            </p>
            <div className="mt-2 p-3 bg-gray-100 rounded">
              <p><strong>Data Protection Officer</strong></p>
              <p>Not a House, but a Home</p>
              <p>Email: (to be updated)</p>
              <p>Address:  (to be updated)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Supervisory Authority</h3>
            <p>
              If you believe we have not handled your data properly, you have the right to lodge a 
              complaint with your local data protection supervisory authority.
            </p>
          </section>

          <div className="mt-8 p-4 bg-gray-100 rounded">
            <p className="text-sm font-medium">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm mt-2">
              By submitting content and checking the GDPR acceptance box, you acknowledge that you have 
              read and understood this data protection statement.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button 
            onClick={onClose}
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GDPRStatement;