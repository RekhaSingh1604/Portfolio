import { Code2, Layers, Plug, Smartphone } from "lucide-react";
import { services } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const icons = [Code2, Layers, Plug, Smartphone];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">05 · Services</span>
          <h2>What I Can Build</h2>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={service.title}
                className="service-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="service-card-icon">
                  <Icon size={19} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
