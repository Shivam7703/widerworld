import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-12 text-gray-800">
        
        {/* Header Section */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 leading-relaxed">
            At Wider World Immigration, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, submit our Evaluation Form, or use our services. By providing your information to us, you agree to the practices described below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>
                <strong className="text-gray-900">Personal Information:</strong> Name, email address, contact number, date of birth, marital status, preferred country, and other information you choose to provide.
              </li>
              <li>
                <strong className="text-gray-900">Educational Information:</strong> Qualification, passing year, educational background, and other details relevant to your immigration profile.
              </li>
              <li>
                <strong className="text-gray-900">Professional Information:</strong> Work experience, current designation, company name, annual salary, and other employment-related information required for profile evaluation.
              </li>
              <li>
                <strong className="text-gray-900">Immigration Documents:</strong> Where required for our services, we may collect documents such as passports, identification documents, educational certificates, employment records, financial documents, and other immigration-related documents.
              </li>
              <li>
                <strong className="text-gray-900">Website Data:</strong> We may collect technical information such as IP address, browser type, device information, cookies, and website usage data to improve website functionality and user experience.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-3">We may use your information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>To evaluate your immigration profile and requirements.</li>
              <li>To provide immigration consultation and related services.</li>
              <li>To communicate with you regarding your enquiry, evaluation, application, or services.</li>
              <li>To understand your eligibility for relevant immigration pathways.</li>
              <li>To provide information about services that may be relevant to your requirements.</li>
              <li>To maintain client and business records.</li>
              <li>To improve our website and services.</li>
              <li>To comply with applicable legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* 3. Sharing of Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600 mb-3">
              We may share relevant information where reasonably necessary to provide our services or comply with legal obligations, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2 mb-4">
              <li>With government authorities, immigration departments, embassies, or consulates where required for an application.</li>
              <li>With authorized third-party service providers involved in providing requested services.</li>
              <li>With professional assessment organizations, medical service providers, educational institutions, or other relevant organizations where applicable.</li>
              <li>Where disclosure is required by law or by a legally authorized authority.</li>
            </ul>
            <p className="text-gray-700 font-medium bg-gray-50 p-3 rounded-md border border-gray-100">
              We do not sell or rent your personal information to unauthorized third parties.
            </p>
          </section>

          {/* 4. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Data Security
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2 mb-3">
              <li>We take reasonable measures to protect your personal information from unauthorized access, misuse, alteration, disclosure, or loss.</li>
              <li>Access to personal information is restricted to authorized personnel and service providers where necessary.</li>
              <li>We use reasonable technical and organizational safeguards to protect information.</li>
              <li>Sensitive information is handled with appropriate confidentiality and security measures.</li>
              <li>We regularly review our security practices to help protect the information entrusted to us.</li>
            </ul>
            <p className="text-gray-500 text-sm italic">
              However, no online system or method of electronic transmission can be guaranteed to be completely secure.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Your Rights
            </h2>
            <p className="text-gray-600 mb-3">Subject to applicable laws, you may:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2 mb-4">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information where legally permitted.</li>
              <li>Withdraw consent where processing is based on your consent.</li>
              <li>Ask questions about how your personal information is collected or used.</li>
              <li>Request to stop receiving promotional communications.</li>
            </ul>
            <p className="text-gray-600">
              To exercise any applicable privacy rights, you can contact us using the details provided below.
            </p>
          </section>

          {/* 6. Cookies and Website Usage */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Cookies and Website Usage
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed pl-2">
              <li>Our website may use cookies and similar technologies to understand website traffic, monitor performance, improve functionality, and enhance your browsing experience.</li>
              <li>Cookies may collect information such as browser type, device information, pages visited, and general website usage.</li>
              <li>You can disable or manage cookies through your browser settings. However, disabling certain cookies may affect some website functionality.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We retain personal information only for as long as reasonably necessary to provide our services, maintain business and client records, comply with legal requirements, resolve disputes, and protect our legitimate business interests.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When information is no longer required, we may securely delete or anonymize it, subject to applicable legal or regulatory requirements.
            </p>
          </section>

          {/* 8. Changes to Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Changes to Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any updates will be published on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            
            <address className="not-italic text-gray-800 space-y-2">
              <p className="font-semibold text-lg">Wider World Immigration</p>
              <p className="text-gray-600">Office No. 806, 8th Floor, Chiranjiv Tower-43,</p>
              <p className="text-gray-600 mb-4">Nehru Place, New Delhi – 110019, India</p>
              
              <div className="pt-2 space-y-1">
                <p>
                  <span className="font-medium text-gray-900">Email: </span>
                  <a href="mailto:info@widerworld.in" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@widerworld.in
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Phone: </span>
                  <a href="tel:+919999624998" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +91 9999624998
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