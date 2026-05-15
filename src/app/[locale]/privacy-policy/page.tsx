import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY, t as bi, type Locale } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy — Para Suhu Digital",
};

export default async function PrivacyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "legalPage" });
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              {t("eyebrow")}
            </span>
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white mb-4">
            {t("privacyTitle")}
          </h1>
          <p className="text-sm text-white/40 mb-12">
            {t("privacyUpdated")}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section1Title")}
              </h2>
              <p className="leading-relaxed">{t("privacy.section1")}</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section2Title")}
              </h2>
              <p className="leading-relaxed">{t("privacy.section2")}</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section3Title")}
              </h2>
              <p className="leading-relaxed">{t("privacy.section3")}</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section4Title")}
              </h2>
              <p className="leading-relaxed">{t("privacy.section4")}</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section5Title")}
              </h2>
              <p className="leading-relaxed">{t("privacy.section5")}</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section6Title")}
              </h2>
              <p className="leading-relaxed">
                {t("privacy.section6Pre")} {COMPANY.email} {t("privacy.section6Post")}
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                {t("privacy.section7Title")}
              </h2>
              <p className="leading-relaxed">
                {t("privacy.section7")}{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-suhu-emerald underline"
                >
                  {COMPANY.email}
                </a>
                <br />
                {COMPANY.name}
                <br />
                {bi(COMPANY.address, locale)}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
