import { ArrowUpRight } from "lucide-react";
import { CURRENT_WORK } from "@/lib/experience";

export function WorkShowcase() {
  const [linc, navi] = CURRENT_WORK;
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="work-heading">What I’m building.</h2>
          <p className="eyebrow">01 / Current work</p>
        </div>
        <article id={linc.id} className="project">
          <div className="project-copy">
            <div className="project-topline">
              <span className="project-number">01</span>
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
            <div className="project-tags">
              <span>AI-powered planning</span>
              <span>Product &amp; engineering</span>
            </div>
            <a href={linc.url} className="text-link">
              Explore Ask Linc <ArrowUpRight aria-hidden="true" />
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
        <article id={navi.id} className="project">
          <div className="project-copy">
            <div className="project-topline">
              <span className="project-number">02</span>
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
            <div className="project-tags">
              <span>Web &amp; mobile</span>
              <span>Cloud &amp; delivery</span>
              <span>Production ownership</span>
            </div>
            <a href={navi.url} className="text-link">
              About Navi Nurses <ArrowUpRight aria-hidden="true" />
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
      </div>
    </section>
  );
}
