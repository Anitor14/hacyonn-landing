"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          This Privacy Policy outlines how <strong>Hacyon</strong>{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
          discloses, and protects your personal information when you use our
          website and services.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, resume/CV, job preferences, and other details you
            voluntarily provide.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, device
            information, pages visited, and timestamps.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to improve user experience
            and track interactions.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To match candidates with job opportunities.</li>
          <li>To communicate with you about jobs, services, or updates.</li>
          <li>To improve our platform and personalize your experience.</li>
          <li>To comply with legal obligations or enforce our terms.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
        <p>We may share your personal information with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Employers or recruiters for job placement purposes (with your
            consent).
          </li>
          <li>
            Service providers assisting with analytics, hosting, or
            communication.
          </li>
          <li>Regulatory or legal authorities if required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Your Data Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Withdraw consent to processing your data (where applicable).</li>
          <li>Object to the use of your data for marketing or profiling.</li>
          <li>Request a copy of your data in a structured format.</li>
        </ul>

        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, loss, or misuse.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold">6. Data Retention</h2>
        <p>
          We retain your information only for as long as necessary to provide
          services, comply with legal obligations, and resolve disputes. You may
          request deletion at any time.
        </p>

        <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under 18. We do not
          knowingly collect personal data from children.
        </p>

        <h2 className="text-xl font-semibold">8. International Transfers</h2>
        <p>
          If you are located outside Nigeria, your information may be
          transferred to and processed in Nigeria where our servers are located.
        </p>

        <h2 className="text-xl font-semibold">9. Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the “Last updated” date above. Continued use of our
          services indicates your acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, contact us at{" "}
          <a
            href="mailto:support@hacyon.ng"
            className="text-blue-600 underline"
          >
            support@hacyon.ng
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
