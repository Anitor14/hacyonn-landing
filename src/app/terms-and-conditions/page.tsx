"use client";

import React from "react";

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-6 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          Welcome to <strong>Hacyon</strong>. By accessing or using our website
          and services, you agree to comply with and be bound by the following
          Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, you accept and agree to be bound
          by these Terms and Conditions and our Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold">2. Services</h2>
        <p>
          Expectoo provides recruitment services including but not limited to
          job postings, professional sourcing, and talent management solutions.
          We reserve the right to modify or discontinue our services at any time
          without prior notice.
        </p>

        <h2 className="text-xl font-semibold">3. Use of Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree to use our services only for lawful purposes.</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Submit false or misleading information.</li>
          <li>Impersonate any person or entity.</li>
          <li>
            Post or transmit any content that is unlawful, harmful, or violates
            any third-party rights.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, and
          software, is the property of Expectoo Technology or its licensors and
          is protected by intellectual property laws. You may not use any of our
          intellectual property without our prior written consent.
        </p>

        <h2 className="text-xl font-semibold">6. Disclaimer of Warranties</h2>
        <p>
          Our services are provided “as is” without any warranties of any kind,
          express or implied. Expectoo Technology does not warrant that our
          services will be uninterrupted, error-free, or secure.
        </p>

        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
        <p>
          In no event shall Expectoo Technology be liable for any indirect,
          incidental, special, or consequential damages arising out of or in
          connection with the use of our services.
        </p>

        <h2 className="text-xl font-semibold">8. Indemnification</h2>
        <p>
          You agree to indemnify and hold Expectoo Technology harmless from any
          claims, losses, damages, liabilities, including legal fees, arising
          out of your use or misuse of our services.
        </p>

        <h2 className="text-xl font-semibold">9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to our
          services at our sole discretion, without notice, for conduct that we
          believe violates these Terms and Conditions or is harmful to other
          users.
        </p>

        <h2 className="text-xl font-semibold">10. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. Your
          continued use of our services after any changes indicates your
          acceptance of the new terms.
        </p>

        <h2 className="text-xl font-semibold">11. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of Nigeria. Any disputes arising under these terms shall
          be subject to the exclusive jurisdiction of Nigerian law.
        </p>

        <h2 className="text-xl font-semibold">12. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
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

export default TermsPage;
