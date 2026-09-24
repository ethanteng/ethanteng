import { ArrowUpRight } from "lucide-react";
import { CURRENT_WORK } from "@/lib/experience";

export function WorkShowcase() {
  const [linc, navi, uncloud] = CURRENT_WORK;
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="work-heading">What I’m building</h2>
        </div>
        <article id={linc.id} className="project" data-reveal>
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
            <a href={linc.url} className="text-link">
              asklinc.com <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <figure className="linc-panel">
            <p className="eyebrow">From a question to a plan</p>
            <blockquote className="linc-question">
              “Could we retire earlier?”
            </blockquote>
            <ol className="linc-flow">
              <li>
                <span>01</span>
                <div>
                  <strong>Connect the full picture</strong>
                  <p>Accounts, investments, spending, and debt.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Ask in your own words</strong>
                  <p>Bring the decision you’re trying to make.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Explore the tradeoffs</strong>
                  <p>See the assumptions. Try a different scenario.</p>
                </div>
              </li>
            </ol>
            <figcaption>
              An example of what you can explore with Linc.
            </figcaption>
          </figure>
        </article>
        <article id={navi.id} className="project" data-reveal>
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
              I own the full technical stack and production outcomes for Navi’s
              healthcare staffing platform: .NET / XAF APIs, React web, React
              Native mobile, chat, and Azure infrastructure.
            </p>
            <p className="project-detail">
              I run CI/CD and orchestrate AI agents across delivery, staying
              responsible for architecture, releases, and what happens in
              production.
            </p>
            <a href={navi.url} className="text-link">
              navinurses.com <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <figure className="navi-panel">
            <p className="eyebrow">My scope / Product to production</p>
            <div className="system-row">
              <div className="system-node">
                <strong>React</strong>
                <span>Web application</span>
              </div>
              <div className="system-node">
                <strong>React Native</strong>
                <span>Mobile applications</span>
              </div>
            </div>
            <div className="system-connector" aria-hidden="true" />
            <div className="system-node system-core">
              <strong>.NET / XAF</strong>
              <span>APIs &amp; business logic</span>
            </div>
            <div className="system-connector" aria-hidden="true" />
            <div className="system-row">
              <div className="system-node">
                <strong>Chat</strong>
                <span>Communication</span>
              </div>
              <div className="system-node">
                <strong>Azure + CI/CD</strong>
                <span>Infrastructure &amp; releases</span>
              </div>
            </div>
            <div className="system-base">AI-agent-orchestrated delivery</div>
            <figcaption>
              One connected platform. End-to-end responsibility.
            </figcaption>
          </figure>
        </article>
        <article id={uncloud.id} className="project" data-reveal>
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
              household. Files stay on your own storage, with separate accounts,
              imports from local folders and Dropbox, and sync across your
              computers.
            </p>
            <p className="project-detail">
              I own the product and engineering: ASP.NET Core, React/TypeScript,
              SQLite, and integrations for device sync and remote access.
            </p>
            <a href={uncloud.url} className="text-link">
              uncloud.life <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <figure className="uncloud-panel">
            <p className="eyebrow">Local-first by design</p>
            <p className="uncloud-statement">
              Your computer.
              <br />
              Your personal cloud.
            </p>
            <dl className="uncloud-facts">
              <div>
                <dt>Storage</dt>
                <dd>Ordinary files on your own drive.</dd>
              </div>
              <div>
                <dt>Household</dt>
                <dd>Separate accounts and private folders.</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>Browse, sync, and connect remotely.</dd>
              </div>
            </dl>
            <figcaption>Built with .NET, React, and SQLite.</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
