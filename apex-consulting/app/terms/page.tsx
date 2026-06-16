import LegalLayout from "@/components/LegalLayout";
import { COMPANY, LEGAL } from "@/content/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY.brandName}`,
  robots: { index: false },
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LEGAL.lastUpdated}>
      <p className="text-[14px] text-stone-400 leading-relaxed mb-8">
        These Terms govern your use of the {COMPANY.brandName} website
        ({" "}<strong className="text-stone-300">the Site</strong>) and any consulting
        services provided by {COMPANY.name} ({" "}
        <strong className="text-stone-300">&quot;Apex Advisory&quot;</strong>,
        &quot;we&quot;, &quot;us&quot;). By accessing the Site, you agree to these Terms.
      </p>

      <Section title="1. Use of this website">
        <ul>
          <li>You may use this Site for lawful purposes only.</li>
          <li>You must not use the Site in any way that is fraudulent, harmful, or that infringes the rights of any third party.</li>
          <li>You must not attempt to gain unauthorised access to any part of the Site or its underlying systems.</li>
          <li>We reserve the right to suspend or terminate access to the Site for breach of these Terms or for any other reason at our sole discretion.</li>
        </ul>
      </Section>

      <Section title="2. Intellectual property">
        <p>
          All content on this Site — including text, graphics, logos, and code — is owned
          by or licensed to {COMPANY.name} and is protected by UK copyright law. You may
          not reproduce, distribute, or create derivative works without our express written
          consent.
        </p>
        <p>
          The {COMPANY.brandName} name and logo are trading names of {COMPANY.name}.
          Nothing on this Site grants any licence to use them.
        </p>
      </Section>

      <Section title="3. No professional advice">
        <p>
          The information published on this Site is for general informational purposes
          only. It does not constitute financial, legal, tax, or investment advice. You
          should not act on any content from this Site without seeking appropriate
          professional advice tailored to your specific circumstances.
        </p>
        <p>
          Formal advisory services are provided only under a signed engagement letter,
          which will contain its own terms, scope, and liability provisions.
        </p>
      </Section>

      <Section title="4. Limitation of liability">
        <p>
          To the fullest extent permitted by law, {COMPANY.name} excludes all liability
          for loss or damage arising from your use of this Site or reliance on its content,
          including but not limited to:
        </p>
        <ul>
          <li>Direct, indirect, or consequential loss;</li>
          <li>Loss of profits, revenue, data, or business;</li>
          <li>Loss arising from errors or omissions in the content of this Site.</li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits our liability for death or personal
          injury caused by negligence, fraud or fraudulent misrepresentation, or any
          other liability that cannot be excluded or limited by English law.
        </p>
      </Section>

      <Section title="5. Third-party links">
        <p>
          This Site may contain links to third-party websites. These links are provided
          for your convenience only. We have no control over the content of those sites
          and accept no responsibility for them or for any loss arising from your use of
          them.
        </p>
      </Section>

      <Section title="6. Availability">
        <p>
          We do not guarantee that this Site will be uninterrupted, error-free, or free
          from viruses or other harmful components. We may suspend access to the Site for
          maintenance without notice.
        </p>
      </Section>

      <Section title="7. Governing law and jurisdiction">
        <p>
          These Terms and any dispute arising from your use of this Site are governed by
          the law of {LEGAL.governingLaw}. You agree to submit to the exclusive
          jurisdiction of the courts of {LEGAL.governingLaw}.
        </p>
      </Section>

      <Section title="8. Changes to these Terms">
        <p>
          We may update these Terms at any time. The revised Terms will take effect from
          the date shown at the top of this page. Continued use of the Site after that
          date constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For any questions about these Terms, contact us at{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-gold-400 hover:underline">
            {COMPANY.email}
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
      <div className="text-[14px] text-stone-400 leading-relaxed space-y-3 [&_a]:text-gold-400 [&_a:hover]:underline [&_strong]:text-stone-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
