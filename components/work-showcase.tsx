import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BrandLinks } from "@/components/brand-icons";
import { GitHubActivity } from "@/components/github-activity";
import { CURRENT_WORK } from "@/lib/experience";

export function WorkShowcase() {
  const [featured, ...projects] = CURRENT_WORK;
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="work-heading">What I’m building</h2>
        </div>
        <GitHubActivity />
        <article id={featured.id} className="project project-feature" data-reveal>
          <ProjectCopy project={featured} featured />
          <WebsitePreview
            name={featured.company}
            domain="helloporch.store"
            src="/work/helloporch-website.jpg"
            width={1280}
            height={720}
            featured
          />
        </article>
        <div className="project-secondary">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="project project-compact"
              data-reveal
              data-reveal-delay={index}
            >
              {project.id === "ask-linc" ? (
                <VideoPreview title="Ask Linc" videoId="iQ2AGix4q8Q" />
              ) : project.id === "uncloud" ? (
                <VideoPreview title="Uncloud teaser" videoId="oELh5dwlmHs" />
              ) : (
                <WebsitePreview
                  name={project.company}
                  domain="navinurses.com"
                  src="/work/navi-nurses-website.png"
                  height={760}
                />
              )}
              <ProjectCopy project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCopy({
  project,
  featured = false,
}: {
  project: (typeof CURRENT_WORK)[number];
  featured?: boolean;
}) {
  return (
    <div className="project-copy">
      <div className="project-topline">
        <span className="eyebrow subtle">{project.category}</span>
      </div>
      <h3>{project.company}</h3>
      <p className="project-role">{project.role}</p>
      <p className="project-summary">{project.summary}</p>
      <p className="project-detail">{project.description}</p>
      <p className="project-detail">{project.contribution}</p>
      <div className="project-links">
        <a href={project.url} className={featured ? "action-link" : "text-link"}>
          {featured && "Visit "}
          {new URL(project.url).hostname.replace(/^www\./, "")}
          <ArrowUpRight aria-hidden="true" />
        </a>
        {project.social && (
          <BrandLinks
            links={project.social}
            owner={project.company}
            className="brand-links"
          />
        )}
      </div>
    </div>
  );
}

function WebsitePreview({
  name,
  domain,
  src,
  height,
  width = 1440,
  featured = false,
}: {
  name: string;
  domain: string;
  src: string;
  height: number;
  width?: number;
  featured?: boolean;
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
          width={width}
          height={height}
          sizes={
            featured
              ? "(max-width: 960px) calc(100vw - 5rem), 55vw"
              : "(max-width: 960px) calc(100vw - 5rem), 30vw"
          }
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
