import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-12 text-gray-800">
        
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions
          </h1>
          {/* <p className="text-sm text-gray-500 font-medium">
            Last Updated: 10 August 2026
          </p> */}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Wider World Immigration website or services, you agree to be bound by these Terms & Conditions. We reserve the right to modify or update these terms at any time. Continued use of our website or services after changes are published constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Services Provided
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Wider World Immigration provides immigration consultancy and related services, including guidance and assistance for study visas, work visas, permanent residency, visitor visas, profile evaluation, documentation and other immigration-related matters. Our services are advisory in nature, and the final decision on any visa, permit or immigration application is made solely by the relevant government or immigration authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Client Responsibility
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clients are responsible for providing accurate, complete and genuine information and documents. Any incorrect, incomplete, misleading or fraudulent information may result in delays, refusal of an application or termination of services. Clients must promptly inform us of any changes to their personal, educational or professional information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All service fees must be paid according to the agreed payment schedule and terms communicated to the client. Once the agreed services have commenced, fees may be non-refundable unless otherwise stated in the applicable service agreement or refund policy. Government, embassy and third-party fees may be separate and are subject to the policies of the relevant authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We respect the confidentiality of client information and take reasonable measures to protect personal and professional information provided to us. Information may be disclosed where required by law, government authorities, or where necessary to provide the requested services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. No Guarantee of Approval
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Wider World Immigration does not guarantee visa approval, permanent residency, employment, job offers, invitations, or any specific immigration outcome. Immigration decisions are made by the relevant authorities and may depend on eligibility, documentation, government policies and other factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for losses, delays, refusals, policy changes, processing delays or decisions made by immigration authorities or other third parties. Our liability, where legally applicable, shall be limited to the amount of service fees paid by the client for the specific service, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Website Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The information provided on our website is for general informational purposes and may change due to updates in immigration laws, government policies, eligibility criteria or procedures. While we make reasonable efforts to keep the information accurate and current, we do not guarantee that all website information will always be complete or up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India. Any disputes arising in connection with our website or services shall be subject to the jurisdiction of the appropriate courts in New Delhi, India, subject to applicable law.
            </p>
          </section>

          {/* Contact Section Highlights */}
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            
            <address className="not-italic text-gray-800 space-y-2">
              <p className="font-semibold text-lg">Wider World Immigration</p>
              <p className="text-gray-600">Office No. 806, 8th Floor, Chiranjiv Tower-43,</p>
              <p className="text-gray-600 mb-4">Nehru Place, New Delhi – 110019, India</p>
              
              <div className="pt-2 space-y-1">
                <p>
                  <span className="font-medium text-gray-900">Phone: </span>
                  <a href="tel:+919999624998" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +91 9999624998
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Email: </span>
                  <a href="mailto:info@widerworld.in" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@widerworld.in
                  </a>
                </p>
              </div>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Page;