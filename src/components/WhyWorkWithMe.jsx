import { Code, MonitorSmartphone, Gauge, Puzzle } from "lucide-react";
import { whyWorkWithMe } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const icons = [Code, MonitorSmartphone, Gauge, Puzzle];

export default function WhyWorkWithMe() {
  const ref = useReveal();

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">06 · Why Me</span>
          <h2>Why Work With Me</h2>
        </div>

        <div className="why-grid">
          {whyWorkWithMe.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.title} className="why-item reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="why-item-index">
                  <Icon size={17} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
