import Image from "next/image";

const CONTEXT = [
  { name: "Launchpad Saarland", src: "/launchpad-saarland.png" },
];

export default function ProofRow() {
  return (
    <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
          <div>
            <div className="tkc-eyebrow">Made in Germany</div>
            <div
              className="mt-2"
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--tkc-ink)" }}
            >
              Aufgebaut im Saarland.<br />
              Für Betriebe in ganz DACH.
            </div>
          </div>
          <div
            className="flex items-center gap-8 flex-wrap justify-start md:justify-end"
            style={{ opacity: 0.75 }}
          >
            {CONTEXT.map((c) => (
              <div key={c.name} className="flex items-center" style={{ height: "44px" }}>
                <Image
                  src={c.src}
                  alt={c.name}
                  width={180}
                  height={44}
                  style={{
                    maxHeight: "44px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
