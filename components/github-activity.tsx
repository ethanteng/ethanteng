import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { SITE } from "@/lib/site";

const USERNAME = "ethanteng";

type Day = { date: string; level: number; label: string };

// GitHub has no unauthenticated API for the contribution calendar, so this
// reads the HTML fragment the profile page loads, refreshed twice a day.
async function getContributions() {
  try {
    const res = await fetch(
      `https://github.com/users/${USERNAME}/contributions`,
      { next: { revalidate: 60 * 60 * 12 } },
    );
    if (!res.ok) return null;
    const html = await res.text();

    const labels = new Map(
      Array.from(
        html.matchAll(/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)</g),
        ([, id, label]) => [id, label.trim()],
      ),
    );
    const days: Day[] = Array.from(
      html.matchAll(/<td\b[^>]*\bdata-date="[^"]*"[^>]*>/g),
      ([tag]) => {
        const attr = (name: string) =>
          tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? "";
        return {
          date: attr("data-date"),
          level: Number(attr("data-level")),
          label: labels.get(attr("id")) ?? "",
        };
      },
    ).sort((a, b) => a.date.localeCompare(b.date));
    const total = html.match(/([\d,]+)\s+contributions?\s+in the last year/)?.[1];

    return days.length && total ? { days, total } : null;
  } catch {
    return null;
  }
}

const utc = (date: string) => new Date(`${date}T00:00:00Z`);

// Columns are Sunday-first weeks, padded so the first day lands on its weekday.
function toWeeks(days: Day[]) {
  const padded = [
    ...Array<null>(utc(days[0].date).getUTCDay()).fill(null),
    ...days,
  ];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

// Label a column when its month changes, skipping labels that would collide
// with the next one or run past the last column.
function monthLabels(weeks: (Day | null)[][]) {
  const months = weeks.map((week) =>
    utc(week.find(Boolean)!.date).toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    }),
  );
  const labels = months.map((month, i) =>
    month !== months[i - 1] ? month : null,
  );
  return labels.map((label, i) =>
    label && !labels.slice(i + 1, i + 3).some(Boolean) && i < weeks.length - 2
      ? label
      : null,
  );
}

export async function GitHubActivity() {
  const contributions = await getContributions();
  if (!contributions) return null;

  const weeks = toWeeks(contributions.days);
  const labels = monthLabels(weeks);

  return (
    <div className="github-activity" data-reveal>
      <div className="github-activity-header">
        <p>
          <BrandIcon brand="github" />
          <span>
            <strong>{contributions.total}</strong> contributions in the last
            year
          </span>
        </p>
        <a href={SITE.social.github} className="text-link">
          github.com/{USERNAME} <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      {/* Right-to-left scrolling opens narrow screens on the latest weeks. */}
      <div className="contrib-scroll">
        <div
          className="contrib-graph"
          role="img"
          aria-label={`GitHub contribution graph: ${contributions.total} contributions in the last year`}
        >
          {weeks.map((week, i) => (
            <div key={i} className="contrib-week">
              <span className="contrib-month">{labels[i]}</span>
              {week.map((day, j) =>
                day ? (
                  <span
                    key={day.date}
                    className="contrib-day"
                    data-level={day.level}
                    title={day.label}
                  />
                ) : (
                  <span key={j} className="contrib-day contrib-pad" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
