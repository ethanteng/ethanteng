interface PriceCardProps {
  id: string;
  title: string;
  price: string;
  summary: string;
  duration?: string;
  format?: string;
  bullets: string[];
  ideal: string;
}

export function PriceCard({
  id,
  title,
  price,
  summary,
  duration,
  format,
  bullets,
  ideal,
}: PriceCardProps) {
  return (
    <article id={id} className="pricing-card" data-reveal>
      <h3>{title}</h3>
      <p className="offer-price">{price}</p>
      <p className="pricing-summary">{summary}</p>
      {(duration || format) && (
        <p className="pricing-format">
          {[duration, format].filter(Boolean).join(" · ")}
        </p>
      )}
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p className="pricing-fit">
        <strong>A fit for</strong>
        {ideal}.
      </p>
    </article>
  );
}
