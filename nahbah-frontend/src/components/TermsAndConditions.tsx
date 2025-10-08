import React from 'react';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Terms and Conditions</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
            <p>
              By accessing and using Not a House, but a Home ("the Platform"), you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use this platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">2. Purpose and Mission</h3>
            <p>
              This platform is dedicated to supporting individuals and communities in creating dignified, self-built housing solutions. 
              We provide resources, designs, and knowledge to help people build safe and sustainable shelters using available materials.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">3. Content Submission and Ownership Rights</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">3.1 Grant of Rights</h4>
              <p>
                By submitting any design, document, image, or other content ("Submitted Content") to the Platform, you grant 
                Not a House, but a Home and its operators a perpetual, worldwide, royalty-free, non-exclusive, and transferable 
                license to use, reproduce, distribute, display, modify, adapt, and create derivative works from your Submitted Content.
              </p>
              
              <h4 className="text-lg font-medium">3.2 Full Distribution Rights</h4>
              <p>
                You specifically grant us the right to:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Distribute your designs freely to anyone in need of housing solutions</li>
                <li>Print and share your designs in physical and digital formats</li>
                <li>Translate and adapt your content for different communities and contexts</li>
                <li>Include your designs in educational materials and advocacy resources</li>
                <li>Modify your designs to improve safety, accessibility, or functionality</li>
              </ul>

              <h4 className="text-lg font-medium">3.3 Humanitarian Purpose</h4>
              <p>
                These broad rights are essential to our mission of supporting vulnerable communities. By submitting content, 
                you acknowledge that your designs may be used to help people experiencing homelessness, displacement, or 
                housing insecurity worldwide.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">4. Attribution and Anonymous Contributions</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">4.1 Named Contributions</h4>
              <p>
                For named contributions, we are committed to crediting contributors for their submissions. When your design 
                is displayed or distributed, we will make reasonable efforts to include attribution using the name you provided 
                during submission.
              </p>
              
              <h4 className="text-lg font-medium">4.2 Anonymous Contributions</h4>
              <p>
                Contributors may choose to submit designs anonymously for various reasons including safety, privacy, or personal preference. 
                Anonymous submissions are equally valuable to our mission and will be handled with the same care and review process 
                as named contributions.
              </p>

              <h4 className="text-lg font-medium">4.3 Anonymous Contribution Process</h4>
              <p>
                Anonymous contributions may be submitted through:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Our standard submission form by selecting "Submit Anonymously"</li>
                <li>Third-party secure submission services when available</li>
                <li>Community intermediaries who can submit on behalf of anonymous contributors</li>
                <li>Physical drop-off points in partnering organizations</li>
              </ul>

              <h4 className="text-lg font-medium">4.4 Anonymous Attribution</h4>
              <p>
                Anonymous contributions will be credited as "Anonymous Contributor" or similar designation. 
                We respect the privacy choices of anonymous contributors and will not attempt to identify them 
                or store identifying information beyond what is necessary for content review.
              </p>

              <h4 className="text-lg font-medium">4.5 Community Building</h4>
              <p>
                Both named and anonymous contributions help build our collaborative community. Your contributions, 
                regardless of attribution preference, help create an environment where knowledge and solutions are shared openly.
              </p>

              <h4 className="text-lg font-medium">4.6 Attribution Limitations</h4>
              <p>
                While we strive to provide appropriate attribution, you acknowledge that in emergency situations or when designs are 
                adapted significantly, specific attribution may not always be practically possible. The humanitarian mission of 
                the platform takes precedence over attribution requirements.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">5. Privacy and Data Protection for Anonymous Submissions</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">5.1 Data Minimization</h4>
              <p>
                For anonymous submissions, we collect only the minimum data necessary to review and publish the content. 
                No personal identifying information is required or stored for anonymous contributions.
              </p>

              <h4 className="text-lg font-medium">5.2 Technical Anonymity</h4>
              <p>
                While we implement technical measures to protect anonymity, contributors should be aware that complete 
                anonymity cannot be guaranteed due to the nature of internet communications. We recommend using additional 
                privacy tools if complete anonymity is essential.
              </p>

              <h4 className="text-lg font-medium">5.3 Content Review</h4>
              <p>
                Anonymous submissions undergo the same content review process as named submissions. However, we cannot 
                contact anonymous contributors for clarifications or improvements, so submissions should be as complete as possible.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">6. Content Requirements and Standards</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">6.1 Original Work</h4>
              <p>
                You warrant that all Submitted Content is your original work or that you have obtained all necessary 
                rights and permissions to submit it. This applies to both named and anonymous submissions.
              </p>

              <h4 className="text-lg font-medium">6.2 Safety and Appropriateness</h4>
              <p>
                All submissions must be appropriate for the platform's humanitarian mission. Designs should prioritize 
                safety and be suitable for helping vulnerable populations. We reserve the right to reject or remove 
                content that doesn't meet these standards.
              </p>

              <h4 className="text-lg font-medium">6.3 Anonymous Submission Quality</h4>
              <p>
                Anonymous submissions should include sufficient detail and documentation since we cannot follow up 
                for clarifications. Consider including comprehensive descriptions, measurements, and safety notes.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">7. Review and Moderation</h3>
            <p>
              All submissions are subject to review by our team before publication. We reserve the right to edit, 
              modify, or reject submissions to ensure they meet our quality and safety standards. This review process 
              helps maintain the integrity and usefulness of our resource library.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">8. Disclaimer and Limitation of Liability</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">8.1 Use at Own Risk</h4>
              <p>
                All designs and information on this platform are provided for educational purposes. Users implement 
                these designs at their own risk. We strongly recommend consulting with local experts and authorities 
                before beginning any construction project.
              </p>

              <h4 className="text-lg font-medium">8.2 No Warranties</h4>
              <p>
                We make no warranties about the accuracy, completeness, or suitability of any content for specific 
                purposes. Building codes, safety requirements, and environmental conditions vary by location.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">9. Data Protection and Privacy</h3>
            <p>
              We are committed to protecting your privacy in accordance with applicable data protection laws, 
              including GDPR. Your personal information will only be used for platform administration, community 
              building, and attribution purposes as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">10. Modifications to Terms</h3>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted 
              on the platform, and continued use constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">11. Contact Information</h3>
            <p>
              If you have questions about these Terms and Conditions, please contact us through the platform's 
              contact mechanisms.
            </p>
          </section>

          <div className="mt-8 p-4 bg-gray-100 rounded">
            <p className="text-sm font-medium">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm mt-2">
              By submitting content to this platform, whether named or anonymous, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions.
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

export default TermsAndConditions;