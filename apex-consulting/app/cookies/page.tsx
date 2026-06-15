import LegalLayout from "@/components/LegalLayout";
import { COMPANY, LEGAL } from "@/content/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cookie Policy | ${COMPANY.brandName}`,
  robots: { index: false },
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated={LEGAL.lastUpdated}>
      <Section title="What are cookies?">
        <p>
          Cookies are small text files placed on your device by websites you visit. They
          are widely used to make websites work efficiently and to provide information to
          site owners. Some cookies are strictly necessary for the site to function;
          others are optional and require your consent under UK GDPR and the Privacy and
          Electronic Communications Regulations (PECR).
        </p>
      </Section>

      <Section title="How we use cookies">
        <p>
          We group cookies into three categories. You can manage your preferences at any
          time using the cookie banner or by clearing your browser cookies.
        </p>
      </Section>

      <Section title="1. Strictly necessary cookies">
        <p>
          These cookies are essential for the website to operate. They cannot be
          disabled. No consent is required for these cookies under PECR.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie name</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>apex_cookie_consent_v{LEGAL.cookieConsentVersion}</td>
              <td>Stores your cookie consent preferences</td>
              <td>12 months</td>
              <td>First-party</td>
            </tr>
            <tr>
              <td>__Host-next-auth.*</td>
              <td>Session security (if client portal is active)</td>
              <td>Session</td>
              <td>First-party</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="2. Analytics cookies">
        <p>
          These cookies help us understand how visitors use the site so we can improve
          it. They are set only if you have consented.
        </p>
        {LEGAL.usesGoogleAnalytics ? (
          <table>
            <thead><tr><th>Cookie name</th><th>Purpose</th><th>Duration</th><th>Provider</th></tr></thead>
            <tbody>
              <tr><td>_ga</td><td>Distinguishes unique users</td><td>2 years</td><td>Google Analytics</td></tr>
              <tr><td>_ga_*</td><td>Stores session state</td><td>2 years</td><td>Google Analytics</td></tr>
              <tr><td>_gid</td><td>Distinguishes users (24-hour)</td><td>24 hours</td><td>Google Analytics</td></tr>
            </tbody>
          </table>
        ) : (
          <p className="text-stone-500 italic">
            We do not currently use analytics cookies. This section will be updated if we
            introduce analytics tools in future.
          </p>
        )}
      </Section>

      <Section title="3. Marketing cookies">
        <p>
          We do not currently use marketing or advertising cookies. This section will be
          updated if we introduce such tools in future.
        </p>
      </Section>

      <Section title="Managing your preferences">
        <p>You can control cookies in several ways:</p>
        <ul>
          <li><strong>Cookie banner:</strong> Use the &quot;Manage preferences&quot; option in our cookie banner when you first visit the site, or clear your <code>apex_cookie_consent_v{LEGAL.cookieConsentVersion}</code> cookie to see it again.</li>
          <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings menu. Note that disabling necessary cookies may affect site functionality.</li>
          <li><strong>Opt-out tools:</strong> For Google Analytics specifically, you can use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
        </ul>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this Cookie Policy when we introduce new technologies or in
          response to regulatory changes. The date at the top of this page indicates
          when it was last revised. Where we add new cookies that require consent, we
          will present the consent banner again.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          If you have questions about our use of cookies, contact us at{" "}
          <a href={`mailto:${COMPANY.privacyEmail}`} className="text-gold-400 hover:underline">
            {COMPANY.privacyEmail}
          </a>.
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-[1.15rem] font-bold text-white mb-4 tracking-tight">{title}</h2>
      <div className="text-[14px] text-stone-400 leading-relaxed space-y-3 [&_a]:text-gold-400 [&_a:hover]:underline [&_strong]:text-stone-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-stone-300 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:text-[11px] [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-stone-500 [&_th]:border-b [&_th]:border-white/10 [&_th]:pb-2 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-white/[0.05] [&_td]:align-top [&_td:first-child]:pr-6 [&_td:first-child]:font-mono [&_td:first-child]:text-[12px] [&_td:first-child]:text-stone-300">
        {children}
      </div>
    </section>
  );
}
