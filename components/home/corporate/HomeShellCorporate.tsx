import HeroCorporate from "./HeroCorporate";
import FeaturesOverview from "./FeaturesOverview";
import EnterpriseTrustStrip from "./EnterpriseTrustStrip";
import FloorplanBlock from "./FloorplanBlock";
import CalendlySection from "./CalendlySection";
import HomeFaqCorporate from "./HomeFaqCorporate";
import CtaBand from "@/components/landing/CtaBand";

export default function HomeShellCorporate() {
  return (
    <main className="tkc-canvas">
      <HeroCorporate />
      <FeaturesOverview />
      <CtaBand
        tone="ink"
        eyebrow="Direkt starten"
        headline="Account anlegen und loslegen."
        body="Workspace in Sekunden. Mobile App und Login ab Minute eins. Alles, was Sie auf dieser Seite sehen, finden Sie nach dem Login im Produkt."
        utm="home_de_cta_mid"
      />
      <EnterpriseTrustStrip />
      <div id="taskey-share">
        <FloorplanBlock />
      </div>
      <CtaBand
        tone="tinted"
        eyebrow="Nächster Schritt"
        headline="Jetzt starten oder 30 Minuten mit dem Gründerteam."
        body="Account erstellen ist der schnellste Weg ins System. Für Rollout, SSO oder eine Migration lohnt sich ein Erstgespräch."
        utm="home_de_cta_before_calendly"
      />
      <CalendlySection />
      <HomeFaqCorporate />
    </main>
  );
}
