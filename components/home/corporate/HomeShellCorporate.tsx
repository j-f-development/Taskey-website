import HeroCorporate from "./HeroCorporate";
import ThreePerspectives from "./ThreePerspectives";
import InProductPreview from "./InProductPreview";
import FloorplanBlock from "./FloorplanBlock";
import CalendlySection from "./CalendlySection";
import EnterpriseTrustStrip from "./EnterpriseTrustStrip";
import ProofRow from "./ProofRow";
import HomeFaqCorporate from "./HomeFaqCorporate";
import ClosingCtaCorporate from "./ClosingCtaCorporate";

export default function HomeShellCorporate() {
  return (
    <main className="tkc-canvas">
      <HeroCorporate />
      <ThreePerspectives />
      <InProductPreview />
      <div id="taskey-share">
        <FloorplanBlock />
      </div>
      <CalendlySection />
      <EnterpriseTrustStrip />
      <ProofRow />
      <HomeFaqCorporate />
      <ClosingCtaCorporate />
    </main>
  );
}
