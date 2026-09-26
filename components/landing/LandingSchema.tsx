/**
 * Renders a batch of JSON-LD schema blocks on a landing page. Pass any
 * number of plain objects; the component filters out undefined so pages
 * can conditionally include schemas without ternary noise.
 */

type SchemaObject = Record<string, unknown>;

export default function LandingSchema({
  blocks,
}: {
  blocks: (SchemaObject | undefined)[];
}) {
  return (
    <>
      {blocks
        .filter((b): b is SchemaObject => Boolean(b))
        .map((b, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
          />
        ))}
    </>
  );
}
