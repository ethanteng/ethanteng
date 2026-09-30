import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BrandLinks } from "@/components/brand-icons";
import { GitHubActivity } from "@/components/github-activity";
import { CURRENT_WORK } from "@/lib/experience";

export function WorkShowcase() {
  const [linc, navi, uncloud] = CURRENT_WORK;
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="work-heading">What I’m building</h2>
        </div>
        <GitHubActivity />
        <article id={linc.id} className="project project-feature" data-reveal>
          <div className="project-copy">
            <div className="project-topline">
              <span className="eyebrow subtle">Personal finance · AI</span>
            </div>
            <h3>{linc.company}</h3>
            <p className="project-role">{linc.role}</p>
            <p className="project-summary">
              Personal finance, built around your questions.
            </p>
            <p className="project-detail">
              I built Ask Linc to help people connect their finances, ask
              questions in plain language, and explore the decisions ahead. I
              own the product and the engineering behind it.
            </p>
            <div className="project-links">
              <a href={linc.url} className="action-link">
                Visit asklinc.com <ArrowUpRight aria-hidden="true" />
              </a>
              {linc.social && (
                <BrandLinks
                  links={linc.social}
                  owner={linc.company}
                  className="brand-links"
                />
              )}
            </div>
          </div>
          <VideoPreview title="Ask Linc" videoId="iQ2AGix4q8Q" />
        </article>
        <div className="project-secondary">
          <article id={navi.id} className="project project-compact" data-reveal>
            <WebsitePreview
              name="Navi Nurses"
              domain="navinurses.com"
              src="/work/navi-nurses-website.png"
              height={760}
            />
            <div className="project-copy">
              <div className="project-topline">
                <span className="eyebrow subtle">
                  Healthcare · Full-stack ownership
                </span>
              </div>
              <h3>{navi.company}</h3>
              <p className="project-role">{navi.role}</p>
              <p className="project-summary">
                The technology behind the work of care.
              </p>
              <p className="project-detail">
                I own the full technical stack and production outcomes for
                Navi’s healthcare staffing platform: .NET / XAF APIs, React web,
                React Native mobile, chat, and Azure infrastructure.
              </p>
              <p className="project-detail">
                I run CI/CD and orchestrate AI agents across delivery, staying
                responsible for architecture, releases, and what happens in
                production.
              </p>
              <div className="project-links">
                <a href={navi.url} className="text-link">
                  navinurses.com <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
          <article
            id={uncloud.id}
            className="project project-compact"
            data-reveal
            data-reveal-delay={1}
          >
            <VideoPreview title="Uncloud teaser" videoId="oELh5dwlmHs" />
            <div className="project-copy">
              <div className="project-topline">
                <span className="eyebrow subtle">
                  Native app · Personal cloud
                </span>
              </div>
              <h3>{uncloud.company}</h3>
              <p className="project-role">{uncloud.role}</p>
              <p className="project-summary">My first native App Store app.</p>
              <p className="project-detail">
                I’m building Uncloud to make a personal cloud practical for a
                household. Files stay on your own storage, with separate
                accounts, imports from local folders and Dropbox, and sync
                across your computers.
              </p>
              <p className="project-detail">
                I own the product and engineering: ASP.NET Core,
                React/TypeScript, SQLite, and integrations for device sync and
                remote access.
              </p>
              <div className="project-links">
                <a href={uncloud.url} className="text-link">
                  uncloud.life <ArrowUpRight aria-hidden="true" />
                </a>
                {uncloud.social && (
                  <BrandLinks
                    links={uncloud.social}
                    owner={uncloud.company}
                    className="brand-links"
                  />
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WebsitePreview({
  name,
  domain,
  src,
  height,
}: {
  name: string;
  domain: string;
  src: string;
  height: number;
}) {
  return (
    <figure className="project-visual">
      <div className="browser-preview">
        <div className="browser-toolbar" aria-hidden="true">
          <span className="browser-dots">
            <span />
            <span />
            <span />
          </span>
          <span>{domain}</span>
        </div>
        <Image
          src={src}
          alt={`${name} website homepage`}
          width={1440}
          height={height}
          sizes="(max-width: 700px) calc(100vw - 5rem), (max-width: 1200px) 50vw, 560px"
          className="website-screenshot"
        />
      </div>
    </figure>
  );
}

function VideoPreview({ title, videoId }: { title: string; videoId: string }) {
  return (
    <figure className="project-visual">
      <div className="video-preview">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </figure>
  );
}
