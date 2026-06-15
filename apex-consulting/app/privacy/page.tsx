import LegalLayout from "@/components/LegalLayout";
import { COMPANY, LEGAL } from "@/content/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.brandName}`,
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LEGAL.lastUpdated}>
      <Section title="1. Who we are">
        <p>
          {COMPANY.name} (&quot;Apex Advisory&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in
          England and Wales (Companies House number{" "}
          <strong>{COMPANY.registrationNumber}</strong>), with registered office at{" "}
          {COMPANY.registeredAddress}.
        </p>
        <p>
          We are the data controller for the personal data collected through this website
          and our consulting services. For data protection enquiries, contact us at{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>{" "}
          or write to {COMPANY.dpo}, {COMPANY.registeredAddress}.
        </p>
      </Section>

      <Section title="2. What personal data we collect">
        <p>We may collect the following categories of personal data:</p>
        <ul>
          <li><strong>Contact and identity data:</strong> name, email address, telephone number, company name, and job title — provided when you complete our enquiry form or contact us directly.</li>
          <li><strong>Communication data:</strong> the content of emails, messages, or calls between us.</li>
          <li><strong>Financial and business data:</strong> information you share with us in the course of a consulting engagement, such as financial statements, business plans, or market data. This is governed separately by the engagement letter and NDA we sign with you.</li>
          <li><strong>Technical data:</strong> IP address, browser type, pages visited, and approximate location — collected automatically when you use this website, subject to your cookie preferences.</li>
          <li><strong>Usage data:</strong> how you navigate and interact with our website (only if you have consented to analytics cookies).</li>
        </ul>
        <p>We do not collect special category data (health, biometric, political, or religious data) through this website.</p>
      </Section>

      <Section title="3. How and why we use your data">
        <table>
          <thead>
            <tr><th>Purpose</th><th>Legal basis (UK GDPR)</th></tr>
          </thead>
          <tbody>
            <tr><td>Responding to enquiries and booking strategy calls</td><td>Legitimate interests (Art. 6(1)(f)); or performance of a contract (Art. 6(1)(b))</td></tr>
            <tr><td>Providing consulting services</td><td>Performance of a contract (Art. 6(1)(b))</td></tr>
            <tr><td>Sending marketing communications (where opted in)</td><td>Consent (Art. 6(1)(a))</td></tr>
            <tr><td>Complying with legal obligations (e.g. tax, anti-money laundering)</td><td>Legal obligation (Art. 6(1)(c))</td></tr>
            <tr><td>Analysing website traffic to improve user experience</td><td>Consent via cookie banner (Art. 6(1)(a))</td></tr>
          </tbody>
        </table>
        <p>We will never sell your personal data to third parties. We will never use your data for automated decision-making or profiling that produces legal or similarly significant effects.</p>
      </Section>

      <Section title="4. Who we share data with">
        <p>We share personal data only where necessary:</p>
        <ul>
          <li><strong>Service providers:</strong> IT infrastructure providers (hosting, email) who process data on our behalf under data processing agreements.</li>
          <li><strong>Professional advisors:</strong> solicitors and accountants, where required in the course of an engagement, under duties of confidentiality.</li>
          <li><strong>Regulators and authorities:</strong> where required by law or court order.</li>
        </ul>
        <p>If any of our service providers are located outside the UK or EEA, we ensure appropriate safeguards are in place (e.g. UK adequacy decisions or Standard Contractual Clauses).</p>
      </Section>

      <Section title="5. How long we keep your data">
        <ul>
          <li><strong>Enquiries that do not result in an engagement:</strong> 12 months from last contact.</li>
          <li><strong>Client engagement records:</strong> 7 years from the end of the engagement (in line with our legal and tax obligations).</li>
          <li><strong>Marketing consent records:</strong> until you withdraw consent.</li>
          <li><strong>Website analytics data:</strong> as specified in the Cookie Policy.</li>
        </ul>
      </Section>

      <Section title="6. Your rights under UK GDPR">
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you (Subject Access Request).</li>
          <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
          <li><strong>Erase</strong> your data (&quot;right to be forgotten&quot;), where no legal obligation requires us to retain it.</li>
          <li><strong>Restrict</strong> processing in certain circumstances.</li>
          <li><strong>Object</strong> to processing based on legitimate interests.</li>
          <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</li>
          <li><strong>Withdraw consent</strong> at any time where processing is based on consent (e.g. marketing emails, analytics cookies). Withdrawal does not affect the lawfulness of processing before withdrawal.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a>. We will
          respond within one calendar month. If you are unhappy with our response, you have
          the right to lodge a complaint with the Information Commissioner&apos;s Office
          (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
        </p>
      </Section>

      <Section title="7. Security">
        <p>
          We implement appropriate technical and organisational measures to protect your
          personal data against unauthorised access, alteration, disclosure, or destruction.
          These include encrypted data transmission (TLS/HTTPS), access controls, and
          regular security reviews.
        </p>
        <p>
          If we become aware of a data breach that is likely to result in a risk to your
          rights and freedoms, we will notify the ICO within 72 hours and inform you
          without undue delay.
        </p>
      </Section>

      <Section title="8. Cookies">
        <p>
          We use cookies and similar technologies on this website. For full details,
          including how to manage your preferences, see our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>
      </Section>

      <Section title="9. Links to third-party websites">
        <p>
          This website may contain links to external sites. We are not responsible for
          the privacy practices of those sites and encourage you to read their privacy
          policies.
        </p>
      </Section>

      <Section title="10. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The date at the top of
          this page indicates when it was last revised. Where changes are material, we
          will take reasonable steps to bring them to your attention.
        </p>
      </Section>

      <Section title="11. Contact us">
        <p>
          {COMPANY.name}<br />
          {COMPANY.registeredAddress}<br />
          Email: <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a><br />
          Phone: {COMPANY.phone}
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-[1.15rem] font-bold text-white mb-4 tracking-tight">{title}</h2>
      <div className="text-[14px] text-stone-400 leading-relaxed space-y-3 [&_a]:text-gold-400 [&_a:hover]:underline [&_strong]:text-stone-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:text-[12px] [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-stone-500 [&_th]:border-b [&_th]:border-white/10 [&_th]:pb-2 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-white/[0.05] [&_td]:align-top [&_td:first-child]:pr-6 [&_td:first-child]:font-medium [&_td:first-child]:text-stone-300">
        {children}
      </div>
    </section>
  );
}
