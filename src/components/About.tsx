import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
              About DrBills
            </p>
            <h2 className="section-title">
              A financial OS for the{" "}
              <span className="text-gradient">next generation.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#94A3B8]">
              DrBills Exchange is on a mission to make money borderless,
              programmable and beautiful. We blend cutting-edge fintech with
              elegant design so that anyone, anywhere, can move money the way
              they move ideas.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#94A3B8]">
              Trusted by hundreds of thousands of users and built by an obsessive
              team of engineers, designers and creators, DrBills is more than a
              payment app. It's an ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { v: "1.2M+", l: "Active users" },
                { v: "$4.8B", l: "Volume processed" },
                { v: "180+", l: "Countries served" },
                { v: "99.99%", l: "Uptime SLA" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="glass holographic-border rounded-3xl p-6"
                  style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}
                >
                  <div className="font-numbers text-4xl font-semibold tracking-tight text-gradient">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/55">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
