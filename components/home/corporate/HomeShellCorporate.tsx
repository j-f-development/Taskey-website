import HeroCorporate from "./HeroCorporate";
import FeaturesOverview from "./FeaturesOverview";
import EnterpriseTrustStrip from "./EnterpriseTrustStrip";
import FloorplanBlock from "./FloorplanBlock";
import CalendlySection from "./CalendlySection";
import HomeFaqCorporate from "./HomeFaqCorporate";

export default function HomeShellCorporate() {
  return (
    <main className="tkc-canvas">
      <HeroCorporate />
      <FeaturesOverview />
      <EnterpriseTrustStrip />
      <div id="taskey-share">
        <FloorplanBlock />
      </div>
      <CalendlySection />
      <HomeFaqCorporate />
    </main>
  );
}
